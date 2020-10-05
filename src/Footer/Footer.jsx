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

    const emailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/

    let emailRef = null;

    const matchEmail = () =>{
        if(emailRef.value.trim()!="" || emailRef.value.trim()!=undefined){
            if(!emailRegex.test(emailRef.value.trim())){
                return false
            }
            return true
        }
        return false;
    }

    const validateEmail = () =>{
        if(!matchEmail()){
            alert('Your email id is empty/not valid')
        }
        else{
            alert('Success!')
        }
    }

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
                        <input ref={ref=>emailRef=ref} type="text" placeholder="youremail@email.com"></input>
                        <button onClick={()=>validateEmail()} className="gradient-shifter purple-gradient-shifter">Join Now</button>
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