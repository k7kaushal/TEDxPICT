import './Cards.css'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useState } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import lightBulb from './lightbulb.png'
import thunder from './rithunderstorms.png'
import speecgBubbles from './speechbubbles.png'
import Vector from './Vector.png'
import ReactCardFlip from 'react-card-flip';
// import { AiFillBulb } from "react-icons/fa";


const Cards = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    function MouseOver(event) {
        setIsFlipped(!isFlipped);
    }
    function MouseOut(event) {
        setIsFlipped(!isFlipped);
    }
    return (
        <div className="bigClass">
            <div className="space-betn"><br></br>
                <div style={{ textAlign: "center" }}>
                    <span className="myText-cards" style={{ textAlign: "center", color: "black" }}>What is so special about</span>
                    <span className="myText-cards" style={{ textAlign: "center", color: "red", fontWeight: 'bold' }}> TEDxPICT?</span></div><br></br><br></br>
                <div className="container-xl">
                    <div className="grid grid-for-greed" >
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div data-aos="fade-right" >
                                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                                        <div onMouseOver={MouseOver} onMouseOut={MouseOut} className="card card-box">
                                            <div className="card-body card-body-1">
                                                <img src={lightBulb} className="card-img-top card-img-text" alt="" style={{ textAlign: "center", width: "6.637rem", top: "3rem" }} />
                                                <h1 className=" card-headline">Our Ideas</h1>
                                            </div>
                                            <a onClick={handleClick} className="flip-link">Read more →</a>
                                            {/* <a onClick={handleClick} className="flip-link">Read more →</a> */}
                                        </div>

                                        <div className="card card-box">
                                            <div style={{ backgroundColor: "#E62B1E" }} className="card-body card-body-1">
                                                <p className=" card-headtext">We endeavor Rhythm, to create a platform for people from different walks of life to present their ideas in front of the community. We assist in this globally shared mission of communicating ideas worth spreading.</p>
                                            </div>
                                        </div>
                                    </ReactCardFlip>
                                </div>
                            </div>
                            <div className="col-xl-3  col-lg-6 col-md-6">
                                <div data-aos="fade-right">
                                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                                        <div onMouseOver={MouseOver} onMouseOut={MouseOut} className="card card-box">
                                            <div className="card-body card-body-1">
                                                <img src={speecgBubbles} className="card-img-top card-img-text img-special" alt="" style={{ width: "9.6rem", height: "6.7rem", top: "3rem" }} />
                                                <h1 className="card-headline" style={{}}>Our Community</h1>
                                                
                                            </div>
                                            <a className="flip-link">Read more →</a>
                                        </div>

                                        <div className="card card-box">
                                            <div style={{ backgroundColor: "#E62B1E" }} className="card-body card-body-1">
                                                <p className="card-text card-headtext">We are a dedicated group of students passionate about cultivating a fraternity of people who are interested in learning and sharing different ideas. The community, like many others across the world, is a bunch of kindred spirits continuously assisting in the mission of changing the world with ideas.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactCardFlip>
                                </div>
                            </div>
                            <div className="col-xl-3  col-lg-6 col-md-6">
                                <div data-aos="fade-left">
                                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                                        <div onMouseOver={MouseOver} onMouseOut={MouseOut} className="card card-box">
                                            <div className="card-body card-body-1">
                                                <img src={thunder} className="card-img-top card-img-text" alt="" style={{ textAlign: "center", width: "6.637rem", top: "3rem" }} />
                                                <h1 className=" card-headline">Our Energy</h1>
                                            </div>
                                            <a className="flip-link">Read more →</a>
                                        </div>

                                        <div className="card card-box">
                                            <div style={{ backgroundColor: "#E62B1E" }} className="card-body card-body-1">
                                                <p className=" card-headtext">Everyone in the team has a myriad of ideas & opinions, which makes it fulfilling to work here. We have people here from diverse backgrounds and cultures who continuously discuss and debate on a plethora of ideas and ideals, which makes the work culture here a bubbling beaker of fascinating thoughts.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactCardFlip>
                                </div>
                            </div>
                            <div className="col-xl-3  col-lg-6 col-md-6">
                                <div data-aos="fade-left">

                                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                                        <div onMouseOver={MouseOver} onMouseOut={MouseOut} className="card card-box">
                                            <div className="card-body card-body-1">
                                                <img src={Vector} className="card-img-top card-img-text" alt="" style={{ textAlign: "center", width: "6.637rem", top: "3rem"}} />
                                                <h1 className=" card-headline">Our Stories</h1>
                                            </div>
                                            <a className="flip-link">Read more →</a>
                                        </div>

                                        <div className="card card-box">
                                            <div style={{ backgroundColor: "#E62B1E" }} className="card-body card-body-1">
                                                <p className=" card-headtext">For the last 5 years, we have been striving to have the most inventive themes and insightful speakers, sharing their unique ideas with the community. Our stories reside in the hearts of every team member, every speaker, and every audience member. The things we could tell you...
                                                </p>
                                            </div>
                                        </div>
                                    </ReactCardFlip>
                                </div>
                            </div>
                        </div>
                    </div></div><br></br>
            </div>
        </div>
    )
}

export default Cards
