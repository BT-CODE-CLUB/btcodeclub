import React from "react";
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import "../css/header.css";

const Header = () => {
    return (
        <header>
            <HashLink to="#">
                <h1>BT CODE CLUB</h1>
            </HashLink>
            <nav>
                <ul>
                    <li><HashLink to="#about">About</HashLink></li>
                    <li><HashLink to="#events">Events</HashLink></li>
                    <li><HashLink to="#projects">Projects</HashLink></li>
                    <li><HashLink to="#team">Team</HashLink></li>
                    <li><HashLink to="#contact">Contact</HashLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;