import React from 'react';
import "./Users.css";
import github1 from "./github1.png";
import medal from "../Rating/l1.png";
import tree from "./a-15.png";
import verified from "./a-23.png"
import github2 from "./github2.png"

export const Users = () =>{

    return(
        <div className="users-holder">
            <div className="user container-border">
        <div className="judge-info">
        <img src={github1} style={{width:"3rem",height:"3rem"}}></img>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <span style={{margin:"auto 0",marginRight:"1rem",fontSize:"auto"}}>David M.</span>
                    <span style={{margin:"auto 0",marginRight:"0.2rem"}}>●</span>
                    <span style={{margin:"auto 0",fontSize:"auto"}}>Weekly Recommended</span>
                    <img src={medal} style={{width:"1.5rem",height:"1.5rem",marginLeft:"0.4rem"}}></img>
                </div>
                <div style={{display:"flex",marginTop:"0.2rem"}}>
                    <div className="tag" style={{color:"white",backgroundColor:"blue",background:"#37A5C2"}}>
                        ReactJS: 3.9/5.0 , Top 25%
                    </div>
                    <div className="tag" style={{color:"white",backgroundColor:"#3dd466",marginLeft:"0.4rem",background:"#37A5C2"}}>
                        NodeJS: 3.7/5.0 , Top 30%
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <span style={{color:"gray",fontSize:"0.8rem"}}>Desired location: <span style={{color:"black"}}>No Preference</span></span><br/>
        <span style={{color:"gray",fontSize:"0.8rem"}}>Desired salary:  <span style={{color:"black"}}>> 67,000 NZD/yr </span></span>
        <span style={{color:"gray",fontSize:"0.8rem"}}>Job Preference: <span style={{color:"black"}}>No Preference</span></span>
                
            </div>
            <div className="user container-border" style={{marginTop:"1rem"}}>
                <div className="judge-info">
        <img src={github2} style={{width:"3rem",height:"3rem"}}></img>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <span style={{margin:"auto 0",marginRight:"1rem",fontSize:"auto"}}>Tim J.</span>
                    <span style={{margin:"auto 0",marginRight:"0.2rem"}}>●</span>
                    <span style={{margin:"auto 0",fontSize:"auto"}}>Weekly Recommended</span>
                    <img src={tree} style={{width:"1.5rem",height:"1.5rem",marginLeft:"0.4rem"}}></img>
                    <img src={verified} style={{width:"1.5rem",height:"1.5rem"}}></img>
                </div>
                <div style={{display:"flex",marginTop:"0.2rem"}}>
                    <div className="tag" style={{color:"white",backgroundColor:"blue",background:"#37A5C2"}}>
                        VueJS: 4.0/5.0 , Top 15%
                    </div>
                    <div className="tag" style={{color:"white",backgroundColor:"#3dd466",marginLeft:"0.4rem",background:"#37A5C2"}}>
                        MySQL: 3.9/5.0 , Top 25%
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <span style={{color:"gray",fontSize:"0.8rem"}}>Desired location: <span style={{color:"black"}}>Mt Albert, Auckland, Auckland, New Zealand</span></span><br/>
        <span style={{color:"gray",fontSize:"0.8rem"}}>Desired salary:  <span style={{color:"black"}}> > 60,000 NZD/yr</span></span>
        <span style={{color:"gray",fontSize:"0.8rem"}}>Job Preference: <span style={{color:"black"}}> Full-Time</span></span>
                
                
            </div>
        </div>
    )
}