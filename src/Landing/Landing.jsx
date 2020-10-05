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
        timelineOne: gsap.timeline(),
        timelineTwo:gsap.timeline(),
        timelineThree:gsap.timeline()
    });

    const { controller,timelineOne,timelineTwo,timelineThree } = scrollMagic;

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

                  timelineTwo
                  .to('.nav',{ position:"absolute" , opacity:0,backgroundColor:"transparent",transform:"translateY(-50%)" ,duration:0},0)
                  .to('.nav', { transform:"translateY(0)",position:"fixed" , opacity:1 , ease:Power1.easeInOut ,duration:0.5,backgroundColor:"#6610f2" },0)
                  new ScrollMagic.Scene({
                    triggerElement: ".landing",
                    offset: "350",
                    duration: "0%"
                  })
                    .setTween(timelineTwo)
                    .setPin("#main-header")
                    .addTo(controller);
                  timelineThree
                  .to('.nav',{ position:"absolute", opacity:1,backgroundColor:"transparent",transform:"translateY(0%)" ,duration:0.5},0)
                  new ScrollMagic.Scene({
                    triggerElement: ".landing",
                    offset: "0",
                    duration: "0%"
                  })
                    .setTween(timelineThree)
                    .setPin("#main-header")
                    .addTo(controller);

                window.addEventListener('scroll',setNavAnimation)
            }
            f();
        }
    )

    const setNavAnimation = () =>{
        console.log("hello")
    }

    return(
        <div className="landing" onScroll={()=>setNavAnimation()}>
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