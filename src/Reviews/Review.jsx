import React from 'react';
import "./Review.css";
import avatar1 from "./avatar1.jpg";
import polygon from "./polygon.png";
import avatar2 from "./avatar2.jfif";

export const Review = () =>{

    return(
        <div className="review">
            <span className="main-review" style={{fontSize:"2.2rem",fontWeight:"bold",color:"white"}}>
                Skillsme makes coders expertise intelligible.
            </span>
            <div className="review-container" style={{marginLeft:"2%"}}>
                <div className="transparent-bg">
                </div><div className="avatar">
                    <div style={{position:"relative",width:"6rem",height:"7rem"}}>
                        <img src={avatar1}></img>
                        <span className="fa fa-quote-right quotes" style={{fontSize:"2rem"}}></span>
                    </div>
                    <img src={polygon}></img>
                </div>
                <div style={{marginTop:"1rem"}}>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                </div>
                <p style={{color:"white",lineHeight:"2"}}>
                I really love this idea, and I am also very happy to involve it. I believe this product can bring much more new opportunities to new developers, and help them find their own way to get into the industry.      
                </p>
                <span style={{color:"white",fontWeight:"bold",marginTop:"1rem"}}>Leon Zhou</span>
                <br/>
                <span style={{color:"#FFC600",marginTop:"0.5rem"}}>Former Vend Senior Engineer</span>
            </div>
            <div className="review-container" style={{marginLeft:"2%"}}>
                <div className="transparent-bg">
                </div>
                <div className="avatar">
                    <div style={{position:"relative",width:"6rem",height:"7rem"}}>
                        <img src={avatar2}></img>
                        <span className="fa fa-quote-right quotes" style={{fontSize:"2rem"}}></span>
                    </div>
                    <img src={polygon}></img>
                </div>
                <div style={{marginTop:"1rem"}}>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                    <span className="fa fa-star" style={{marginRight:"0.4rem",color:"gold"}}></span>
                </div>
                <p style={{color:"white",lineHeight:"2"}}>
                I've known the CTO and CEO for more than 3 years. And they really have strong passion on creating something new and valuable for customers. So I believe they will make this product great in the near future.      
                </p>
                <span style={{color:"white",fontWeight:"bold",marginTop:"1rem"}}>Rick Luo</span>
                <br/>
                <span style={{color:"#FFC600",marginTop:"0.5rem"}}>Former Oracle PMTS</span>
            </div>
        </div>
    )
}