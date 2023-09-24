import React from "react";
import "../css/card.css";

const Card = (props) => {
    return (
        
        <div className="card">      
            <div className="card-header">
                <h4 className="title">{props.title}</h4>
                <h5>{props.date}</h5>
            </div>
            <div className="card-body">
                <p>{props.description}</p>
            </div>
        </div>
        
        
    )
}

export default Card;