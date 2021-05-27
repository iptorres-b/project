import React from "react"
import {Link} from "react-router-dom"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <Link to="/">
                        <img src="https://templates.utah.edu/_main-v2/_images/header/background/blue.jpg" alt="logo" />
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;