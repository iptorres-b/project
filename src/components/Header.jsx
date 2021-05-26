import React from "react"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <img src="https://templates.utah.edu/_main-v2/_images/header/background/blue.jpg" alt="logo" />
                </div>
            </React.Fragment>
        );
    }
}

export default Header;