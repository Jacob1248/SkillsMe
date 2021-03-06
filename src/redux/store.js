import { createStore, combineReducers } from "redux";

import "./actions";

let rootState ={
    clickedElement:null,
    commentsOpen:false,
    colorOpen:false,
    colorPalette:{
        mini:'purple',
        large:'black',
        description:'gray',
        boldLarge:'white',
        footer:"white",
        nav:"white",
        navbg:"#6610f2"
    }
}
 

const rootReducer = (state = rootState,action) => {
    switch(action.type){
        case "SET_CLICK":{
            let c = {
                ...state,
                clickedElement:action.payload,
            }
            return c;
        }
        case "TOGGLE_COMMENTS":{
            let newState = {
                ...state,
                commentsOpen:!state.commentsOpen,
                colorOpen:false,
                clickedElement:null
            }
            return newState
        }
        case "TOGGLE_COLOR":{
            let newState = {
                ...state,
                colorOpen:!state.colorOpen,
                commentsOpen:false,
                clickedElement:null
            }
            return newState
        }
        case "CLOSE_BOTH":{
            let newState = {
                ...state,
                colorOpen:false,
                commentsOpen:false,
                clickedElement:null
            }
            return newState
        }
        case "CHANGE_COLOR":{
            let newState = {
                ...state,
                colorPalette:{
                    mini:action.payload.mini?action.payload.mini:state.mini,
                    large:action.payload.large?action.payload.large:state.large,
                    description:action.payload.description?action.payload.description:state.description,
                    boldLarge:action.payload.boldLarge?action.payload.boldLarge:state.boldLarge,
                    footer:action.payload.footer?action.payload.footer:state.footer,
                    nav:action.payload.nav?action.payload.nav:state.nav,
                    navbg:action.payload.navbg?action.payload.navbg:state.navbg
                }
            }
            return newState;
        }
        default:
            return state;
    }
}
  

export const store = createStore(combineReducers({
    rootReducer:rootReducer
}));