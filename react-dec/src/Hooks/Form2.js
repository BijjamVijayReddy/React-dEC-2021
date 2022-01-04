import React,{useState} from "react";
let Dom=()=>{
     let [Pen,SetPen]  =useState({ email:"",password:""})
    let Update=(event)=>{
      SetPen({...Pen,[event.target.name]:event.target.value})
     }
    let Delete=(event)=>{
      
      SetPen({...Pen,[event.target.name]:event.target.value})
    }
      let Bottle=()=>{
        alert("SUBMIT SUCESSFULLY")
      }



  return(
    <React.Fragment>
      <div className="cointainer">
        <div className="row">
          <div className="col md-5">
            <div className="card">
              <div className="card-header">
                <h3>Login Form</h3>

              </div>
              <div className="card-body">
              <form onClick={Delete}>
                <div className="form-group">
                <label>Email=</label>
                <input type="text" placeholder="Please enter valid Email" onChange={Update} name="email"/> 
                </div><div className="form-group">
                <label>Password=</label>
                <input type="text" placeholder="Please enter valid Password" onChange={Delete} name="password"/> <br/>
                <button className="btn btn-success" onClick={Bottle}>Login</button>


                </div>


              </form>
              <hr/>
              <pre>{JSON.stringify(Pen)}</pre>
                  
              </div>


            </div>


          </div>
          </div>
           </div>

    </React.Fragment>
  )


}
export default Dom