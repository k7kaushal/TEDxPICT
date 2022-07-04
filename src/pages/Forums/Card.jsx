import React from 'react'
import img from './poetry.jpg';
import { Container, Col, Row, Button ,Card} from "react-bootstrap";
import styles from './cards.module.css'
import {BiRightArrow} from "react-icons/bi";
import { FaAngleDoubleRight } from 'react-icons/fa'





function CardFunc(props) {
    return (
        <div  className={styles.cardcontainer} style={{textAlign:'left'}}>
            <Card className={styles.blogcard} style={{ width: '15rem', textAlign:'justify',border:"None"}}>
            <Card.Img variant="top" src={props.blogimg} style={{ borderRadius:"10px"}}/>
            <Card.Body style={{marginLeft:"-1rem" , marginRight:"-2rem"}}>
                {props.date}
                <Card.Title style={{textAlign:"left"}}>{props.name}</Card.Title>
                <Card.Text className={styles.content} style={{textAlign:'justify'}}>
                {props.content}
                <br></br>
                <a href={props.link} target="_blank" className={styles.readmore_button}>Read more<FaAngleDoubleRight/></a>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default CardFunc
