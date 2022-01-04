import React from "react";
import employee from "./TableData";
class Apple extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col md-10">
                            <table className="table table-hover">
                                <thead className="bg-info">
                                    <tr>
                                        <th>S.no</th>
                                        <th>NAME</th>
                                         <th>Emai</th>
                                        <th>Gender</th>
                                        <th>Country</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {employee.map((emp)=>{
                                        return(
                                        <tr>
                                            <td>{emp.id}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.gender}</td>
                                            <td>{emp.countery}</td>


                                        </tr>)
                                    })}
                                </tbody>
                               
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }


}
export default Apple