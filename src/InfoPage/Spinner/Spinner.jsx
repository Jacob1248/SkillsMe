import React from 'react';
import "./Spinner.css";
import spinner from "./spinner.jpg";
import mouse from "./16.png"

export const Spinner = () =>{

    return(
        <div className='spinner-container'>
            <img src={spinner}></img>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:"1rem"}}>
                <div className="name-img">
                    <img src={mouse}></img>
                    <span>Mark T.</span>
                </div>
                <div className="tag">
                    Frontend
                </div>
            </div>
            <span className="header-modal">Loading animation with React LifeCycle</span>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:"5rem"}}>
                <div className="tag" style={{color:"white",backgroundColor:"#3dd466"}}>
                    Easy
                </div>
                <span>Try This        <span className="fa fa-arrow-right" style={{color:"blue"}}></span></span>
            </div>
        </div>
    )
}