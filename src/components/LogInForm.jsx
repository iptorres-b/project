import React, {Component} from "react"
import './style/LogInForm.css'

class LogInForm extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="LogInForm m-4">
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
                        <button type="submit" className="Submit__button">Log In</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default LogInForm