// import React, { Component, createRef } from 'react';
// class Form extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             card: '',
//             cvv: ''
//         }
//         this.cardRef = createRef();
//         this.cvvRef = createRef();
//         this.nameRef = createRef();
//     }
//     render() {
//         const changeHandler = (e) => {
//             this.setState({
//                 [e.target.name]: e.target.value
//             })
//         };
//         const checkHandler = (e) => {
//             this.setState({
//                 [e.target.name]: e.target.checked
//             })
//         };
//         const changeHandlerTwo = (e) => {
//             this.setState({
//                 [e.target.name]: e.target.value
//             }, () => {
//                 if (this.state.card.length === 16) {
//                     this.cvvRef.current.focus();
//                 }
//                 if (this.state.cvv.length === 3) {
//                     this.nameRef.current.focus();
//                 }
//             })
//         }
//         return (
//             <>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-4 mt-3">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Firstname"
//                                         name="firstName"
//                                         onChange={changeHandler}
//                                     />
//                                     <input
//                                         type="text"
//                                         className="form-control mt-3"
//                                         placeholder="LastName"
//                                         name="lastName"
//                                         onChange={changeHandler}
//                                     />
//                                     <span className="d-flex mt-3 align-items-center ">
//                                         <input
//                                             type="radio"
//                                             className="form-check"
//                                             name="gender"
//                                             value="Male" onChange={changeHandler} /> Male
//                                         <input
//                                             type="radio"
//                                             className="form-check"
//                                             name="gender"
//                                             value="Female" onChange={changeHandler} /> Female
//                                     </span>
//                                     <select name="select" className="form-control mt-3" onChange={changeHandler}>
//                                         <option>Choose select</option>
//                                         <option value="CEO">CEO</option>
//                                         <option value="Manager">Manager</option>
//                                         <option value="Programmer">Programmer</option>
//                                     </select>
//                                     <input type="checkbox"
//                                         className="form-check mt-3"
//                                         name="agree" onChange={checkHandler} /> I agree on bla bla
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-8 mt-3">
//                             <div className="card">
//                                 <div className="card-header">
//                                     <h1 className="text-center text-success">Qatar Bank</h1>
//                                 </div>
//                                 <div className="card-body">
//                                     <div className="input-group">
//                                         <input
//                                             type="number"
//                                             className="form-control w-75"
//                                             placeholder="CARD NUMBER"
//                                             name="card"
//                                             ref={this.cardRef}
//                                             onChange={changeHandlerTwo}
//                                         />
//                                         <input type="number"
//                                             className="form-control w-25"
//                                             placeholder="CVV"
//                                             name="cvv"
//                                             ref={this.cvvRef}
//                                             onChange={changeHandlerTwo}
//                                         />
//                                     </div>
//                                     <input type="text"
//                                         className="form-control mt-3"
//                                         placeholder="CARD HOLDER"
//                                         name="name"
//                                         ref={this.nameRef}
//                                         onChange={changeHandlerTwo}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }
// export default Form;