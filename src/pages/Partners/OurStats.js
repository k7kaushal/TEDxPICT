import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './Partners.css'
import Chart from './chart.png'
import Aos from "aos";
import "aos/dist/aos.css"

const ls  = [
    {   
        key:1,
        number: "40k+",
        text: "Students of PICT"
    },
    {   
        key:2,
        number: "2.4k+",
        text: "Reach on Facebook during branding campaigns"
    },
    {   
        key:3,
        number: "1500+",
        text: "Instagram Followers"
    },
    {   
        key:4,
        number: "300+",
        text: "Twitter Followers"
    },
    {   
        key:5,
        number: "23k",
        text: "Footfall at college fests"
    },
    {   
        key:6,
        number: "25M+",
        text: "TEDx Talks YouTube Subscribers"
    }
]

function OurStats(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div  className="comp" >
                        <span className="comp-heading-black"> Our<span className="comp-heading-red" > Statistics </span></span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col  sm={6} xs={12}>
                        <Container fluid>
                            <Row>
                                { 
                                    ls.map((index) => (
                                    <Col  lg={6}  sm={6} xs={12} key={index.key}>
                                        <h4 style={{color:"red", paddingTop: "5vh" , fontSize:"4vh"}} >{index.number}</h4>
                                        <h5 style={{textAlign:"center", fontSize:"3vh"}} >{index.text}</h5>
                                    </Col>   
                                    ))
                                }                       
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={6} xs={12}>
                        <img src={Chart} alt="chart" className="chart" />
                        <h5 style={{textAlign:"center"}} >Our YouTube Views</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurStats
