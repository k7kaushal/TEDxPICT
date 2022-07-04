import React ,{useEffect} from "react";
import Aos from "aos";
import styles from './ourspeakers.module.css'
import img from './speaker.jpg'
import img1 from './saleel.jpeg'
import img2 from './renuka.png'
import img3 from './satish.png'
import img4 from './samir.png'
import img5 from './raj.png'
import img6 from './Ajay.png'
import img7 from './sujaydhake3.jpg'
import {Container, Row, Col} from 'react-bootstrap';
function OurSpeakers4() {
    useEffect(() => {
        Aos.init({duration:900, offset: 60, delay:500});
    }, []);
    return (
        <Container>
            <h2 data-aos="fade-up" className={styles.h21}>Our&nbsp;<font color="red">speakers</font></h2>
         <Container>
         <Row>
             <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img1} alt=""/>
             </Col>
             <Col data-aos="fade-left" lg={8} md={12} sm={12}>
             <p  className={styles.name}><font color="red">Dr.  Saleel Kulkarni</font></p>
             <h3 className={styles.adj}>Curious | Unconventional | Vigilant</h3>
             <p className={styles.paragraph}>Dr. Saleel Kulkarni, a stunning singer, songwriter, music composer, filmmaker, and an author – through his melodious and soulful songs, has managed to carve a niche in the hearts of his listeners. Known in almost every Maharashtrian household, he’s wonderfully captivated the audience through his best-known upbeat and enthralling songs.</p>
             </Col>
         </Row>
         <br></br>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Renuka Kirpalani</font></p>
             <h3 className={styles.adj}>Perspicacious | Expressive |  Observant</h3>
             <p className={styles.paragraph}>Ms. Renuka Kirpalani has been a known persona in the Indian automotive world for a long time. A professional racer, talk show host, and editor, Ms. Renuka Kirpalani is a trailblazer in the world of motorsport.Whether its the open country roads or the asphalt race track, her passion for driving has remained unfazed. </p>   
             </Col>
             <Col data-aos="fade-left" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img2} alt=""/>
             </Col>
             
         </Row>         <br></br>

         <hr></hr>
         <Row>
             <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img3} alt=""/>
             </Col>
             <Col data-aos="fade-left" lg={8}  md={12} sm={12}>
             <p  className={styles.name}><font color="red">Dr. Satish Pande</font></p>
             <h3 className={styles.adj}>Passionate | Persevering | Inspirational</h3>
             <p className={styles.paragraph}>Dr. Satish Pande, an MD, a radiologist, sonologist, wildlife enthusiast, and a seasoned ornithologist has worked tirelessly in the field of ecology and wildlife conservation. Dr. Satish Pande has an undying ardor for birds and ecology and has written many riveting books based on ornithology. Dr. Pande not only believes but also proves how swiftly changing technology could become the means to save the environment.</p>   
             </Col>
         </Row>
         <br></br>

         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Samir Dhurde</font></p>
             <h3 className={styles.adj}>Unfeigned | Unshackled | Enthralling</h3>
             <p className={styles.paragraph}>Trained as a Radio Astronomer with a Masters in Physics, an educator, and a humanist, Mr. Samir Dhurde is at heart just a huge admirer of everything that goes on in the sky above us. He is currently in charge of the popular outreach program SciPOP at IUCAA in Pune. 
What really makes him an amazing person is his absolutely genuine enthusiasm for sharing all the joy he personally derives from everything related to Space and Science with everyone he meets. 
</p>   
             </Col>
             <Col data-aos="fade-left"lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img4} alt=""/>
             </Col>
             
         </Row>
         <br></br>

         <hr></hr>
         
         <Row >
            <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} style={{height:"18rem"}} src={img5} alt=""/>
             </Col>
            <Col data-aos="fade-left" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Raj Dagwar</font></p>
             <h3 className={styles.adj}>Innovative | Revolutionary | Determined</h3>
             <p className={styles.paragraph}>Mr. Raj Dagwar is a man driven by a passion for promoting mental health awareness and encouraging everyone to be more vocal about the problems they face. A youth inspiration awardee, an excellent speaker as well as a mental health worker, he has helped over 5000 people online alone, and many offline too. He has talked about many heart-touching stories of people that were hesitant to speak about their own mental health issues such as depression and anxiety.  </p>   
             </Col>
             
         </Row>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Ajay Phatak</font></p>
             <h3 className={styles.adj}>Industrious | Critical | Rational</h3>
             <p className={styles.paragraph}>An engineer, a cyclist, a teacher, and an environmentalist, Mr. Ajay Phatak has spent several years learning and exploring ways to protect the environment and improve sustainability. On the weekends, instead of kicking back and relaxing, you'd more likely find him cycling around different parts of Pune.
Having spent several years on the frontier of the development of technology, he has acutely observed the impact business and economic policies have on our environment. 
</p>   
             </Col>
             <Col data-aos="fade-left" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img6} alt=""/>
             </Col>
         </Row>
         <br></br>

         <hr></hr>
         {/* <Row>
         <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img2} alt=""/>
             </Col>
             
         <Col data-aos="fade-left" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Anurag Kumar Singh</font></p>
             <h3 className={styles.adj}>Energetic | Vibrant | Virtuoso</h3>
             <p className={styles.paragraph}>The speaker Anurag Kumar Singh the guitarist of the After Acoustics band elucidates the fact that "being eccentric" is not only just okay but can also create wonders at times.
                The band has performed with revered artists like Mr. Shankar Mahadevan, Vishal Dadlani, Pritam, Agnee, Indian Ocean, Benny Dayal, and Hariharan. The band has also been a part of the biggest banners like  HORNBILL FESTIVAL, MOOD INDIGO, MUSIC MOJO KAPPA TV making various college fests vibrant and winning awards as well. Watch the speaker throw up an energetic performance along with his co-artists Gaurav Wavhal and Akarsh Shetty.
                </p>
             </Col>
         </Row> */}
       </Container>
        </Container>
         
        
    )
}
export default OurSpeakers4