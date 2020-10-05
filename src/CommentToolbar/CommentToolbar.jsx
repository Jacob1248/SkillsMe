import React from 'react';
import "./CommentToolbar.css";

export const CommentToolbar = (props) =>{

    return(
        <div id="close-button" className="comment-toolbar" style={{display:props.clicked?"flex":"none"}}>
            <span id="close-button" style={{cursor:"pointer"}}>
                View
            </span>
            <span id="close-button" style={{marginLeft:"2rem"}}>
                |
            </span>
            <span id="close-button" style={{marginLeft:"2rem",cursor:"pointer"}}>
                Edit
            </span>
        </div>
    )
}