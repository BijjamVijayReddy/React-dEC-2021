import React from "react";
import axios, { Axios } from "axios";
class Rough extends React.Component{
    state={
        userData:[]
    }
      
    Update=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
              .then((Response)=>{
                 
                  this.setState({userData:Response.data})

              })
              .catch()
    }
    
    render(){
        return(
            <React.Fragment>

                <button className="btn btn-success" onClick={this.Update}>Click ON me</button>
                {this.state.userData.map((data)=>{
                    return  <h2>{data.phone}</h2>
                   
                    

                })}
            </React.Fragment>

        )
    }


}
export default Rough;