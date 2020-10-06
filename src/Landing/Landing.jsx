import React, { useEffect, useState, useRef } from 'react';
import "./Landing.css"
import men from "./men.png";
import gsap, { Power1 } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { useSelector } from 'react-redux';
import skillshome from "./skillshome.png"
import blackbg from "./blackbg.jpg"
import hero from "./hero.svg"
ScrollMagicPluginGsap(ScrollMagic, gsap);


export const Landing = () =>{
    const colors = useSelector(state => state.rootReducer.colorPalette)

    let g = gsap.timeline();

    const [scrollMagic] = useState({
        controller: new ScrollMagic.Controller(),
        timelineOne: gsap.timeline()
    });

    
    const { controller,timelineOne} = scrollMagic;

    let c = useRef(null);

    let page2Ref = null;

    useEffect(() => {
        if(pages===0){
            g
            .to(page2Ref,{left:"100vw",duration:0.7})
        }
        else{
            g
            .to(page2Ref,{left:"0vw",duration:0.7})

        }
        if(c.current!==null){
            c.current.destroy(true);
            c.current = null;
        }
        timelineOne
        .clear()
        .fromTo('.main-header', { transform:"translateY(100%)" , opacity:0 }, { transform:"translateY(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.2, })
        .fromTo('.secondary-header',0.2,{ transform:"translateY(100%)" , opacity:0 }, { transform:"translateY(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.2 })
        .fromTo('.sub-text',0.4,{ transform:"translateY(100%)" , opacity:0 }, { transform:"translateY(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.1 })
        .fromTo('.button-rated',0.5,{ transform:"translateY(100%)" , opacity:0 }, { transform:"translateY(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.1 })
        .fromTo('.hero-image',0.6,{ transform:"translateY(100%)" , opacity:0 }, { transform:"translateY(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.1 })
        c.current = new ScrollMagic.Scene({
          triggerElement: ".landing",
          triggerHook: "onEnter",
          duration: "0%"
        })
          .setTween(timelineOne)
          .addTo(controller)
        return () => {
        }
    })

    let [pages,setPages] = useState(0);
    const decrementPage = () =>{
        if(pages-1>=0){
            setPages(pages-1)
        }
        else{
            setPages(pages+1)
        }
    }

    const incrementPage = () =>{
        if(pages+1>1){
            setPages(pages-1)
        }
        else{
            setPages(pages+1)
        }
    }

    return(
        <div className="landing" style={{backgroundSize:"cover"}}>
            <div style={{backgroundImage:`url(./${skillshome})`,backgroundSize:"cover"}} id="slider-1" className="slider-info">
            <div className="info-area">
                <span className="main-header" style={{color:colors.boldLarge}}>Land a coding</span>
                <span className="main-header" style={{color:colors.boldLarge}}>job with</span>
                <span className="main-header" style={{color:colors.boldLarge}}>Skillsme Rating</span>
                <span className="secondary-header" style={{fontSize:"2rem",marginBottom:"1rem",color:colors.boldLarge}}>Referral 10k+ companies</span>
                <span className="sub-text" style={{color:colors.boldLarge}}>Receive your Skillsme rating by completing real projects and get</span>
                <span className="sub-text" style={{marginBottom:"1rem",color:colors.boldLarge}}>validated by the world’s top 5% coders.</span>
                <button className="button-rated"><span>Get rated now</span></button>
            </div><div className="fa arrow-right fa-angle-right fa-2x" onClick={()=>incrementPage()} style={{color:"white"}}></div>
            <img className="hero-image" src={men}></img>
            </div>
            <div ref={ref=>page2Ref=ref} style={{backgroundImage:`url(./${blackbg})`,backgroundSize:"cover",zIndex:900,position:"absolute",left:"100vw"}} id="slider-2" className="slider-info">
            <div className="info-area">
                <span className="main-header" style={{color:colors.boldLarge}}>Text one</span>
                <span className="main-header" style={{color:colors.boldLarge}}>text two</span>
                <span className="main-header" style={{color:colors.boldLarge}}>text three</span>
                <span className="secondary-header" style={{fontSize:"2rem",marginBottom:"1rem",color:colors.boldLarge}}>Example text here</span>
                <span className="sub-text" style={{color:colors.boldLarge}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
                <span className="sub-text" style={{marginBottom:"1rem",color:colors.boldLarge}}>sed do eiusmod tempor incididunt </span>
                <button className="button-rated"><span>non proident qui</span></button>

                    <div className="fa arrow-left fa-angle-left fa-left fa-2x" onClick={()=>decrementPage()} style={{color:"white"}}></div>
            </div>
            <img className="hero-image" src={hero}></img>
            </div>
                
        
        </div>
    )
}