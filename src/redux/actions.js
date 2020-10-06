export const setClick = (payload) =>{
    return {type:"SET_CLICK",payload:payload}
}

export const setComment = (payload) =>{
    return {type:"SET_COMMENT",payload:payload}
}

export const deleteComment = (payload) =>{
    return {type:"DELETE_CLICK",payload:payload}
}

export const toggleComments = () =>{
    return {type:"TOGGLE_COMMENTS"}
}

export const toggleColor = (payload) =>{
    return {type:"TOGGLE_COLOR"}
}

export const closeBoth = () =>{
    return {type:"CLOSE_BOTH"}
}

export const changeColor = (payload) =>{
    return {type:"CHANGE_COLOR",payload}
}


