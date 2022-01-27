
import React, { Component } from 'react';
import axios from "axios"
class Axios1 extends Component {

    state={
        userData:[]
    }
    update=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((Response)=>{this.setState({userData:Response.data})})
            .catch()

    }
  render() {
    return <div>
     <button onClick={this.update} className='btn btn-success rounded-0'>Get</button>
     <table className='table table-hover'>
     <thead>
     <th>Name</th>
     <th>email</th>
     <th>Phone-Number</th>
     <th>city</th>

     
     
     </thead>
     <tbody>
     </tbody>
      {this.state.userData.map((data)=>{
         return(
         <tbody>
         <td>{data.name}</td>
         <td>{data.email}</td>
         <td>{data.phone}</td>
         <td>{data.address.city}</td>
         
         </tbody>
         
         
        

       ) })}
     </table>
    
    </div>;     
  }
}
export default  Axios1 ;
