import React, { Component } from 'react';
import HeaderBackground from '../images/background.JPG'
import ProfilePic from '../images/image-victor.jpg'
import "./style/Badge.css";

class Badge extends Component {
    render() {
        return (
        <React.Fragment>
            <div className="Badge m-5">
                <div className="Badge__header">
                    <img src={HeaderBackground} alt="header_background"/>
                </div>
                <div className="container mt-5 mb-1 Badge__userInfo ">
                    <div className="Badge__userImage">
                        <img src={this.props.picture} alt="profile_picture" />
                    </div>
                    <h4 className="text-center mt-5">John Lindemann <i>32</i></h4>
                        <p className="text-center">New York</p>   
                </div>
                <div className="Badge__info container pt-3">
                    <div className="row">
                        <div className="col">
                            <h4 className="text-center fw bold">80k</h4>
                            <p className="text-center">Followers</p>
                        </div>
                        <div className="col">
                        <h4 className="text-center fw bold">802k</h4>
                            <p className="text-center">Likes</p>
                        </div>
                        <div className="col">
                        <h4 className="text-center fw bold">209</h4>
                            <p className="text-center">Pictures</p>
                        </div>
                    </div>


                </div>
            </div>
        </React.Fragment>);
    }
}

export default Badge;
