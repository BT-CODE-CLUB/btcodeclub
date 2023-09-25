import React from "react";
import "../css/card.css";

const Card = (props) => {
    return (
        
        <div className="card">      
            <div className="card-image">
                <img src = {props.image} alt={props.title}/>
            </div>
            <div className="card-text">
                <h4 className="title">{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
        
        
    )
}

export default Card;