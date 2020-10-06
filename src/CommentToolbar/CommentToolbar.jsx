import React, { useState, useEffect } from 'react';
import "./CommentToolbar.css";
import {useSelector} from 'react-redux'
import gsap from "gsap";

export const CommentToolbar = () =>{

    const element = useSelector(state => state.rootReducer.clickedElement)

    const clicked = useSelector(state => state.rootReducer.commentsOpen)

    let g = gsap.timeline();

    const editAllComments = () =>{
        if(element){
            setOpenState({
                addOpen:false,
                commentOpen:!openState.commentOpen
            })
        }
        else{
            alert('Select an element first!')
        }
    }

    let nameRef,commentRef = null;

    let [openState,setOpenState] = useState({
        addOpen:false,
        commentOpen:false
    })

    let [force,setForce] = useState(false);

    let [comments,setComments] = useState({})

    const deleteComment = (value) =>{
        //deletes comment pertaining to an id
        for(var i = 0; i < comments[element.id].length; i++)
        {
          if(comments[element.id][i].id === value)
          {
             comments[element.id].splice(i, 1);
             setForce(!force);
             return;
          }
        }
    }

    const addComment = () =>{
        if(element){
            setOpenState({
                addOpen:!openState.addOpen,
                commentOpen:false
            })
        }
        else{
            alert('Select an element first!')
        }
    }

    const ID = () => {
      return '_' + Math.random().toString(36).substr(2, 9);
    };
    

    const finalizeComment = () =>{
        if(nameRef.value.trim()!=''||nameRef.value!=undefined){
            if(commentRef.value.trim()!=''||commentRef.value!=undefined){
                if(element.id!='close-button'){
                    let commentsTemp = {
                        ...comments
                    };
                    if(commentsTemp[element.id]){
                        //if element exists then append to the end of elements comment array
                        commentsTemp[element.id].push({
                            id:ID(),
                            name:nameRef.value,
                            comment:commentRef.value
                        })
                    }
                    else{
                        //if element doesnt exist in array then create a new entry
                        commentsTemp[element.id] = [{
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
                .to('.edit-area',{scale:1,duration:0.5})
            }
            else{
                g
                .to('.edit-area',{scale:0,duration:0.5})
            }
        }
        f();
    }
  )
    return(
        <div id="close-button" className="comment-toolbar" style={{display:clicked?"flex":"none"}}>
            <div id="close-button" style={{display:"flex",flexDirection:"column",display:openState.addOpen?"none":"initial"}}>
                <div id="close-button" style={{display:"flex",justifyContent:"space-between"}}>
                    <span id="close-button">Type :{element?element.tagName.toLowerCase():""}</span>
                    <span style={{marginLeft:"2rem"}} id="close-button">ID :{element?element.id:""}</span>
                    
                </div>    
                <div id="close-button" style={{display:"flex",justifyContent:"space-between",textDecoration:"underline"}}>
                <span id="close-button" onClick={()=>editAllComments()} style={{cursor:"pointer"}}>
                    Add
                </span>
                <span id="close-button" style={{marginLeft:"2rem"}}>
                    |
                </span>
                <span id="close-button" onClick={()=>addComment()} style={{marginLeft:"2rem",cursor:"pointer"}}>
                    View
                </span>

                </div>

            </div>
            <div id="close-button" style={{display:!openState.addOpen?"none":"initial"}} className="contact add-area">
                <div id="close-button" className="name-cross">
                    <span style={{margin:"auto 0",fontSize:"1.5rem",fontWeight:"bold"}} id="close-button">All Comments</span>
                    <button id="close-button" onClick={()=>addComment()} className="close-button" style={{color:"black"}}>x</button>
                </div>
                {
                    element?comments[element.id]?comments[element.id].map((value,index)=>
                        <div id="close-button" style={{display:"flex",flexDirection:"column",borderBottom:"thin purple solid",paddingBottom:"3rem"}}>
                            <h1 id="close-button">Name :</h1>
                            <span id="close-button">{value.name}</span>
                            <h1 id="close-button">Comment :</h1>
                            <span id="close-button">{value.comment}</span>
                            <button id="close-button" className="gradient-shifter purple-gradient-shifter " style={{marginTop:"1rem",width:"20%"}} onClick={()=>deleteComment(value.id)}>Delete</button>
                        </div>
                    ):"No comments to display!":"No comments to display!"
                }
            </div>

            <div id="close-button" style={{display:!openState.commentOpen?"none":"initial"}} className="contact contact-form edit-area">
                <div id="close-button" className="name-cross">
                    <span id="close-button" style={{margin:"auto 0",fontSize:"1.5rem",fontWeight:"bold"}}>Add a comment</span>
                    <button id="close-button" onClick={()=>addComment()} className="close-button" style={{color:"black"}}>x</button>
                </div>
                <input id="close-button" ref={ref=>nameRef=ref} type="text" placeholder="Enter Name" style={{marginBottom:"3rem",marginLeft:"0"}}></input>
                <br/>
                <textarea id="close-button" ref={ref=>commentRef=ref} style={{marginLeft:"0"}} type="text" placeholder="Enter Comment" ></textarea>
                <button id="close-button" onClick={()=>finalizeComment()} className="gradient-shifter purple-gradient-shifter" style={{fontSize:"1.1rem",padding:"0.5rem",marginTop:"1rem",marginLeft:"0"}}>Add</button>
            </div>
            <div className="blur-bg" style={{display:openState.commentOpen||openState.addOpen?"initial":"none"}}>

            </div>
        </div>
    )
}