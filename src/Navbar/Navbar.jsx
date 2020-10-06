import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import logo from "./logo.png"
import gsap, { TimelineMax, TweenMax, TweenLite,Power1 } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { useSelector } from 'react-redux';
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

export const Navbar = (props) =>{

    const colors = useSelector(state => state.rootReducer.colorPalette)

    let g = gsap.timeline()
    const [scrollMagic, setScrollMagic] = useState({
        controller: new ScrollMagic.Controller(),
        timelineOne: gsap.timeline(),
        timelineTwo:gsap.timeline(),
    });
  
    const { controller,timelineOne,timelineTwo } = scrollMagic;
    

  useEffect(
      
    ()=>{
            
        function f(){
                timelineOne
                .to('.nav',{ position:"absolute" , opacity:0,backgroundColor:"transparent",transform:"translateY(-50%)" ,duration:0},0)
                .to('.nav', { transform:"translateY(0)",position:"fixed" , opacity:1 , ease:Power1.easeInOut ,duration:0.5,backgroundColor:colors.navbg },0)
                new ScrollMagic.Scene({
                  triggerElement: props.triggerRef,
                  offset:'350',
                  duration: "0%"
                })
                  .setTween(timelineOne)
                  .setPin("#main-header")
                  .addTo(controller);
                timelineTwo
                .to('.nav',{ position:"absolute", opacity:1,backgroundColor:"transparent",transform:"translateY(0%)" ,duration:0.5},0)
                new ScrollMagic.Scene({
                  triggerElement: props.triggerRef,
                  offset: 0,
                  duration: "0%"
                })
                  .setTween(timelineTwo)
                  .setPin("#main-header")
                  .addTo(controller)
                  
              if(window.scrollY>350){
                  setTimeout(()=>{g
                    .to('.nav',{ position:"absolute" , opacity:0,backgroundColor:"transparent",transform:"translateY(-50%)" ,duration:0},0)
                    .to('.nav', { transform:"translateY(0)",position:"fixed" , opacity:1 , ease:Power1.easeInOut ,duration:0.5,backgroundColor:colors.navbg },0)
                    
                  },1000)
              }
        }
        f();
    }
)

    return(
        <nav className="nav" style={{color:colors.nav}}>
                <ul>
                    <a href="index.html" title="Logo"><img src={logo} alt="images" /></a>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Skillsme Uni</a></li>
                        <li><a>Skillsme Talent</a></li>
                        <li><a>Press</a></li>
                    </ul>
    
                </ul>
            <ul>
                <li><button className="button-login" id="close-button" style={{content:"Log In"}}><span>Log In</span></button></li>
                <li><button className="button-signup" style={{content:"Log In"}}><span>Sign Up</span></button></li>
            </ul>
        </nav>
    )
}