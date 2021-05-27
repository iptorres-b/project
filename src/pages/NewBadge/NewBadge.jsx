import React from "react";
import Hero from "../../components/Hero";
import "./NewBadge.css";
import Badge from "../../components/Badge"
import BadgeForm from "../../components/BadgeForm"

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

    handleChange = event =>{
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="row">
                    <div className="col-6">
                        <Badge
                        header_picture = {this.state.form.header_picture || "https://www.universetoday.com/wp-content/uploads/2021/04/speckle.jpg"}
                        profile_picture = {this.state.form.profile_picture || "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                        name = {this.state.form.name||"John Ibalp  "}
                        age = {this.state.form.age || "23"}
                        city = {this.state.form.city || "Salt Lake, Ut"}
                        followers = {this.state.form.followers || "0"}
                        likes = {this.state.form.likes || "0"}
                        posts = {this.state.form.posts || "0"}
                        ></Badge>
                    </div>
                    <div className="col-6">
                        <BadgeForm 
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        formValues={this.state.form}></BadgeForm>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewBadge;