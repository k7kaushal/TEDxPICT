import React from "react";
import './FAQ.css';
import { Accordion } from 'react-bootstrap'

function FAQ() {
  return (
    <>
      <div className="container" style={{marginBottom:"50px"}}>
        <h2 style={{ textAlign: "center", color: "black" }}>
          Frequently Asked&nbsp;<span style={{ textAlign: "center", color: "red" }}>Questions</span>
        </h2>
        <h2 className="headingFAQ" style={{ color: "black" }}>
          About&nbsp;<span style={{ color: "red" }}>TEDxPICT:</span>
        </h2>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is TEDxPICT?</Accordion.Header>
            <Accordion.Body>
            TEDxPICT is a collective of individuals whose sole purpose is to bring together an event that prioritises the sharing of ideas, stories and innovations that benefit the world at large.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How can I reach out to the organising team of TEDxPICT?</Accordion.Header>
            <Accordion.Body>
            Check out our contact us page!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Where can I see previous TEDxPICT talks?</Accordion.Header>
            <Accordion.Body>
            You can watch our previous TED talks and events on the Youtube channel of TEDx Talks. You can also refer the Past Editions page for information of the sepakers.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Is TEDxPICT a part of TED?</Accordion.Header>
            <Accordion.Body>
            TEDx events and are organized independently under a free license granted by TED. These events are not controlled by TED, but event organizers agree to abide by our format, and are offered guidelines for curation, speaker coaching, event organizing and more.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How to become a speaker for TEDxPICT?</Accordion.Header>
            <Accordion.Body>
            Our Curations team is always on the lookout for pioneers and visionaries having Ideas Worth Spreading so feel free to contact us on our official handles.
            You can also mail us your profile at: curation@tedxpict.com
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Why should you partner with us?</Accordion.Header>
            <Accordion.Body>
            TEDxPICT provides the benefit of  direct exposure to our audience members, giving a good local reach through our event, which is great to spread the word around through word of mouth. Along with this, all our talks are later uploaded onto the TEDx Talks YouTube channel which has 30M subscribers, giving a worldwide advertisement base. All this plus social media coverage and more gives all our sponsors incredible exposure to markets, with the added bonus of being connected to a brand like TED.
          </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default FAQ;
