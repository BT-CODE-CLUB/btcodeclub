import React from "react";
import Header from "../components/Header";
import PersonCard from "../components/PersonCard";
import Card from "../components/Card"
// import folder from "../components/folder"
import "../css/Home.css";
import Ctf from "../assets/ctf.jpg"
import Recoursive from "../assets/recoursive.jpg"
import Bt from "../assets/bt.jpg"
import Acsl from "../assets/acsl.png"
import Hackathon from "../assets/hackathon.png"
import Apcsp from "../assets/apcsp.jpg"
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <>
            
            <main className="home-body">
                <div className="hero" id="main">
                    <div className="hero-img"><img src="/hero.png" alt=""/></div>
                </div>
                <div className="light">
                    <h2 className="title">BTCTF</h2>
                    <div className="center subtitle">Cybersecurity, The Fun Way!</div>
                    <div className="text center">05/24/2024 - 5/26/2024</div>
                    <div className="text spacing center">Registration coming out soon</div>
                </div>
                <div className="about spacing" id="faq">
                    <h5 className="text-title">What is BTCTF?</h5>
                    <div className="text">BTCTF is a CTF (Capture The Flag) competition run by Bergen Tech Teterboro Code Club. Teams of 1-4 Compete for 2 days to get "flags" by solving challenges related to cybersecurity topics such as web exploitation, forensics, reverse engineering, cryptography, binary exploitation, and basic skills / trivia</div>
                    <h5 className="text-title">Who can sign up to compete?</h5>
                    <div className="text">Anybody can sign up to compete! We are open to all and are very welcoming to beginners. We are hoping that people can have fun and learn from this competition. </div>
                    <h5 className="text-title">What do I need to compete?</h5>
                    <div className="text">You will need a computer with reliable internet. You might also need a Linux OS and some other online tools.</div>
                    <h5 className="text-title">Will there be prizes?</h5>
                    <div className="text">There will be prizes! Prizes will be announced later.</div>
                    <h5 className="text-title">Do I need to pay to participate?</h5>
                    <div className="text">No! We want everybody to participate. There will be no fees associated with registration</div>
                    <h5 className="text-title">Do I need a team?</h5>
                    <div className="text">Yes, we recommend that you work with a team, since it is a great way to find solutions, and have fun. Teams consist of 1-5 members, but if you want to work alone, you can.</div>
                    <h5 className="text-title">I still have questions...</h5>
                    <div className="text">Feel free to email or contact us!</div>
                </div>
                <div className="footer">
                    <div className="events spacing center" id="contact">
                        <h3 className="subtitle center">Contact Us</h3>
                        <a href="" className="text center">btcodeclub@gmail.com</a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;