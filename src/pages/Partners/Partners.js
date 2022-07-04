import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

//Css
import './Partners.css'

//Images
import Image from './image.jpg';

//Components
import OurStats from './OurStats';
import OurMilestones from './OurMilestones';
import PreviousSponsors from './PreviousSponsors'
import BecomePartner from './BecomePartner';
import Skyimg from './image.jpg'

function Partners() {
    return (
      <>
          
      <Container classname="partnercontainer">
      
      <img className="partnerimg" src={Skyimg} alt=""/>

       <Row>
         <Col>
        <div className="comp" >
          <span className="comp-heading-black">Why you should<span className="comp-heading-red" > Partner </span>with us?</span>
          <div className="comp-subheading" >
          TEDxPICT provides the benefit of  direct exposure to our audience members, giving a good local reach through our event, which is great to spread the word around through word of mouth. Along with this, all our talks are later uploaded onto the TEDx Talks YouTube channel which has 30M subscribers, giving a worldwide advertisement base. All this plus social media coverage and more gives all our sponsors incredible exposure to markets, with the added bonus of being connected to a brand like TED.
          </div>
        </div>
        </Col>
        </Row>


        <Row>
          <Col>
            <OurStats />
          </Col>
        </Row>

        <Row>
         <Col>
            <OurMilestones />
          </Col>  
        </Row>

        <Row>
          <Col>
           <PreviousSponsors />
          </Col>
        </Row>

        <Row>
          <Col>
             <BecomePartner />
          </Col>
        </Row>

        </Container>
 </>
    )
}

export default Partners
