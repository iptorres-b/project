import React from "react";
import Hero from "../../components/Hero";
import "./NewBadge.css";
import Badge from "../../components/Badge"

class NewBadge extends React.Component{

    state ={
        loading : false,
        error: null,
        form:{
            header_picture:"",
            profile_picture:"",
            name:"",
            age:"",
            city:"",
            followers:"",
            likes:"",
            posts:"",
        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="col">
                        <Badge
                        header_picture = {this.state.form.header_picture || "https://www.universetoday.com/wp-content/uploads/2021/04/speckle.jpg"}
                        profile_picture = {this.state.form.profile_picture || "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                        
                        ></Badge>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewBadge;