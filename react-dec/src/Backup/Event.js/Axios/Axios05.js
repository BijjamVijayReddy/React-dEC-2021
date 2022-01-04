import React from "react";
import Axios from "axios";
class Vijay extends React.Component{
    state={
        Userdata:[],
    }
         Update=()=>{
             Axios.get("https://jsonplaceholder.typicode.com/users")
                  .then((Ajay)=>{
                     
                      this.setState({Userdata:Ajay.data})
                  })
                  .catch()
         }


    render(){
        return(<React.Fragment>
            <button onClick={this.Update}>Deatils</button>
            {this.state.Userdata.map((data)=>{
                return<h2>{data.name}</h2>
            })}


        </React.Fragment>)
    }







}
export default Vijay;