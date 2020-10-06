import React, { useEffect, useState } from 'react';
import "./InfoPage.css";
import gsap, { Power1 } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import {useSelector} from 'react-redux'
ScrollMagicPluginGsap(ScrollMagic, gsap);

export const InfoPage = (props) =>{

    const colors = useSelector(state => state.rootReducer.colorPalette)

    const getComponentFromProps = () =>{
        let Item = props.Item;
        return <Item></Item>
    }

    const [scrollMagic] = useState({
        controller: new ScrollMagic.Controller(),
        timelineOne: gsap.timeline(),
    });

    const { controller,timelineOne} = scrollMagic;

    let titleRef,subRef,contentRef,pageRef,infoRef = null;

    useEffect(
        
        ()=>{
                
            function f(){
                pageRef.style.setProperty("--my-type-var", props.reverse?"row-reverse":"row");
                contentRef.style.setProperty("--my-size-var", props.modalWidth);
                infoRef.style.setProperty("--my-info-size-var", props.textWidth);

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
                  .addTo(controller);
            }
            f();
        }
    )

    return(
        <div ref={ref=>pageRef=ref} style={{display:"flex"}} className="info-page" >
            <div ref={ref=>infoRef=ref} className="explanation-container" >
                <div ref={ref=>titleRef=ref} style={{display:"flex",flexDirection:"column"}}>
                <span className="purple-header" style={{color:colors.mini}}>{props.header}</span>
                <span className="explanation-header" style={{color:colors.large}}>{props.explanationHeader}</span>

                </div>
                <div ref={ref=>subRef=ref}>
                <p className="explanation-description" style={{color:colors.description}}>{props.mainExplanationDescription}</p>
                <p className="explanation-description" style={{color:colors.description}}>{props.subExplanationDescription}</p>
                </div>
            </div>
            <div ref={ref=>contentRef=ref} id="" className="item-holder" >
                {
                    getComponentFromProps()
                }
            </div>
        </div>
    )
}