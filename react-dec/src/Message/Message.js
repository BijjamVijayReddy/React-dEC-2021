 import React from "react";
import {GmAction}from '../Redux/Message/Message.action';
import {useDispatch,useSelector} from "react-redux"



 
 
let  Message=()=> {
    
    let dispatch=useDispatch();
    let message=useSelector((state)=>{
        return state;
    })
    let gmhandeler=()=>{
    dispatch(GmAction())


    }
    

     return (
         <React.Fragment>
             <div className="container">
                 <div className="row">
                     <div className="col md-5">
                         <div className="card md-8">
                             <div className="card-header">
                                 <h4>{JSON.stringify(message)}</h4>

                             </div>
                             <div className="card-body">
                                <form>
                                    <button className="btn btn-primary mr-4"  onClick={gmhandeler} >Gm</button>
                                    <button className="btn btn-secondary" >Ga</button>
                      

                                </form>

                             </div>

                         </div>


                     </div>

                 </div>

             </div>



         </React.Fragment>
     )
 }
 
 export default Message
 