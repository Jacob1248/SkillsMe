import React from 'react';
import "./InfoPage.css";

export const InfoPage = (props) =>{

    const getComponentFromProps = () =>{
        let Item = props.Item;
        return <Item></Item>
    }

    return(
        <div className="info-page" style={{flexDirection:props.reverse?"row-reverse":"row"}}>
            <div className="explanation-container" style={{width:"50%"}}>
                <span className="purple-header">{props.header}</span>
                <span className="explanation-header">{props.explanationHeader}</span>
                <p className="explanation-description">{props.mainExplanationDescription}</p>
                <p className="explanation-description">{props.subExplanationDescription}</p>
            </div>
            <div className="item-holder" style={{width:props.width}}>
                {
                    getComponentFromProps()
                }
            </div>
        </div>
    )
}