import React from "react";
class Count extends React.Component{
    state={
        Number:1
    }
    inc=()=>{
        this.setState({Number:this.state.Number +1})
    }
    dec=()=>{
        this.setState({Number:this.state.Number -1})
    }
     render(){
         return(
             <React.Fragment>
                 <h2> Number:{this.state.Number}</h2>
                 <button className="btn btn-success" onClick={this.inc} >ADD</button>
                 <button className="btn btn-danger" onClick={this.dec} >ADD</button>




             </React.Fragment>
         )
     }

}
export default Count;