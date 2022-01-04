import React from "react";
import Axios from "axios";
class ConatctList extends React.Component{
    constructor(props) {
        super(props);
        this.state = { UserData: [] };
        
      }
    componentDidMount=()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users") 
        .then((Responsive)=>{
            this.setState({UserData:Responsive.data})

        }).
        catch()
    }

    render(){
        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state.UserData)}</pre>
                <div className="cointainer">
                    <div className="row">
                        <div className="col">
                            <table className="table table-light bg-light">
                                <thead className="bg-success">
                                <th>iD</th>
                                <th>NAME</th>
                                <th>Email</th>
                                </thead>
                                <tbody>

                                    {this.state.UserData.map((data)=>{

                                        return <tr>
                                            <td>{data.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                        </tr>
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
export default ConatctList;