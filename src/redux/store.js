import { createStore, combineReducers } from "redux";

import "./actions";

let rootState ={
    clickedElement:null,
    storedData:{

    },
    commentsOpen:false,
    colorOpen:false
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
        case "SET_COMMENT":{
            let storedData = {
                ...state.storedData
            }
            storedData[action.payload.id] = [...storedData[action.payload.id],
                                                {
                                                    id:'_' + Math.random().toString(36).substr(2, 9),
                                                    name:action.payload.name,
                                                    comment:action.payload.comment
                                                }
                                            ]
            let c = {
                ...state,
                storedData:storedData
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
                commentsOpen:false
            }
            return newState
        }
        case "DELETE_COMMENT":{
            let storedData = {
                ...state.storedData
            }
            for(var i = 0; i < storedData[action.payload.id].length; i++)
            {
              if(storedData[action.payload.id][i].id === action.payload.value)
              {
                 storedData[action.payload.id].splice(i, 1);
                 return;
              }
            }
            let c = {
                ...state,
                storedData:storedData
            }
            return c;
        }
        default:
            return state;
    }
}
  

export const store = createStore(combineReducers({
    rootReducer:rootReducer
}));