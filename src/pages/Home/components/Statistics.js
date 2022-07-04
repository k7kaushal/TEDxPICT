import './Statistics.css'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import handleViewport from 'react-in-viewport';
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Statistics = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div className="space-betn">
            <div className="myText-cards title-horizontal-line" style={{ textAlign: "center" }} >Statistics</div><br></br>
            <div className="container"><div className="grid">
                <div className="row stats-row">
                    {/* <div className="col-1"></div> */}
                    <div className="col-md-2 col-12">
                        <div>
                            <div className="stats-text" style={{ textAlign: "center", color: "red"}} ><CountUp
                                start={0}
                                end={6}
                                duration={2}
                            />   </div>
                            <h4 className="stats-text-label" style={{ textAlign: "center" }}>Events</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div>
                            <div style={{ textAlign: "center", color: "red"}}>
                                <span className="stats-text"><CountUp
                                    start={0}
                                    end={50}
                                    duration={2}
                                />   </span><span className="stats-text">+</span></div>
                            <h4 className="stats-text-label" style={{ textAlign: "center" }}>Events</h4>

                        </div>
                    </div>
                    <div className="col-md-2 col-12">
                        <div>
                            <div className="stats-text" style={{ textAlign: "center", color: "red"}} ><CountUp
                                start={0}
                                end={6}
                                duration={2}
                            />   </div>
                            <h4 className="stats-text-label" style={{ textAlign: "center" }}>Events</h4>

                        </div>
                    </div>
                    <div className="col-md-2 col-12">
                        <div>
                            <div className="stats-text" style={{ textAlign: "center", color: "red"}} ><CountUp
                                start={0}
                                end={6}
                                duration={2}
                            />   </div>
                            <h4 className="stats-text-label" style={{ textAlign: "center" }}>Events</h4>

                        </div>
                    </div>
                    <div className="col-md-2 col-12">
                        <div>
                            <div className="stats-text" style={{ textAlign: "center", color: "red"}} ><CountUp
                                start={0}
                                end={6}
                                duration={2}
                            />   </div>
                            <h4 className="stats-text-label" style={{ textAlign: "center" }}>Events</h4>

                        </div>
                    </div>
                    {/* <div className="col-1"></div> */}
                </div>
            </div>
            </div><br></br>
        </div>
    )
}

export default Statistics
