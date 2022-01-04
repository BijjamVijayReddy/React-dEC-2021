import React from "react";
class Event extends React.Component{
    state={
        count1:0
    }
    
    Update=()=>{
        this.setState({count1:this.state.count1 +1})
    }

    Reduce=()=>{
        this.setState({count1:this.state.count1 -1})
    }

    render(){
        return(
            <React.Fragment>
                <h2>Number={this.state.count1}</h2>
                <button className="btn btn-success" onClick={this.Update} >Add</button>
                <button className="btn btn-danger" onClick={this.Reduce} >Dec</button>


            </React.Fragment>
        )
    }


}
export default Event;