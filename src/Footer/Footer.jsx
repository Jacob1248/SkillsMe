import React from 'react';
import "./Footer.css";
import aws from "./aws.png"
import awsActive from "./aws-active.png";
import github from "./github.png";
import gitlab from "./gitlab.png";
import nzTech from "./nz-tech.png";
import unleash from "./unleash-space.png"
import logo from "../Navbar/logo.png"

export const Footer = () =>{

    return(
        <div className="footer">
            <div className="partners">
                <span>Powered By</span>
                <div className="sponsor-holder">
                    <img src={aws}></img>
                    <img src={awsActive}></img>
                    <img src={github}></img>
                    <img src={gitlab}></img>
                    <img src={nzTech}></img>
                    <img src={unleash}></img>
                </div>
            </div>
            <div className="footer-widgets">
                <div className="footer-form">
                    <span style={{fontSize:"0.8rem"}}>Subscribe us with your email to keep yourself updated!</span>
                    <div className="input-button">
                        <input type="text" placeholder="youremail@email.com"></input>
                        <button className="gradient-shifter purple-gradient-shifter">Join Now</button>
                    </div>
                    <span style={{fontSize:"0.8rem"}}>*Subscribe today for update.</span>
                </div>
                <div className="footer-info">
                    <div className="info-section">
                        <span>Our Work</span>
                        <span>Log In</span>
                        <span>Sign Up</span>
                        <span>Privacy</span>
                        <span>Code of Conduct</span>
                    </div>
                    <div className="info-section">
                        <span>About Us</span>
                        <span>Skillsme Talent</span>
                        <span>Skillsme Uni</span>
                        <span>Press</span>
                    </div>
                    <div className="info-section">
                        <span>Social Media</span>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <span className="fa fa-facebook"></span>
                            <span className="fa fa-linkedin"></span>
                            <span className="fa fa-youtube"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-end">
                <span>Copyright Skillsme Ltd. 2020. All Rights Reserved</span>
                <span>20 Symond St., Auckland CBD, Auckland, New Zealand</span>
                <a><img src={logo}></img></a>
            </div>
            <div className="circle-spin"></div>
            <div className="circle-spin small-circle"></div>
        </div>
    )
}