import React,{useState} from "react";
let Hook=()=>{
    let [Message,setMessage]=useState("Vijay")
    
    return(
        <>
        <h3>Name={Message}</h3>
        <button className="btn btn-success" onClick={()=>{setMessage("Murali Vijay")}}>Change</button>
        
        </>
    )

}
export default Hook