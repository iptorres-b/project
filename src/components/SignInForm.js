import React, {Component} from "react"
import './style/SignInForm.css'

class SignInForm extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="SignInForm m-4">
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group mb-1">
                            <label className="mb-1">
                                E-mail
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                name="conf_password"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Age
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="age"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                City
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                name="city"
                            />
                        </div>
                        <button type="submit" className="Submit__button">Sign In</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignInForm