import React, { useState, useEffect, useRef } from 'react';
import "./ToolBar.css";
import gsap from "gsap"
import { CommentToolbar } from '../CommentToolbar/CommentToolbar';
import { ColorChanger } from '../ColorChanger/ColorChanger';
import { setClick,toggleComments,toggleColor } from '../redux/actions';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

export const ToolBar = (props) =>{

    const clickedElement = useSelector(state => state.rootReducer.clickedElement)

    const commentOpen = useSelector(state => state.rootReducer.commentsOpen)
    let [open,setopen] = useState(false);
    let g = gsap.timeline();

    const dispatch = useDispatch();

    let setOpen = () =>{
      let c = !open;
      if(c==false){
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
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    };

    const openViewWindow = () =>{
      
    }

    const openCommentWindow = () =>{
        if(highlightedElement.current)
          highlightedElement.current.style.border = "none"
        if(clickedElement){
          let c= clickedElement
          c.style.border = "none"
            //setClickedElement(null)
        }
        dispatch(toggleComments());
        //openComment(!comment)
        //openColor(false)
    }
    
    const resetAll = () =>{
        if(highlightedElement.current)
          highlightedElement.current.style.border = "none"
        if(clickedElement){
          let c= clickedElement
          c.style.border = "none"
          dispatch(setClick(null))
          //setClickedElement(null)
        }
        dispatch(toggleComments());
        dispatch(toggleColor());
        //openComment(false)
        //openColor(false)
    }

    let highlightedElement = useRef(null)

    const highlightElement = (e) =>{
      console.log("hello")
        if(e.target.id==="close-button")
          return;
        if(clickedElement===null){
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
          dispatch(setClick(e.target))
          //setClickedElement(e.target);
          console.log("here")
        }
        else{
          if(clickedElement)
          {
            let c = clickedElement
            c.style.border = "none"
            dispatch(setClick(null))
            //setClickedElement(null);
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

    useEffect(        
        ()=>{
                
            function f(){
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
            <div id="close-button" onClick={()=>setOpen()} className="tooltip"><span id="close-button" className="fa fa-bars fa-lg"></span></div>
        </div>  
    )
}