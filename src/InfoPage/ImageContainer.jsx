import React from 'react';
import email from "./email.png"

export const ImageContainer = () =>{

    return(
        <div className='image-container' style={{position:"relative",padding:'0'}}>
            <img src={email}></img>
        </div>
    )
}