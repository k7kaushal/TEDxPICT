import React from 'react'
import { Container, Row, Col, CardGroup } from 'react-bootstrap'
import './Partners.css'
import Aos from "aos";
import "aos/dist/aos.css"
//Components
import Card from './Card.jsx'
import partimg1 from'./pc.jpg'
import partimg2 from'./partn.jpg'
import partimg3 from'./Yt.png'

function OurMilestones() {
    return (
        <div className="contq">
            <Container>
                <Row>
                    <Col>
                        <div className="comp" >
                            <span className="comp-heading-black">Our<span className="comp-heading-red" > Milestones</span></span>
                        </div>
                    </Col>
                </Row>
                <CardGroup style={{paddingTop:"12vh"}} className="milestonecard">
                    <Card  mil=" Hon. Ex Chief Minister of Maharashtra Pritviraj Chavan graced our inaugural event." partimg={partimg1}/>
                    <Card mil="Partnered with renowned organizations such as Gold's Gym, Mapro and Persistent."partimg={partimg2} />
                    <Card mil="240,000 youtube views" partimg={partimg3}/>
                </CardGroup>
            </Container>
        </div>
    )
}

export default OurMilestones
