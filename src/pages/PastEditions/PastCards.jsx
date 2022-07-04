import React from 'react'
import styles from './pastcards.module.css'
import { Container, Col, Row, Button ,Card} from "react-bootstrap";



function PastCardFunc(props) {
    return (
        <div  className={styles.pastcardcontainer} style={{textAlign:'left'}}>
            <Card>
            <Card.Img variant="top" src={props.pastimg} style={{ borderRadius:"0.25rem"}}/>
            <Card.Body style={{marginLeft:"-1rem" , marginRight:"-2rem"}}>
                <Card.Text className={styles.content} style={{textAlign:'justify'}}>
                {props.pastcontent}
                <p>

                </p>
                <h6>{props.quote}</h6>
                <p>
                </p>
                <h6>{props.authname}</h6>
            </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default PastCardFunc
