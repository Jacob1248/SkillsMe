import React, { useState, useEffect } from 'react';
import "./Review.css";
import avatar1 from "./avatar1.jpg";
import polygon from "./polygon.png";
import avatar2 from "./avatar2.jfif";
import gsap, { Power1 } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { useSelector } from 'react-redux';
ScrollMagicPluginGsap(ScrollMagic, gsap);


export const Review = () =>{
    const colors = useSelector(state => state.rootReducer.colorPalette)

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
                .fromTo(textRef, { transform:"translateX(-5%)" , opacity:0 }, { transform:"translateX(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.8 },0)
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
        <div ref={ref=>pageRef=ref} className="review">
            <span ref={ref=>textRef=ref} className="main-review" style={{fontSize:"2.2rem",fontWeight:"bold",color:"white",color:colors.boldLarge}}>
                Skillsme makes coders expertise intelligible.
            </span>
            <div className="bubble-holder">
                <div className="bubble"></div>
                <div className="bubble small"></div>
            </div>
            <div className="review-container" style={{marginLeft:"2%"}}>
                <div className="transparent-bg">
                </div><div className="avatar">
                    <div style={{position:"relative",width:"6rem",height:"7rem"}}>
                        <img src={avatar1}></img>
                        <span className="fa fa-quote-right quotes" style={{fontSize:"2rem"}}></span>
                    </div>
                    <img src={polygon}></img>
                </div>
                <div style={{marginTop:"1rem"}}>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                </div>
                <p style={{color:"white",lineHeight:"2",color:colors.boldLarge}}>
                I really love this idea, and I am also very happy to involve it. I believe this product can bring much more new opportunities to new developers, and help them find their own way to get into the industry.      
                </p>
                <span style={{color:"white",fontWeight:"bold",marginTop:"1rem",color:colors.boldLarge}}>Leon Zhou</span>
                <br/>
                <span style={{color:"#FFC600",marginTop:"0.5rem",color:colors.boldLarge}}>Former Vend Senior Engineer</span>
            </div>
            <div className="review-container" style={{marginLeft:"2%"}}>
                <div className="transparent-bg">
                </div>
                <div className="avatar">
                    <div style={{position:"relative",width:"6rem",height:"7rem"}}>
                        <img src={avatar2}></img>
                        <span className="fa fa-quote-right quotes" style={{fontSize:"2rem"}}></span>
                    </div>
                    <img src={polygon}></img>
                </div>
                <div style={{marginTop:"1rem"}}>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                </div>
                <p style={{color:"white",lineHeight:"2",color:colors.boldLarge}}>
                I've known the CTO and CEO for more than 3 years. And they really have strong passion on creating something new and valuable for customers. So I believe they will make this product great in the near future.      
                </p>
                <span style={{color:"white",fontWeight:"bold",marginTop:"1rem",color:colors.boldLarge}}>Rick Luo</span>
                <br/>
                <span style={{color:"#FFC600",marginTop:"0.5rem",color:colors.boldLarge}}>Former Oracle PMTS</span>
            </div>
        </div>
    )
}