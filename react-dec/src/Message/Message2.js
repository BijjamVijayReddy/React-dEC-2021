import React from "react"


let Message2=()=>{
    let message="   Hello"
    return(
        <React.Fragment>
            <div className="cointainer mt-4">
                <div className="row">
                  <div className="col md-6">
                      <div className="card">
                        <div className="card-header"><h3>message={message} </h3></div>
                        <div className="card-body ">
                            <button className="btn btn-success">GM</button>
                            </div>
                      </div>
                  </div>
                </div>
                 
            </div>
        </React.Fragment>
    )

}
export {Message2}