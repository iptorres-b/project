import React from "react"
import "./SignIn.css"
import SignInForm from "../../components/SignInForm"
import Hero from "../../components/Hero"

class SignIn extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Main">
                    <div className="Main__content">
                        <SignInForm></SignInForm>
                    </div>
                    <Hero h={"88vh"}></Hero>
                </div>
            </React.Fragment>
        )
    }
}

export default SignIn