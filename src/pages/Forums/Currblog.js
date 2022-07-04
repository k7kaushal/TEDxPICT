import React ,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Currblogimg from './Marcato.png'
import { Container, Col, Row, Button, CardGroup } from "react-bootstrap";
import styles from './blogstyles.module.css'
import {BsArrowRight } from  "react-icons/bs";
function Currblog() {
    return (
        <div className={styles.container}>
        <Row>
            
            <Col lg={5} md={12} sm={12} xs={12}>
                <div className={styles.imgdiv}>
                    <img className={styles.Currblogimg} src={Currblogimg} alt=""/>
                </div>
                
            </Col>
            <Col lg={7} md={12} sm={12} xs={12} className={styles.descrip}>
                 <p  style={{fontWeight:"450"}}>January 26,2022</p>
                 <p className={styles.name} style={{textAlign:"left",color:"red"}}>MARCATO</p>
                 <p className={styles.content} style={{textAlign:"justify",fontWeight:"350",padding:"10px",fontSize:"1.1rem"}}> The wait is finally over! We are thrilled to announce that the theme for TEDxPICT 2022 is drum roll please Marcato! As Marvin Gaye once said,” Music is one of the closest link-ups with God that we can probably experience. It’s a common vibrating tone of the musical notes that holds all life together.” One of the many such notes is the Marcato- a note played louder than the surrounding music. This year TEDxPICT hopes to cherish and celebrate the Marcatos of life exploring the correspondences in music and life, the highs and lows and everything.</p>
                 <a href="https://blogs.tedxpict.com/marcato" target="_blank" style={{ color: "red" , textAlign: "center"}} className="icons"><button className={styles.readmore_button}>Read more<BsArrowRight size="2rem"/></button></a>
            </Col>
        </Row>
            
        </div>
    )
}

export default Currblog
