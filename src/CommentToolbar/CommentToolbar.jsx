import React, { useState, useEffect } from 'react';
import "./CommentToolbar.css";
import gsap from "gsap";

export const CommentToolbar = (props) =>{

    let g = gsap.timeline();

    const editAllComments = () =>{
        setOpenState({
            addOpen:false,
            commentOpen:!openState.commentOpen
        })
    }

    let nameRef,commentRef = null;
    let [openState,setOpenState] = useState({
        addOpen:false,
        commentOpen:false
    })

    let [force,setForce] = useState(false);

    let [comments,setComments] = useState({})

    const deleteComment = (value) =>{
        //delete comments[props.element.id]
        for(var i = 0; i < comments[props.element.id].length; i++)
        {
          if(comments[props.element.id][i].id === value)
          {
             comments[props.element.id].splice(i, 1);
             setForce(!force);
             return;
          }
        }
    }

    const addComment = () =>{
        setOpenState({
            addOpen:!openState.addOpen,
            commentOpen:false
        })
    }

    const findLargest = (arr) =>{
        let largest = arr[0].id;
        for(var i=0;i<arr.length;i++){
            if(largest<arr[i].id)
                largest=arr[i].id;
        }
        return largest;
    }

    const ID = () => {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    };
    

    const finalizeComment = () =>{
        if(nameRef.value.trim()!=''||nameRef.value!=undefined){
            if(commentRef.value.trim()!=''||commentRef.value!=undefined){
                if(props.element.id!='close-button'){
                    let commentsTemp = {
                        ...comments
                    };
                    if(commentsTemp[props.element.id]){
                        commentsTemp[props.element.id].push({
                            id:ID(),
                            name:nameRef.value,
                            comment:commentRef.value
                        })
                        //alert('A comment is already left on this item! You should delete that first in order to leave a new comment!')
                    }
                    else{
                        commentsTemp[props.element.id] = [{
                            id:0,
                            name:nameRef.value,
                            comment:commentRef.value
                        }]
                        setComments(commentsTemp)
                    }
                    alert('Comment Set!')
                    setOpenState({
                        addOpen:!openState.addOpen,
                        commentOpen:false
                    })
                }
                return;
            }
            alert('Comment is empty!')
        }
        else{
            alert("Name is empty!")
        }
    }

  useEffect(
      
    ()=>{
        async function f(){
            console.log(comments)
            if(openState.addOpen||openState.commentOpen){
                g
                .clear()
                .to('.comment-toolbar',{backgroundColor:"transparent",duration:0})
            }
            if(!(openState.addOpen&&openState.commentOpen)){
                g
                .clear()
                .to('.comment-toolbar',{backgroundColor:"purple",duration:0})
            }
            if(openState.addOpen){
                g
                .clear()
                .to('.add-area',{scale:1,duration:0.5})
            }
            else{
                g
                .clear()
                .to('.add-area',{scale:0,duration:0.5})
            }
            if(openState.commentOpen){
                g
                .clear()
                .to('.edit-area',{scale:1,duration:0.5})
            }
            else{
                g
                .clear()
                .to('.edit-area',{scale:0,duration:0.5})
            }
        }
        f();
    }
  )
    return(
        <div id="close-button" className="comment-toolbar" style={{display:props.clicked?"flex":"none"}}>
            {
                
            }
            <span id="close-button" onClick={()=>editAllComments()} style={{cursor:"pointer",display:openState.addOpen?"none":"initial"}}>
                View
            </span>
            <span id="close-button" style={{marginLeft:"2rem",display:openState.addOpen?"none":"initial"}}>
                |
            </span>
            <span id="close-button" onClick={()=>addComment()} style={{marginLeft:"2rem",cursor:"pointer",display:openState.addOpen?"none":"initial"}}>
                Edit
            </span>
            <div className="view-area">

            </div>
            <div id="close-button" style={{display:!openState.addOpen?"none":"initial"}} className="contact add-area">
                <div className="name-cross">
                    <span style={{margin:"auto 0"}}>All Comments</span>
                    <button id="close-button" onClick={()=>addComment()} className="close-button" style={{color:"black"}}>x</button>
                </div>
                {
                    props.element?comments[props.element.id]?comments[props.element.id].map((value,index)=>
                        <div id="close-button" style={{display:"flex",flexDirection:"column",borderBottom:"thin purple solid",paddingBottom:"3rem"}}>
                            <h1 id="close-button">Name :</h1>
                            <span id="close-button">{value.name}</span>
                            <h1 id="close-button">Comment :</h1>
                            <span id="close-button">{value.comment}</span>
                            <button id="close-button" className="gradient-shifter purple-gradient-shifter " style={{marginTop:"1rem",width:"20%"}} onClick={()=>deleteComment(value.id)}>Delete</button>
                        </div>
                    ):"":""
                }
            </div>

            <div id="close-button" style={{display:!openState.commentOpen?"none":"initial"}} className="contact edit-area">
                <div id="close-button" className="name-cross">
                    <span id="close-button" style={{margin:"auto 0"}}>Add a comment</span>
                    <button id="close-button" onClick={()=>addComment()} className="close-button" style={{color:"black"}}>x</button>
                </div>
                <input id="close-button" ref={ref=>nameRef=ref} type="text" placeholder="Enter Name" style={{marginBottom:"3rem"}}></input>
                <br/>
                <textarea id="close-button" ref={ref=>commentRef=ref} type="text" placeholder="Enter Comment" ></textarea>
                <button id="close-button" onClick={()=>finalizeComment()} className="gradient-shifter purple-gradient-shifter" style={{fontSize:"1.1rem",padding:"0.5rem",marginTop:"1rem"}}>Add</button>
            </div>
        </div>
    )
}