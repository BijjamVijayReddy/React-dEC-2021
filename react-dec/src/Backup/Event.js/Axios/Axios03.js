import React from "react";
import Axios from "axios";
class Axios1 extends React.Component{
    state={
        Userdata:[],
    }
    Update=()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
             .then((Response)=>{
                 console.log(Response)
                 this.setState({Userdata:Response.data})
             })
             .catch()
            }
            

    

    render(){
        return(
            <React.Fragment>
           <button className="btn btn-danger"onClick={this.Update}>Delete</button>
          {this.state.Userdata.map((data)=>{
              return<h3>{data.address.zipcode}</h3>
          })}
         
            </React.Fragment>
        )
    }
    
}
export default Axios1;