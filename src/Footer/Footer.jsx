import React from 'react';
import "./Footer.css";
import aws from "./aws.png"
import awsActive from "./aws-active.png";
import github from "./github.png";
import gitlab from "./gitlab.png";
import nzTech from "./nz-tech.png";
import unleash from "./unleash-space.png"

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
                    
                </div>
            </div>
        </div>
    )
}