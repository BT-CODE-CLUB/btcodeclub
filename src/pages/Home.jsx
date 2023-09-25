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
            <Header />
            <main className="home-body">
                <div className="hero" id="main">
                    {/* <div className="hero-img"></div> */}
                    <h1><TypeAnimation sequence={["BT CODE CLUB", 5000, "Hello, World!", 1000, "Welcome!", 3000]} speed={10} repeat={Infinity}/></h1>
                </div>
                
                <div className="about spacing" id="about">
                    <h2 className="subtitle">About</h2>
                    <div className="text center">BT Code Club is a fun opportunity to explore computer skills and having fun.</div>
                    <h5 className="text-title">Programming</h5>
                    <div className="text">Learning to code teaches you problem-solving and promotes teamwork. Programmers make anywhere from $70,000 to over $200,000. At Code Club, we teach you the methods, disciplines, and languages that many companies use today. From learning how to work in teams and build big projects with GitHub, to learning must-needed languages such as Python and HTML/CSS/JS frameworks. Code Club wants you to participate in helping out and developing impressive projects, so even if you do not know much, our members are always willing to help out. Knowing how to program before college is very impressive to colleges, even if you don’t want to major in computer science. </div>
                    <h5 className="text-title">Volunteering</h5>
                    <div className="text">BT Code Club gives members the opportunity to volunteer. Partering with tutoring program Recoursive, run by our co-leader Noah Kim, students teach basic programming all throughout select Bergen County libraries to young kids. Members can also build projects for other clubs such as websites or source code for volunteer hours. This will be a good opportunity to both gain volunteer hours and contribute to both the Bergen Tech and Bergen County community. </div>
                    <h5 className="text-title">Competing</h5>
                    <div className="text">Competing is a great opportunity to showcase skills and build your college application. Code Club brings members all across the state to participate in Hackathons, where students work with others and use their programming skills to make projects to solve a social issue. Students have the opportunity to participate in ACSL and USACO, computer science competitions where an algorithm is created to get a desired output. Students get the chance to participate in CTFs, competitions where people in a team are challenged to find and exploit vulnerabilities in a system to capture a "flag" or piece of information to win. </div>
                </div>
                <div className="events spacing" id="events">
                    <h2 className="subtitle">Events</h2>
                    <div className="text-title center">2023-2024</div>
                    <div className="card-group">
                    <Card title="BTCTF" image = {Ctf} description="BT's very own Capture The Flag! Complete a series of missions aimed to help introduce the basics of hacking. No experience is necessary. The competition is aimed for complete beginners that build up to a general knowledge of cybersecurity. Bring a team to compete and have fun."/>
                    <Card title="APCSP Arcade" image = {Apcsp} description="The AP Computer Science Principles class will be showcasing their video games on bring your child to work day! See what fun video games the BT COMPSCI sophomores have made!"/>
                    <Card title="Recoursive Tutoring" image ={Recoursive} description="Earn volunteer hours through Recoursive! Get the opportunity to teach kids programming at a library. Teach HTML/CSS/JS, Python, Scratch and more. Great opportunity to improve on teaching skills, as well as a great way to contribute to the Bergen County community."/>
                    <Card title="School Events" image={Bt} description="Whenever BT has an event, such as multicultural day, mental health day, or springfest, BT Code Club might host a fun event."/>
                    <Card title="ACSL" image={Acsl} description=""/>
                    <Card title="Hackathons" image = {Hackathon} description=""/>
                    </div>
                    <div className="text center">If you ever have an idea for an event, please join and tell us!</div>
                </div>
                <div className="projects spacing" id="projects">
                    <h2 className="subtitle">Projects</h2>
                    <div className="text-title center">2023-2024</div>
                    <Card title="BTGPA"></Card>
                    <Card title="BT Bus App"></Card>
                    <Card title="BT COMPSCI Major Showcase"></Card>
                    <div className="text-title center spacing">More On The Way!</div>
                    <div className="text center">Want to contribute? Just ask!</div>
                </div>
                {/* <div className="team spacing" id="team">
                    <h2 className="subtitle">Team</h2>
                    <div className="text-title center">2023-2024</div>
                    <section id="members" className="members">
                        <div className="member-card-deck">
                            <PersonCard
                                    name="Anurag Mathews"
                                    role="Leader"
                                    description=""
                                    image="https://avatars.githubusercontent.com/u/56193495?v=4"
                                    links={[
                                        {
                                            icon: "fa-regular fa-envelope",
                                            link: "mailto:email@example.com"
                                        }
                                    ]}
                            />
                            <PersonCard
                                name="Noah Kim"
                                role="co-Leader"
                                description=""
                                image="https://avatars.githubusercontent.com/u/56193495?v=4"
                                links={[
                                    {
                                        icon: "fa-regular fa-envelope",
                                        link: "mailto:email@example.com"
                                    }
                                ]}
                            />
                            <PersonCard
                                name="Jake Park"
                                role="co-Leader"
                                description="Co-Leader"
                                image="https://avatars.githubusercontent.com/u/56193495?v=4"
                                links={[
                                    {
                                        icon: "fa-regular fa-envelope",
                                        link: "mailto:email@example.com"
                                    }
                                ]}
                            />
                            <PersonCard
                                name="Jake Park"
                                role="co-Leader"
                                description="Co-Leader"
                                image="https://avatars.githubusercontent.com/u/56193495?v=4"
                                links={[
                                    {
                                        icon: "fa-regular fa-envelope",
                                        link: "mailto:email@example.com"
                                    }
                                ]}
                            />
                            
                        </div>
                    </section>
                </div> */}
                <div className="contact spacing footer" id="join">
                    <h2 className="subtitle">Join</h2>
                    <div className="text-title center links"><a href="https://classroom.google.com/c/NDExNzM4NjY3ODM0?cjc=bf5iznt">Google Classroom</a></div>
                    <div className="text-title center links"><a href="https://discord.gg/qKCqxk5BnR">Discord</a></div>
                    <div className="text-title center links">Instagram</div>
                    <div className="text-title center links"><a href="https://github.com/BT-CODE-CLUB">Github</a></div>
                    
                </div>
            </main>
        </>
    )
}

export default Home;