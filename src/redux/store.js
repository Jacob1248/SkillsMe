import { createStore, combineReducers } from "redux";

import "./actions";

let rootState ={
    clickedElement:null,
    storedData:{

    }
}
 

const rootReducer = (state = rootState,action) => {
    switch(action.type){
        case "SET_CLICK":{
            let c = {
                ...state,
                clickedElement:action.payload.clickedElement,
            }
            return c;
        }
        case "SET_COMMENT":{
            let storedData = {
                ...state.storedData
            }
            storedData[action.payload.element] = [...storedData[action.payload.element],
                                                    action.payload.newData]
            let c = {
                ...state,
                storedData:storedData
            }
            return c;
        }
        case "DELETE_COMMENT":{
            let storedData = {
                ...state.storedData
            }
            storedData[action.payload.element].splice(action.payload.index, 1);
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