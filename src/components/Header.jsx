import React from "react"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <img src="https://i.pinimg.com/736x/ba/a4/23/baa42386de11b069e0a9013f5bc5ca2e.jpg" alt="logo" />
                </div>
            </React.Fragment>
        );
    }
}

export default Header;