import React from "react";
import Header from "../components/Header";
import "../css/Home.css";
import { TypeAnimation } from 'react-type-animation';
const Home = () => {
    return (
        <>
            <Header />
            <main className="home-body">
                <div className="hero" id="main">
                    <h1><TypeAnimation
        sequence={[
          "BT CODE CLUB",
          5000,
          "Hello, World!",
          1000,
        ]}
        speed={10}
        repeat={Infinity}
        
      /></h1>
                </div>
                <div className="about spacing" id="about">
                    <h2 className="subtitle">About</h2>
                    <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, repudiandae earum. Tempore reprehenderit veritatis, eligendi in natus nobis non quo possimus dolor ipsa. Quod, in ratione voluptatum blanditiis officiis ex!</div>
                </div>
                <div className="events spacing" id="events">
                    <h2 className="subtitle">Events</h2>
                    <h3 className="text">2023-2024</h3>
                    
                </div>
                <div className="projects spacing" id="projects">
                    <h2 className="subtitle">Projects</h2>
                    <h3 className="text">2023-2024</h3>
                    
                    <div className="text">Find more on our github</div>
                </div>
                <div className="team spacing" id="team">
                    <h2 className="subtitle">Team</h2>
                    <div className="text">TBD</div>
                </div>
                <div className="contact spacing" id="contact">
                    <h2 className="subtitle">Join</h2>
                    
                    <div className="text">Google Classroom</div>
                    <div className="text">Discord</div>
                    <div className="text">Instagram</div>
                </div>
                <div className="footer">

                </div>
            </main>
        </>
    )
}

export default Home;