// import React, { Component } from 'react';
// import data from './data.json'

// class Milyaner extends Component {

//     render() {
//         let milyaner = data;
//         // console.log(data);
//         return (
//             <div className='container'>
//                 <div className="row">
//                     {milyaner.map((item,index) => {
//                         return(
//                             <div className="col-4 mt-3">
//                                 <div className="card">
//                                     <div className="card-header">
//                                         <h4>{item.name + " " + item.surname}</h4>
//                                     </div>

//                                     <div className="card-body">
//                                         <p className='text-success'>Net Worth: <b>{item.netWorth}</b></p>
//                                         <p>City: <b className='text-primary'>{item.city}</b></p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Milyaner;