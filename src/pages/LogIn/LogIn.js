import React from "react"
import "./LogIn.css"
import LogInForm from "../../components/LogInForm"
import Hero from "../../components/Hero"

class LogIn extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Main">
                    <div className="Main__content">
                        <LogInForm></LogInForm>
                    </div>
                    <Hero h={"88vh"}></Hero>
                </div>
            </React.Fragment>
        )
    }
}

export default LogIn