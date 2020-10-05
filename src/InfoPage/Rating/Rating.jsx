import React from 'react';
import "./Rating.css";
import box from "./25.png";
import medal from "./l1.png";

export const Rating = () =>{

    return(<div className="rating container-border">
        <div className="judge-info">
            <img src={box}></img>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <span>Jason M.</span>
                    <img src={medal} style={{width:"1.3rem",height:"1.3rem",marginLeft:"0.4rem"}}></img>
                    <div className="tag" style={{color:"white",backgroundColor:"blue"}}>
                        4.10/5.00
                    </div>
                    <div className="tag" style={{color:"white",backgroundColor:"#3dd466",marginLeft:"0.4rem"}}>
                        Positive Feedback
                    </div>
                </div>
                <span style={{color:"gray",fontSize:"0.8rem"}}>
                    14/Jul/2020, 10:51:05 AM
                </span>
            </div>
        </div>
        <span style={{marginTop:"1rem"}}>
            This project has completed the all the goals given. Obviously this person's capability is beyond the catalog selected. I believe the creator is pretty familiar with those functionalities and can handle the whole development process easily.
        </span>
        <br/>
        <span>
            Meanwhile, I think more comments or a more detailed documentation could help other coders to understand this project better.
        </span>
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:"1rem"}}>  
            <div className="tag" style={{backgroundColor:"#F1F8FF",color:"#0366d6",marginRight:"0.4rem"}}>
                Completeness 5.0 / 5
            </div>
            <div className="tag" style={{backgroundColor:"#F1F8FF",color:"#0366d6",marginRight:"0.4rem"}}>
                Functionality 5.0 / 5
            </div>
            <div className="tag" style={{backgroundColor:"#F1F8FF",color:"#0366d6",marginRight:"0.4rem"}}>
                Readability 3.5 / 5
            </div>
            <div className="tag" style={{backgroundColor:"#F1F8FF",color:"#0366d6",marginRight:"0.4rem"}}>
                Size 3.0 / 5
            </div>
            <div className="tag" style={{backgroundColor:"#F1F8FF",color:"#0366d6",marginRight:"0.4rem"}}>
                Professional 4.0 / 5
            </div>
        </div>
    </div>)
}