import React from 'react';
import "./ContactUs.css";

export const ContactUs = () =>{

    return(
        <div className="contact">
            <div className="contact-info">
                <span style={{fontSize:"2rem",fontWeight:"bold"}}>Contact Us</span>
                <div className="swirl"></div>
                <div className="contact-item">
                    <span className="fa fa-phone contact-glyph"></span>
                    <div className="contact-info-holder">
                        <span>Phone</span>
                        <span style={{color:"gray"}}>+64 21 040 2457</span>
                    </div>
                </div>
                <div className="contact-item">
                    <span className="fa fa-envelope contact-glyph"></span>
                    <div className="contact-info-holder">
                        <span>Email</span>
                        <span style={{color:"gray"}}>info@skillsme.co.nz</span>
                    </div>
                </div>
                <div className="contact-item">
                    <span className="fa fa-map-marker contact-glyph"></span>
                    <div className="contact-info-holder">
                        <span>Address</span>
                        <p style={{color:"gray"}}>
                            20 Symond Street
                            <br/>
                            Auckland CBD
                            <br/>
                            Auckland, New Zealand   
                        </p>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <input type="text" placeholder="Name:">

                </input>
                <input type="text" placeholder="Email:">
                    
                </input>
                <input type="text" placeholder="Subject:">
                    
                </input>
                <input type="text" placeholder="Phone:">
                    
                </input>
                <textarea placeholder="Message:">
                    
                </textarea>
                <button className="gradient-shifter purple-gradient-shifter" style={{marginLeft:"0.5rem",fontSize:"1.1rem",padding:"1rem"}}>We'll be there for you</button>
            </div>
        </div>
    )
}