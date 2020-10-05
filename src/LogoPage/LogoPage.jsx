import React from 'react'
import "./LogoPage.css"
import airnz from "./logos/air-nz.png"
import airbnb from "./logos/airbnb.png"
import amazon from "./logos/amazon.png"
import datacom from "./logos/datacom.png"
import facebook from "./logos/facebook.png"
import geo from "./logos/facebook.png"
import github from "./logos/github.png"
import jira from "./logos/jira.png"
import linkedin from "./logos/linkedin.png"
import lyft from "./logos/lyft.png"
import microsoft from "./logos/microsoft.png"
import myob from "./logos/myob.png"
import redash from "./logos/redash.png"
import salesforce from "./logos/salesforce.png"
import serko from "./logos/serko.png"
import slack from "./logos/slack.png"
import surverymonkey from "./logos/survey-monkey.png"
import todoist from "./logos/todoist.png"
import transcribeme from "./logos/transcribe-me.png"
import twilio from "./logos/twilio.png"
import vend from "./logos/vend.png"
import xero from "./logos/xero.png"
import zendesk from "./logos/zendesk.png"
import three from "./03.png"
import one from "./01.png"

export const LogoPage = () =>{
    //logos-right
    //header-bottm
    //explanation-left

    return(
        <div className="logo-page">
            <div className="explanation-container">
                <img src={three} style={{position:"absolute",right:"0"}}></img>
                <span className="purple-header">Find a Job worldwide without a resume.</span>
                <span className="explanation-header">Get referred to over 10K companies with your ratings</span>
                <div className="swirl">
                </div>
                <span className="explanation-description">With Skillsme, your projects has the potential to reach over 10,000 companies worldwide that is interested in recruiting tech talents like you. Validate your projects with ratings only on Skillsme.</span>
                <div className="box-holder">
                    <div className="color-change-container">
                        <span className="fa fa-support" style={{fontSize:"4rem",marginBottom:"1rem",color:"blue"}}></span>
                        <div>
                            <span className="purple-color changing-color">2</span>
                            <span className="purple-color ">K+</span>
                        </div>
                            <span className="changing-color">Skillsme Users</span>
                    </div>
                    <div className="color-change-container">
                        <span className="fa fa-bullseye" style={{fontSize:"4rem",marginBottom:"1rem",color:"blue"}}></span>
                        <div>
                            <span className="purple-color changing-color">2</span>
                            <span className="purple-color">K+</span>
                        </div>
                            <span className="changing-color">Skillsme Users</span>

                    </div>
                </div>
            </div>
            <div className="logo-container">
                <div className="logo-row">
                    <img src={airbnb}></img>
                    <img src={airnz}></img>
                    <img src={amazon}></img>
                    <img src={datacom}></img>
                    <img src={facebook}></img>
                </div>
                <div className="logo-row">
                    <img src={geo}></img>
                    <img src={github}></img>
                    <img src={jira}></img>
                    <img src={linkedin}></img>
                </div>
                <div className="logo-row">
                    <img src={lyft}></img>
                    <img src={microsoft}></img>
                    <img src={myob}></img>
                    <img src={redash}></img>
                    <img src={salesforce}></img>
                    
                </div>
                <div className="logo-row">
                    <img src={serko}></img>
                    <img src={slack}></img>
                    <img src={surverymonkey}></img>
                    <img src={todoist}></img>
                    
                </div>
                <div className="logo-row">
                    <img src={transcribeme}></img>
                    <img src={twilio}></img>
                    <img src={vend}></img>
                    <img src={xero}></img>
                    <img src={zendesk}></img>
                </div>
            </div>
        </div>
    )
}