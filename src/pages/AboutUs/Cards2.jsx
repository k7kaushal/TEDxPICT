import React from 'react'

import { Container, Col, Row, Button ,Card} from "react-bootstrap";
import img from './boy.jpg';
import { AiFillInstagram,AiFillLinkedin } from "react-icons/ai";
import styles from './cardstyles.module.css';



function CardFunc(props) {
    return (
        <div style={{ margin:"30px"}}>
            <Card className={styles.card2} style={{ width: '12.2rem' ,textAlign:'center', }}>
            <Card.Img variant="top" style={{height:'12rem'}} className={styles.imgtop} src={props.img}></Card.Img>
            <Card.Body style={{height:"12rem"}}>
                <Card.Title style={{fontStyle:"bold"}} >
                    {props.name}
                </Card.Title>
                <Card.Text style={{fontStyle:"italic"}} >
                {props.post}
                <Container>
                <Row>
                <ul style={{listStyle:"none",display:"flex",position:"relative",marginLeft:"2px"}}>
                <li>
                    <a href={props.insta} target="_blank" style={{ color: "red" , textAlign: "center"}} className="icons"><AiFillInstagram size="2em"/></a>
                    </li>
                    <li>
                    <a href={props.linkd} target="_blank" style={{ color: "red" , textAlign: "center"}} className="icons"><AiFillLinkedin size="2em"/></a>
                    </li>
                </ul>
                
                
              
                
                
                </Row>
                </Container>
                
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default CardFunc
