import React, { useState, useEffect, useRef } from 'react';
import "./ToolBar.css";
import gsap from "gsap"
import { setClick,toggleComments,toggleColor,closeBoth } from '../redux/actions';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

export const ToolBar = () =>{

    const clickedElement = useSelector(state => state.rootReducer.clickedElement)

    const commentOpen = useSelector(state => state.rootReducer.commentsOpen)
    let [open,setopen] = useState(false);
    let g = gsap.timeline();

    const dispatch = useDispatch();

    let setOpen = () =>{
      let c = !open;
      if(c===false){
        resetAll()
        setopen(false)
      }
      else{
        setopen(c)
      }
    }

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
      return '_' + Math.random().toString(36).substr(2, 9);
    };

    const openCommentWindow = () =>{
        if(highlightedElement.current)
          highlightedElement.current.style.border = "none"
        if(clickedElement){
          let c= clickedElement
          c.style.border = "none"
        }
        dispatch(toggleComments());
    }
    
    const resetAll = () =>{
        if(highlightedElement.current)
          highlightedElement.current.style.border = "none"
        if(clickedElement){
          let c= clickedElement
          c.style.border = "none"
        }
        dispatch(closeBoth())
    }

    let highlightedElement = useRef(null)

    const highlightElement = (e) =>{
        if(e.target.id==="close-button")
          return;
        if(clickedElement===null){
          if(e.target!==highlightedElement.current){
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
        if(e.target!==clickedElement){
          let c = clickedElement
          if(clickedElement)
            c.style.border = "none"
          e.target.style.border = "thick red solid"
          if(!e.target.id)
            e.target.id = ID();
          dispatch(setClick(e.target))
        }
        else{
          if(clickedElement)
          {
            let c = clickedElement
            c.style.border = "none"
            dispatch(setClick(null))
          }
        }
    } 

    useEffect(() => {
        document.addEventListener('click',commentOpen?clickElement:()=>{})
        document.addEventListener('mousemove',commentOpen?highlightElement:()=>{})
        return () => {
            document.removeEventListener('mousemove',highlightElement)
            document.removeEventListener('click',clickElement)
        }
    })

    const openColorWindow = () =>{
      if(highlightedElement.current)
        highlightedElement.current.style.border = "none"
      if(clickedElement){
        let c= clickedElement
        c.style.border = "none"
      }
      dispatch(toggleColor());
    }

    return(
        <div id="close-button" className="toolbar">
            <div id="close-button" className="menu-options">
                <span id="close-button" onClick={()=>openColorWindow()} className="fa fa-tint fa-lg" style={{cursor:"pointer"}}></span>
                <span id="close-button" onClick={()=>openCommentWindow()} style={{marginTop:"2rem",cursor:"pointer"}} className="fa fa-comment fa-lg"></span>
            </div>
            <div id="close-button" onClick={()=>setOpen()} className="tooltip"><span id="close-button" className="fa fa-bars fa-lg"></span></div>
            
        </div>  
    )
}