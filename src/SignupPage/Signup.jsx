import React, { useEffect, useState } from 'react';
import "./Signup.css";
import gsap, {Power1 } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, gsap);

export const Signup = () =>{

    const [scrollMagic] = useState({
        controller: new ScrollMagic.Controller(),
        timelineOne: gsap.timeline(),
    });

    const { controller,timelineOne} = scrollMagic;
    let textRef,pageRef=null;

    useEffect(
        
        ()=>{
                
            function f(){
                timelineOne
                .fromTo(textRef, { transform:"translateX(5%)" , opacity:0 }, { transform:"translateX(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.8 },0)
                new ScrollMagic.Scene({
                  triggerElement: pageRef,
                  triggerHook: "onEnter",
                  duration: "0%",
                  offset:"200"
                })
                  .setTween(timelineOne)
                  .addTo(controller);
            }
            f();
        }
    )

    return(
        <div ref={ref=>pageRef=ref} className="signup">
            <div className="gradient-bg row-reverse">
                <div ref={ref=>textRef=ref} className="text-signup">
                    <span style={{fontSize:"2.5rem",fontWeight:"bold",color:"white"}}>We let coders land their dream jobs without a resume</span>
                    <button className="gradient-shifter" style={{marginTop:"2rem",fontSize:"1rem",padding:"1.2rem"}}>Sign Up Now</button>
                </div>
                <div className="girl">

                </div>
            </div>
            <div className="showcase">
                <div className="showcase-item">
                    <svg className="mobile-centered" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="#1264a3" width="57.6" height="57.6"><path d="M0 0h24v24H0z" fill="none"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
                    <a href="#" style={{color:"#1264A3",fontWeight:"bold",marginTop:"1rem"}}>Worldwide Coding Jobs</a>
                    <span style={{color:"gray",marginTop:"1rem"}}>Get job interview opportunities from any conutry you wish to work in.</span>
                </div>
                <div className="showcase-item">
                <svg className="mobile-centered" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="#1264a3" width="57.6" height="57.6"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>
                <a href="#" style={{color:"#1264A3",fontWeight:"bold",marginTop:"1rem"}}>Set Desired Salary</a>
                    <span style={{color:"gray",marginTop:"1rem"}}>Show your capability and desired salary to filter out companies not in your range.</span>
                </div>
                <div className="showcase-item" style={{marginBottom:"5rem"}}>
                <svg className="mobile-centered" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="#1264a3" width="57.6" height="57.6"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M6.05,8.05c-2.73,2.73-2.73,7.15-0.02,9.88c1.47-3.4,4.09-6.24,7.36-7.93c-2.77,2.34-4.71,5.61-5.39,9.32 c2.6,1.23,5.8,0.78,7.95-1.37C19.43,14.47,20,4,20,4S9.53,4.57,6.05,8.05z"></path></g></g></svg>
                    <a href="#" style={{color:"#1264A3",fontWeight:"bold",marginTop:"1rem"}}>Transparent Platform</a>
                    <span style={{color:"gray",marginTop:"1rem"}}>Your rating will only be decided by your projects, not your title or experience.</span>
                </div>
            </div>
        </div>
    )
}