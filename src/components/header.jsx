import React from "react";
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import "../css/header.css";

const Header = () => {
    return (
        <header>
            <HashLink to="#">
                <img src="/hero.png" alt="" className="logo"/>
            </HashLink>
            <nav>
                <ul>
                    <li><HashLink to="#about">About</HashLink></li>
                    <li><HashLink to="#events">Events</HashLink></li>
                    <li><HashLink to="#projects">Projects</HashLink></li>
                    {/* <li><HashLink to="#team">Team</HashLink></li> */}
                    <li><HashLink to="#join">Join</HashLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;