import React from 'react'
import { Col, Container, Row, CardGroup } from 'react-bootstrap'
import './Partners.css'


function BecomePartner() {
    return (
        <div>   
            <Container>
                <Row>
                    <Col>                        
                        <div className="become-partner-border" >
                        <span className="become-partner-heading-black">Want to be a <span className="become-partner-heading-red" >partner?</span></span>
                        <p className="become-partner-p">
                            Partner with us and be a part of a community brimming with innovation and ideas.
                        </p>
                        <h6 className="become-partner-p" style={{color:"red", marginTop:25, fontSize:28}} >Reach out to us: </h6>
                        <p className="become-partner-p" style={{fontWeight:"bold"}} >
                            <br></br>patnerships@tedxpict.com </p>                                                  
                                                    {/* <br></br>Kirti Palve: <a href="tel:+91 96652 29589">+91 96652 29589</a> 
                                                    <br></br>Devansh Mundada : <a href="tel:+91 73044 73444">+91 73044 73444</a> */}
                        

                        </div>
                    </Col>
                </Row>
            </Container>                
        </div>
    )
}

export default BecomePartner
