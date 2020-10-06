import React from 'react';
import "./ColorChanger.css";
import {useSelector} from 'react-redux'
import gsap from "gsap";

export const ColorChanger = () =>{

    const clicked = useSelector(state => state.rootReducer.colorOpen)

    let miniRef,largeRef,descriptionRef = null;

    const changeMiniColor = () =>{

    }

    const changeLargeColor = () =>{

    }

    const changeDescriptionColor = () =>{

    }

    return(
        <div className="contact color-changer" style={{display:clicked?"flex":"none",flexDirection:"column",justifyContent:"initial"}}>
            <span style={{marginTop:"2rem",fontSize:"1.3rem",fontWeight:"bold"}}>Change Element Colors</span>
            <div style={{color:"black",marginTop:"1rem"}}>
                <span style={{marginRight:"1rem"}}>Mini header Color:</span>
                <input onClick={()=>changeMiniColor()} ref={ref=>miniRef=ref} type='color'></input>
            </div>
            <div style={{color:"black",marginTop:"1rem"}}>
                <span style={{marginRight:"1rem"}}>Large header Color:</span>
                <input onClick={()=>changeLargeColor()} ref={ref=>largeRef=ref} type='color'></input>
            </div>
            <div style={{color:"black",marginTop:"1rem"}}>
                <span style={{marginRight:"1rem"}}>Description Color:</span>
                <input onClick={()=>changeDescriptionColor()} ref={ref=>descriptionRef=ref} type='color'></input>
            </div>
        </div>
    )
}