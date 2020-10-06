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


