import React from 'react'
import { Card, Button } from "react-bootstrap";
import img from './image.jpg'

import './Partners.css'

function CardFunc(props) {
    return (
        <div className="partcards" style={{ alignItems:"center",marginBottom:"2rem"}}>
            <Card style={{ boxShadow:" 2px 2px 25px #e6e6e6", border:"none",height:"22rem", width:"18rem",marginInline:15,borderRadius:"1rem"}} >
            <Card.Img variant="bottom" src={props.partimg} style={{height:"10rem",width:"14rem" ,marginLeft:"2rem",marginTop:"1.2rem",borderRadius:"0.5rem"}} />
            <Card.Body>
               {/* 
                 <Card.Title style={{fontStyle:"bold"}} >{props.name}</Card.Title> 
               */}
                <Card.Text style={{fontSize:"1.2rem", textAlign:"center",fontWeight:"100"}} >
                {props.mil}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default CardFunc
