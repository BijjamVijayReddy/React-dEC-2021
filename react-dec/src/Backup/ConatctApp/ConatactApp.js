import React from "react";
import Axios from "axios";
import ContactList from "./ContactList";
import ContactCrad from "./ConatactCard";

class ContactApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            UserData:[]
        }
    }
    componentDidMount(){
        Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
        .then((Responsive)=>{
            this.setState({UserData:Responsive.data})

        })
        .catch()
    }


    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col md-8">
                            <ContactList
                             contacts={this.state.UserData}/>

                        </div>
                        <div className="col md-4">
                         <ContactCrad/>
                        </div>
                    
                    </div>
                </div>


            </React.Fragment>
        )
    }


}

export default ContactApp;