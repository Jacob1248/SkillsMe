import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import logo from "./logo.png"
import gsap, { TimelineMax, TweenMax, TweenLite,Power1 } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

export const Navbar = (props) =>{
    const [scrollMagic, setScrollMagic] = useState({
        controller: new ScrollMagic.Controller(),
        timelineOne: gsap.timeline(),
    });

    const { controller,timelineOne } = scrollMagic;

    useEffect(
        
        ()=>{
                
            function f(){
            }
            f();
        }
    )

    const gotoViewMode = () =>{
        props.resetAll()
    }

    return(
        <nav className="nav">
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