import React from "react";
class Password extends React.Component{
    state={
        input:"Password"
    }
    Update=()=>{
        this.setState({Input:"Text"})
    }


   render(){
       return(
           <>
           <input type={this.Update} />
           
           
           </>
       )
   }

}
export default Password;
