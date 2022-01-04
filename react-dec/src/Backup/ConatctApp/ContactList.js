import React from "react";


class ContactList extends React.Component{



    render(){

        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover">
                                <thead className="bg-success">
                                    <th>Name</th>
                                    <th>country</th>
                                    <th>Gender</th>
                                    <th>Post-code</th>
                                </thead>
                                <tbody>
                                    {this.props.contacts.map((data)=>{
                                          return(
                                              <tr>
                                                  <td>{data.name.first}</td>
                                                  <td>{data.location.country}</td>
                                                  <td>{data.gender}</td>
                                                  <td>{data.location.postcode}</td>




                                              </tr>

                                          )

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
export default ContactList;