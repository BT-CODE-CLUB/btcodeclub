import React from "react";
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import "../css/header.css";

const Header = () => {
    return (
        <header>
            <HashLink to="#">
                <h1>BT Code Club</h1>
            </HashLink>
            <nav>
               
            </nav>
        </header>
    );
}

export default Header;