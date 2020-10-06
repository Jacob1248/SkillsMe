import React, { useState, useEffect } from 'react';
import "./FAQ.css";
import woman from "./woman.png"
import gsap, { Power1 } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { useSelector } from 'react-redux';
ScrollMagicPluginGsap(ScrollMagic, gsap);

export const FAQ = () =>{

    const colors = useSelector(state => state.rootReducer.colorPalette)
    
    let g = gsap.timeline();
    let [open,setOpen] = useState(null);

    const [scrollMagic, setScrollMagic] = useState({
        controller: new ScrollMagic.Controller(),
        timelineOne: gsap.timeline(),
    });

    const { controller,timelineOne} = scrollMagic;
    let textRef,pageRef,imageRef=null;

    useEffect(
        ()=>{
            
            function f(){
                

                if(open!=null){
                    if(open==='0'){

                    g
                    .clear()
                    .to(`.answer-holder`,{opacity:0,margin:'0',duration:"0.5",height:"0",display:"none"},0)
                    }
                    else{
                        g
                        .clear()
                        .to(`.answer-holder`,{opacity:0,margin:'0',duration:"0.5",height:"0",display:"none"},0)
                        .to(`.${open}`,{display:"initial",opacity:1,width:"fit-content",height:"fit-content",marginTop:"2rem",duration:"0.5"},0)

                    }
                }
                else{
                timelineOne
                .fromTo(textRef, { transform:"translateX(5%)" , opacity:0 }, { transform:"translateX(0)" , opacity:1 , ease:Power1.easeInOut ,duration:0.8 },0)
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
            }
    
            f();
        }
    )

    const openFAQ = (e) =>{
        if(open!=null){
            if(e===open){
                setOpen('0');

            }
            else{
                setOpen(e)
            }
            
            return;
        }
        else{
            setOpen(e)

        }
    }

    return(
        <div ref={ref=>pageRef=ref} className="faq">
            <img ref={ref=>imageRef=ref} src={woman}></img>
            <div ref={ref=>textRef=ref} className="explanation-container">
                <span className="purple-header" style={{color:colors.mini}}>FAQ</span>
                <span className="explanation-header" style={{color:colors.large}}>Frequently Asked Questions</span>                
                <div className="swirl" style={{marginBottom:"2rem"}}>
                </div>
                <div className="question-container" onClick={()=>openFAQ('one')}>
                    <span style={{color:colors.large}}>01. Is Skillsme a recruiting agency?</span>
                    <div className="answer-holder one">
                    <p className="answer" style={{color:colors.description}}>We are not a recruitment agency! Skillsme is an open talent pool that all companies can access to and find the talent they needed. As long as you have a valid rating on Skillsme, you would have the chance to engage with any company which is looking for a suitable IT talent.</p>
                    </div>
                    <div className="purple-rectangle"/>
                    <div className="purple-rectangle" style={{width:"3rem",height:"4rem",marginRight:"0.5rem"}}/>
                    <div className="purple-rectangle" style={{width:"2rem",height:"2rem",marginRight:"1rem",top:"1rem"}}/>
                </div>
                <div className="question-container" onClick={()=>openFAQ('two')}>
                    <span style={{color:colors.large}}>02. How much does it cost for validating?</span>
                    <div className="answer-holder two">
                        <p className="answer" style={{color:colors.description}}>Good news! Getting validation from the top developers on Skillsme is totally free. You just need to post your project to see what they think about your work.</p>
                    </div>
                    <div className="purple-rectangle"/>
                    <div className="purple-rectangle" style={{width:"3rem",height:"4rem",marginRight:"0.5rem"}}/>
                    <div className="purple-rectangle" style={{width:"2rem",height:"2rem",marginRight:"1rem",top:"1rem"}}/>
                </div>
                <div className="question-container" onClick={()=>openFAQ('three')}>
                    <span style={{color:colors.large}}>03. What is Skillsme Catalog?</span>

                    <div className="answer-holder three">
                        <p className="answer " style={{color:colors.description}}>
                            Skillsme Catalog is a project topic with several specified requirements for coders to build their projects and show their capabilities through it. There are two types of Catalogs on Skillsme: Practice and Rating.

                            Practice Catalog allows you to practice your coding skills with real projects, you can try them unlimited times, but such projects won't be counted into your stats and are not visible for employers.

                            Rating Catalog, on the other hand, is the time-limited topic that Skillsme renews every week. Each Rating Catalog can only try once for each user, and only the project under Rating Catalog can be seen by employers and help you get your job invitation.
                        </p>
                    </div>
                    <div className="purple-rectangle"/>
                    <div className="purple-rectangle" style={{width:"3rem",height:"4rem",marginRight:"0.5rem"}}/>
                    <div className="purple-rectangle" style={{width:"2rem",height:"2rem",marginRight:"1rem",top:"1rem"}}/>
                </div>
                <div className="question-container" onClick={()=>openFAQ('four')}>
                    <span style={{color:colors.large}}>04. How long would it take for validation?</span>

                    <div className="answer-holder four">
                        <p className="answer" style={{color:colors.description}}>The time may vary depending on your code quality, as our Judges would give rating only base on their personal interest. But normally a project can get validated within 3 days.</p>
                    </div>
                    <div className="purple-rectangle"/>
                    <div className="purple-rectangle" style={{width:"3rem",height:"4rem",marginRight:"0.5rem"}}/>
                    <div className="purple-rectangle" style={{width:"2rem",height:"2rem",marginRight:"1rem",top:"1rem"}}/>
                </div>
                <div className="question-container" onClick={()=>openFAQ('five')}>
                    <span style={{color:colors.large}}>05. How to make sure the rating is fair?</span>
                    <div className="answer-holder five">
                        <p className="answer " style={{color:colors.description}}>All users on our platform are anonymous, and no one can invite others to review their works or search for a certain project. Your projects' rating will only be judge by the quality of the project. Meanwhile, our pushing algorithm will ensure every project has a fair chance to be visible to other Judges within our community.</p>
                    </div>
                    <div className="purple-rectangle"/>
                    <div className="purple-rectangle" style={{width:"3rem",height:"4rem",marginRight:"0.5rem"}}/>
                    <div className="purple-rectangle" style={{width:"2rem",height:"2rem",marginRight:"1rem",top:"1rem"}}/>
                </div>
            </div>
        </div>
    )
}