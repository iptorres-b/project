import React from "react"
import HeroImage from "../images/back2.jpg"
import "./style/Hero.css"

const Hero = props => {
    return(
        <React.Fragment>
            <div className="Hero">
                <div className="Hero__color_filter" style={{height: props.h}}></div>
                <div className="Hero__img" style={{height: props.h}}>
                    <img src="https://images.pexels.com/photos/4456224/pexels-photo-4456224.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero