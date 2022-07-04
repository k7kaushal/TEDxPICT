import React from 'react'
import { Card, Button } from "react-bootstrap";
import img from '../../assets/john.jpg'


function CardFunc(props) {
    return (
        <div style={{ marginInline:35, marginBottom:40, justifyContent:"space-around"}} >
            <Card style={{textAlign:'center', borderRadius:150, width:"250px", border:"none"}} >
            <Card.Img variant="top" src={img} style={{width:"250px",height:"250px", borderRadius:"50%"}} />
            </Card>
            <h3 style={{marginTop:5}} >{props.name}</h3>
        </div>
    )
}

export default CardFunc
