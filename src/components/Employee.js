import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            employees: [],
            deleteModal: false,
            selectedId: '',
            selectedItem: {},
        }
    }
    componentDidMount() {
        axios.get("https://nimadir.herokuapp.com/api/employee")
            .then((res) => {
                this.setState({
                    employees: res.data.object
                })
            })
    }
    render() {
        const changeOpenModal = () => {
            this.setState({
                open: !this.state.open
            })
        }

        const changeDeleteModal = () => {
            this.setState({
                deleteModal: !this.state.deleteModal
            })
        }

        const changeHandler = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        const saveEmployee = (e) => {
            e.preventDefault();
            if (this.state.selectedItem.id) {
                axios.put("https://nimadir.herokuapp.com/api/employee/" + this.state.selectedItem.id, this.state)
                    .then((res) => {
                        getEmployee();
                        changeOpenModal();
                    })
            } else {
                axios.post("https://nimadir.herokuapp.com/api/employee", this.state)
                .then((res) => {
                    getEmployee();
                    changeOpenModal();
                })
            }
        }

        const editPerson = (item) => {
            this.setState({
                selectedItem: item
            })
            changeOpenModal();
        }

        const getEmployee = () => {
            axios.get("https://nimadir.herokuapp.com/api/employee")
                .then((res2) => {
                    console.log(res2);
                    this.setState({
                        employees: res2.data.object
                    })
                })
        }

        const deleteEmployee = (id) => {
            this.setState({
                selectedId: id
            });
            changeDeleteModal();
        }

        const deleteEmployeeOrg = () => {
            axios.delete("https://nimadir.herokuapp.com/api/employee/" + this.state.selectedId)
                .then((res) => {
                    getEmployee();
                    changeDeleteModal();
                    this.setState({
                        selectedId: ''
                    })
                })
        }
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <button type="button" className="btn btn-success ml-auto d-block mt-5" onClick={changeOpenModal}>Add</button>
                        </div>
                        {this.state.employees.map((item, index) => {
                            return (
                                <div className="col-4 mt-3" key={item.id}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3>{item.firstName + " " + item.lastName}</h3>
                                        </div>
                                        <div className="card-body">
                                            <p>Age: <b>{item.age}</b></p>
                                            <p>Salary: <b>{item.salary}$</b></p>
                                            <p>Position: <b>{item.position}$</b></p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-center">
                                            <button className="btn btn-success" onClick={() => editPerson(item)}>Edit</button>
                                            <button className="btn btn-danger" onClick={() => deleteEmployee(item.id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Modal isOpen={this.state.open} toggle={changeOpenModal}>
                    <ModalHeader>
                        <h3>Add Employee</h3>
                    </ModalHeader>
                    <form onSubmit={saveEmployee} method="post">
                        <ModalBody>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Firstname"
                                name="firstName"
                                onChange={changeHandler}
                            />
                            <input
                                type="text"
                                className="form-control mt-3"
                                placeholder="Lastname"
                                name="lastName"
                                onChange={changeHandler}
                            /><input
                                type="number"
                                className="form-control mt-3"
                                placeholder="Age"
                                name="age"
                                onChange={changeHandler}
                            />
                            <input
                                type="number"
                                className="form-control mt-3"
                                placeholder="Salary"
                                name="salary"
                                onChange={changeHandler}
                            />
                            <select name="position" className="form-control mt-3" onChange={changeHandler}>
                                <option>Choose select</option>
                                <option value="CEO">CEO</option>
                                <option value="Manager">Manager</option>
                                <option value="Product Manager">Product Manager</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="Sales Manager">Sales Manager</option>
                                <option value="Programmer">Programmer</option>
                                <option value="Driver">Driver</option>
                                <option value="Security">Security</option>
                                <option value="Chef">Chef</option>
                            </select>
                        </ModalBody>
                        <ModalFooter>
                            <button type="submit" className="btn btn-success">Save</button>
                            <button type="button" className="btn btn-secondary" onClick={changeOpenModal}>Cancel</button>
                        </ModalFooter>
                    </form>
                </Modal>
                <Modal isOpen={this.state.deleteModal} toggle={changeDeleteModal}>
                    <ModalBody>
                        <h4>Uvernmsa</h4>
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-danger' onClick={deleteEmployeeOrg}>Da</button>
                        <button className='btn btn-secondary' onClick={changeDeleteModal}>Yo</button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}
export default Employee;