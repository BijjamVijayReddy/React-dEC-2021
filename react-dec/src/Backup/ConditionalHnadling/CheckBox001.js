import React, { Component } from 'react'

 class CheckBox001 extends Component {
     state={
         Dehradun:"",
         Nellore:"",
         Hyderbad:""
     }
     Update=(apple)=>{
         this.setState({
             [apple.target.name]:apple.target.checked
         })

     }

    render() {
        return (
            <>
            <div className='cointainer' mt-5>
                <div className='row'>
                    <div className='col md-2'>
                        <div className="form-check">
                           <input type="checkbox" onChange={this.Update} name='Dehradun'/>
                           <label>Dehradun</label>
                          </div >
                          <div className="form-check">
                           <input type="checkbox" onChange={this.Update} name='badrinath'/>
                           <label>badrinath</label>
                           </div>
                           <div className="form-check">
                              <input type="checkbox" onChange={this.Update} name='nainital'/>
                             <label>nainital</label> 
                             </div>

                     </div>
                       <div className='col md-10'>
                          {this.state.Dehradun ?(<>
                            <div className="card">
                    <div className="card-body bg-light">
                      <p>
                       Vijay
                      </p>
                      <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2019/02/Rishikesh-Yoga-City-India.jpg" height={200} width={400}/>
                    </div>
                  </div>
                         </>):null}


                             {this.state.badrinath ?(<>
                                <div className="card">
                    <div className="card-body bg-light">
                      <p>
                      badrinath
                      </p>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjS_lKBoKebC2UwbSW4AKdvvwpZeW10leEg&usqp=CAU"/>
                    </div>
                  </div>
                     </>):null}

                      {this.state.nainital ?(<>
                        <div className="card">
                    <div className="card-body bg-light">
                      <p>
                      nainital
                      </p>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksxAXIWN8tP3g9YUThnYMjnVjl64nzeb1LQ&usqp=CAU'/>
                    </div>
                  </div>
                       </>):null}
                    </div>
                    </div>
                </div>

            
            
           
            </>
                
            
        )
    }
}

export default CheckBox001
