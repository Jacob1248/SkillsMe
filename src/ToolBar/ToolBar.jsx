import React, { useState, useEffect } from 'react';
import "./ToolBar.css";
import gsap from "gsap"

export const ToolBar = (props) =>{

    let [open,setopen] = useState(false);
    let g = gsap.timeline();

    useEffect(        
        ()=>{
                
            function f(){
                if(open){
                    g.to('.menu-options',{scaleY:"1",duration:0.3})
                }
                else{
                    g.to('.menu-options',{scaleY:"0",duration:0.3})
                }
            }
            f();
        }
    )

    const openCommentWindow = () =>{
        props.openCommentWindow();
    }

    return(
        <div id="close-button" className="toolbar">
            <div id="close-button" className="menu-options">
                <span id="close-button" className="fa fa-tint fa-lg" style={{cursor:"pointer"}}></span>
                <span id="close-button" onClick={()=>openCommentWindow()} style={{marginTop:"2rem",cursor:"pointer"}} className="fa fa-comment fa-lg"></span>
            </div>
            <div id="close-button" onClick={()=>setopen(!open)} className="tooltip"><span className="fa fa-bars fa-lg"></span></div>
        </div>  
    )
}