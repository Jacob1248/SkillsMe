import React from 'react';
import "./JudgePage.css";
import gsap from 'gsap';

export const Judge = (props) =>{

    const imagesrc = `https://myskillsme.com/images/judges`;

    let g = gsap.timeline();

    const hoverMouse = (e) =>{
        if(props.name){
            let parent = e.target.parentNode;
            let elem1 = parent.firstChild;
            let elem2 = parent.lastChild;
            g
            .clear()
            .to(elem1,{zIndex:"1001",duration:0},0)
            .to(elem1,{display:"block",duration:0,height:"fit-content"},0)
            .to(elem2,{zIndex:"1002",duration:0},0)
            .to(elem1,{opacity:1,duration:0.6},0.1)
        }
    }

    const hoverMouseEnd = (e) =>{
        if(props.name){
            let parent = e.target.parentNode;
            let elem1 = parent.firstChild;
            let elem2 = parent.lastChild;
            g
            .clear()
            .to(elem1,{opacity:0,duration:0.6},0)
            .to(elem1,{height:"0rem",zIndex:"0",duration:0},0.1)
            .to(elem1,{display:"none",duration:0},0.1)
            .to(elem2,{zIndex:"1000",duration:0},0.1)
        }
    }

    return(
        <div className="judge-container">
            <div className="modal-judge">
                    <span>{props.name}</span>
            </div>
            <img onMouseEnter={(e)=>hoverMouse(e)} onMouseLeave={(e)=>hoverMouseEnd(e)} src={`${imagesrc}/${props.src}`}></img>
        </div>
    )
}