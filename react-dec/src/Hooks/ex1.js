import React,{useState} from "react";

let Ex=()=>{

      let[Number,SetNumber]  =useState({Count:0})
     


    

      return<>
      <h4> number={Number.Count}</h4>
      <button className="btn btn-success" onClick={()=>{SetNumber({Count:Number.Count +1})}}>Add</button>
     <button className="btn btn-danger" onClick={()=>{SetNumber({Count:Number.Count -1})}}>Dec</button>
      
    
      </>




}
export default Ex;