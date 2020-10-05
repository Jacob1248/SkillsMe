import React, { useEffect, useState } from 'react';
import "./Landing.css"
import men from "./men.png";
import gsap, { TimelineMax, TweenMax,Power1 } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


export const Landing = () =>{
    const [scrollMagic, setScrollMagic] = useState({
        controller: new ScrollMagic.Controller(),
        timelineOne: gsap.timeline()
    });

    const { controller,timelineOne} = scrollMagic;

    useEffect(
        
        ()=>{
                
            function f(){
                timelineOne
                .fromTo('.main-header', { transform:"translateY(100%)" , opacity:0 }, { transform:"translateY(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.2 })
                .fromTo('.secondary-header',0.2,{ transform:"translateY(100%)" , opacity:0 }, { transform:"translateY(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.2 })
                .fromTo('.sub-text',0.4,{ transform:"translateY(100%)" , opacity:0 }, { transform:"translateY(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.1 })
                .fromTo('.button-rated',0.5,{ transform:"translateY(100%)" , opacity:0 }, { transform:"translateY(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.1 })
                .fromTo('.hero-image',0.6,{ transform:"translateY(100%)" , opacity:0 }, { transform:"translateY(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.1 })
                new ScrollMagic.Scene({
                  triggerElement: ".landing",
                  triggerHook: "onEnter",
                  duration: "0%"
                })
                  .setTween(timelineOne)
                  .setPin("#main-header")
                  .addTo(controller);
            }
            f();
        }
    )

    return(
        <div className="landing">
            <div className="info-area">
                <span className="main-header">Land a coding</span>
                <span className="main-header">job with </span>
                <span className="main-header">Skillsme Rating</span>
                <span className="secondary-header" style={{fontSize:"2rem",marginBottom:"1rem"}}>Referral 10k+ companies</span>
                <span className="sub-text">Receive your Skillsme rating by completing real projects and get </span>
                <span className="sub-text" style={{marginBottom:"1rem"}}>validated by the world’s top 5% coders.</span>
                <button className="button-rated"><span>Get rated now</span></button>
            </div>
            <img className="hero-image" src={men}></img>
        </div>
    )
}