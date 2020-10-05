import React, { useEffect, useState } from 'react';
import "./InfoPage.css";
import gsap, { TimelineMax, TweenMax,Power1 } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

export const InfoPage = (props) =>{

    const getComponentFromProps = () =>{
        let Item = props.Item;
        return <Item></Item>
    }

    const [scrollMagic, setScrollMagic] = useState({
        controller: new ScrollMagic.Controller(),
        timelineOne: gsap.timeline(),
    });

    const { controller,timelineOne} = scrollMagic;

    let titleRef,subRef,contentRef,pageRef = null;

    useEffect(
        
        ()=>{
                
            function f(){
                timelineOne
                .fromTo(titleRef, { transform:"translateY(-5%)" , opacity:0 }, { transform:"translateY(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.8 },0)
                .fromTo(subRef, { transform:props.reverse?"translateX(5%)":"translateX(-5%)" , opacity:0 }, { transform:"translateY(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.8 },0)
                .fromTo(contentRef, { transform:"translateY(5%)" , opacity:0 }, { transform:"translateY(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.8 },0)
                new ScrollMagic.Scene({
                  triggerElement: pageRef,
                  triggerHook: "onEnter",
                  duration: "0%",
                  offset:"200"
                })
                  .setTween(timelineOne)
                  .setPin("#main-header")
                  .addTo(controller);
            }
            f();
        }
    )

    return(
        <div ref={ref=>pageRef=ref} className="info-page" style={{flexDirection:props.reverse?"row-reverse":"row"}}>
            <div className="explanation-container" style={{width:props.textWidth}}>
                <div ref={ref=>titleRef=ref} style={{display:"flex",flexDirection:"column"}}>
                <span className="purple-header">{props.header}</span>
                <span className="explanation-header">{props.explanationHeader}</span>

                </div>
                <div ref={ref=>subRef=ref}>
                <p className="explanation-description">{props.mainExplanationDescription}</p>
                <p className="explanation-description">{props.subExplanationDescription}</p>
                </div>
            </div>
            <div ref={ref=>contentRef=ref} id="" className="item-holder" style={{width:props.modalWidth}}>
                {
                    getComponentFromProps()
                }
            </div>
        </div>
    )
}