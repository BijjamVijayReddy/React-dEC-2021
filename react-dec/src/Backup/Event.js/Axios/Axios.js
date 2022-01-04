import React from "react";
import Axios from "axios";

 
  class Apple extends React.Component{
      state={
          UserData:[],
      }
      Update=()=>{
          Axios.get("https://jsonplaceholder.typicode.com/users")
              .then((Response)=>{
                  console.log(Response)
                 this.setState({UserData:Response.data})
              })
              .catch()
      }


     render() {
         return (
             <div>
                 <button onClick={this.Update}>Axios</button>
                 {/* <h6>{JSON.stringify(this.state.UserData)}</h6> */}
                 {this.state.UserData.map((data)=>{
                    return  <h1>{data.address.zipcode}</h1>
                 })}
                
             </div>
         )
     }
 }
 
 export default Apple;
 