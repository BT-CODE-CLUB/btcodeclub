import React from "react";
import "../css/personCard.css";

const PersonCard = (props) => {
    return (
        <div className="personCard">
            <div className="personCard-body">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="personCard-body">
                <h4 className="name">{props.name}</h4>
            </div>
            <p>
                <em>{props.role}</em>
            </p>
            <p>
                <em>{props.description}</em>
            </p>
            <div className="personCard-footer">
                {
                    props.links.map((link, index) => {
                        return (
                            <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">
                                <i className={link.icon}></i>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PersonCard;