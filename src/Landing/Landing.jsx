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

    const [scrollMagic, setScrollMagic] = useState({
        controller: new ScrollMagic.Controller(),
        timelineOne: gsap.timeline()
    });

    const { controller,timelineOne} = scrollMagic;

    let c = useRef(null);

    useEffect(() => {
        timelineOne
        .fromTo('.main-header', { transform:"translateY(100%)" , opacity:0 }, { transform:"translateY(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.2 })
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
          .setPin("#main-header")
          .addTo(controller)
        return () => {
        }
    })

    let [pages,setPages] = useState(0);

    const pageInfo = [
    {
        text1:"Land a coding",
        text2:"job with",
        text3:"Skillsme Rating",
        text4:"Referral 10k+ companies",
        text5:"Receive your Skillsme rating by completing real projects and get",
        text6:"validated by the world’s top 5% coders.",
        text7:"Get rated now",
        image:men,
        bg:skillshome
    },

    {
        text1:"Text one",
        text2:"text two",
        text3:"text three",
        text4:"Example text here",
        text5:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        text6:"sed do eiusmod tempor incididunt ",
        text7:"non proident, sunt in culpa qui",
        image:hero,
        bg:blackbg
    }
    ]

    const decrementPage = () =>{
        if(pages-1>=0){
            setPages(pages-1)
        }
        else{
            alert("Cant go back any more pages")
        }
    }

    const incrementPage = () =>{
        if(pages+1>1){
            alert("Cant go forward any more pages")
        }
        else{
            setPages(pages+1)
        }
    }

    return(
        <div className="landing" style={{backgroundImage:`url(./${pageInfo[pages].bg})`,backgroundSize:"cover"}}>
            <div className="info-area">
                <span className="main-header" style={{color:colors.boldLarge}}>{pageInfo[pages].text1}</span>
                <span className="main-header" style={{color:colors.boldLarge}}>{pageInfo[pages].text2}</span>
                <span className="main-header" style={{color:colors.boldLarge}}>{pageInfo[pages].text3}</span>
                <span style={{fontSize:"2rem",marginBottom:"1rem",color:colors.boldLarge}}>{pageInfo[pages].text4}</span>
                <span className="sub-text" style={{color:colors.boldLarge}}>{pageInfo[pages].text5}</span>
                <span className="sub-text" style={{marginBottom:"1rem",color:colors.boldLarge}}>{pageInfo[pages].text6}</span>
                <button className="button-rated"><span>{pageInfo[pages].text7}</span></button>
            </div>
            <img className="hero-image" src={pageInfo[pages].image}></img>
            <div className="fa arrow-left fa-angle-left fa-left fa-2x" onClick={()=>decrementPage()} style={{color:"white"}}></div>
            <div className="fa arrow-right fa-angle-right fa-left fa-2x" onClick={()=>incrementPage()} style={{color:"white"}}></div>
        </div>
    )
}