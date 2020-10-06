import React from 'react';
import "./ColorChanger.css";
import {useSelector, useDispatch} from 'react-redux'
import { changeColor, toggleColor } from '../redux/actions';

export const ColorChanger = () =>{

    const clicked = useSelector(state => state.rootReducer.colorOpen)
    let dispatch = useDispatch();

    let miniRef,largeRef,descriptionRef,boldColorRef,footerRef,navTextRef,navRef = null;

    const changeElementColor = () =>{
        dispatch(changeColor({
            mini:miniRef.value,
            large:largeRef.value,
            description:descriptionRef.value,
            boldLarge:boldColorRef.value,
            footer:footerRef.value,
            nav:navTextRef.value,
            navbg:navRef.value
        }))
        closeColorToolbar()
    }

    const closeColorToolbar = () =>{
        dispatch(toggleColor())
    }

    return(
        <div className="contact color-changer" style={{display:clicked?"flex":"none",flexDirection:"column",justifyContent:"initial"}}>
        <div id="close-button" className="name-cross">
            <span style={{marginTop:"2rem",fontSize:"1.3rem",fontWeight:"bold"}}>Change Element Colors</span>
            <button onClick={()=>closeColorToolbar()} id="close-button" className="close-button" style={{color:"black"}}>x</button>
        </div>
            <div style={{color:"black",marginTop:"1rem"}}>
                <span style={{marginRight:"1rem"}}>Mini header Color:</span>
                <input ref={ref=>miniRef=ref} type='color' defaultValue={"#800080"}></input>
            </div>
            <div style={{color:"black",marginTop:"1rem"}}>
                <span style={{marginRight:"1rem"}}>Large header Color:</span>
                <input defaultValue="#000000" ref={ref=>largeRef=ref} type='color'></input>
            </div>
            <div style={{color:"black",marginTop:"1rem"}}>
                <span style={{marginRight:"1rem"}}>Description Color:</span>
                <input defaultValue="gray" defaultValue="#808080" ref={ref=>descriptionRef=ref} type='color'></input>
            </div>
            <div style={{color:"black",marginTop:"1rem"}}>
                <span style={{marginRight:"1rem"}}>Informative text(Initially white):</span>
                <input ref={ref=>boldColorRef=ref} defaultValue="#FFFFFF" type='color'></input>
            </div>
            <div style={{color:"black",marginTop:"1rem"}}>
                <span style={{marginRight:"1rem"}}>Footer Text color:</span>
                <input ref={ref=>footerRef=ref} type='color' defaultValue="#FFFFFF"></input>
            </div>
            <div style={{color:"black",marginTop:"1rem"}}>
                <span style={{marginRight:"1rem"}}>Navbar Text color:</span>
                <input ref={ref=>navTextRef=ref} defaultValue="#FFFFFF" type='color'></input>
            </div>
            <div style={{color:"black",marginTop:"1rem"}}>
                <span style={{marginRight:"1rem"}}>Navbar color:</span>
                <input ref={ref=>navRef=ref} defaultValue="#6610f2" type='color'></input>
            </div>
            <button className="gradient-shifter purple-gradient-shifter" onClick={()=>changeElementColor()} style={{width:"20%",marginTop:"2rem"}}>Confirm</button>
        </div>
    )
}