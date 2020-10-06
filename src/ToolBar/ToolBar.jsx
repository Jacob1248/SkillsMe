import React, { useState, useEffect, useRef } from 'react';
import "./ToolBar.css";
import gsap from "gsap"
import { CommentToolbar } from '../CommentToolbar/CommentToolbar';

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

    const ID = () => {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    };

    let [comment,openComment] = useState(false)
    let [color,openColor] = useState(false)

    const openCommentWindow = () =>{
        if(highlightedElement.current)
          highlightedElement.current.style.border = "none"
          if(clickedElement){
            let c= clickedElement
            c.style.border = "none"
            setClickedElement(null)
          }
        openComment(!comment)
    }
    
    const resetAll = () =>{
        if(highlightedElement.current)
          highlightedElement.current.style.border = "none"
        if(clickedElement){
          let c= clickedElement
          c.style.border = "none"
          setClickedElement(null)
        }
        openComment(false)
        openColor(false)
    }

    let highlightedElement = useRef(null)
  
    let [clickedElement,setClickedElement] = useState(null)

    const highlightElement = (e) =>{
      if(e.target.id==="close-button")
        return;
      if(clickedElement==null){
        if(e.target!=highlightedElement.current){
          if(highlightedElement.current)
            highlightedElement.current.style.border = "none"
          highlightedElement.current = e.target;
          e.target.style.border = "thick red solid"
        }
      }
    }

    const clickElement = (e) =>{
      if(e.target.id==="close-button")
        return;
      if(e.target!=clickedElement){
        let c = clickedElement
        if(clickedElement)
          c.style.border = "none"
        e.target.style.border = "thick red solid"
        if(!e.target.id)
          e.target.id = ID();
        setClickedElement(e.target);
        console.log("here")
      }
      else{
        if(clickedElement)
        {
          let c = clickedElement
          c.style.border = "none"
          setClickedElement(null);
        }
      }
    } 

    useEffect(() => {
        document.addEventListener('mousemove',comment?highlightElement:()=>{})
        document.addEventListener('click',comment?clickElement:()=>{})
        return () => {
            document.removeEventListener('mousemove',highlightElement)
            document.removeEventListener('click',clickElement)
        }
    })

    useEffect(        
        ()=>{
                
            function f(){
                console.log(clickedElement)
            }
            f();
        }
    )
    
    const openWindow = () =>{
        openCommentWindow();
    }

    return(
        <div id="close-button" className="toolbar">
            <div id="close-button" className="menu-options">
                <span id="close-button" className="fa fa-tint fa-lg" style={{cursor:"pointer"}}></span>
                <span id="close-button" onClick={()=>openWindow()} style={{marginTop:"2rem",cursor:"pointer"}} className="fa fa-comment fa-lg"></span>
            </div>
            <div id="close-button" onClick={()=>setopen(!open)} className="tooltip"><span className="fa fa-bars fa-lg"></span></div>
            <CommentToolbar element={clickedElement} clicked={clickedElement!=null}></CommentToolbar>
        </div>  
    )
}