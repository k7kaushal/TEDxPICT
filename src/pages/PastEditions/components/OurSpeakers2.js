import React ,{useEffect} from "react";
import Aos from "aos";
import styles from './ourspeakers.module.css'
import img from './speaker.jpg'
import Meera from './Meera.jpg'
import Parakh from './Rajendra.jpg'
import Karan from './Karan.jpg'
import VivekRam from './Vivek.jpg'
import Perf from './Perf.png'
import {Container, Row, Col} from 'react-bootstrap';
function OurSpeakers2() {
    useEffect(() => {
        Aos.init({duration:900, offset: 60, delay:500});
    }, []);
    return (
        <Container>
            <h2 data-aos="fade-up" className={styles.h21}>Our&nbsp;<font color="red">speakers</font></h2>
         <Container>
         <Row>
             <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Parakh} alt=""/>
             </Col>
             <Col data-aos="fade-left" lg={8} md={12} sm={12}>
             <p  className={styles.name}><font color="red">Rajendra Parakh</font></p>
             <h3 className={styles.adj}>Wanderlust | Ambitious | Resilient</h3>
             <p className={styles.paragraph}>In 2014, Rajendra Parakh, along with his two friends, embarked on a 45-day journey. They call themselves GlobeWheelers and spent nearly three months driving 17,000kms from England to India. With all the highs and lows of the trip, irrespective of the language and culture barriers, it only made more sense that he lived in a closely-knit world where humanity always came first. At TEDxPICT, Rajendra talks about the stories behind the values that define humanity. He shared his felt moments of utter joy and wonder, along with fierce challenges which proved difficult to overcome."If a bird can fly over boundaries, why can't we?"</p>
             </Col>
         </Row>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Karan Murada</font></p>
             <h3 className={styles.adj}>Insightful | Determined | Optimistic</h3>
             <p className={styles.paragraph}>To make fitness a natural part of the lives of busy young people, 25-year-old Karan Murada started Fitato in 2016. He formulated a plan to address the common excuses people give when adopting a healthier lifestyle and managed to create a multi-million-dollar business out of it. Karan is a highly diligent and insightful person. His passion for his work and his deep, crazy thoughts will definitely blow your mind! Befitting the theme at TEDxPICT, he narrates his 6 year-long journey, from sleeping in offices, surviving on ₹50/- a day to raising funding and tackling COVID-19, sharing with the audience the realities of entrepreneurship and his attitude towards life and its challenges. </p>
             </Col>
             <Col data-aos="fade-left" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Karan} alt=""/>
             </Col>
             
         </Row>
         <hr></hr>
         <Row>
             <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Meera} alt=""/>
             </Col>
             <Col data-aos="fade-left" lg={8}  md={12} sm={12}>
             <p  className={styles.name}><font color="red">Mrs. Meera Badve</font></p>
             <h3 className={styles.adj}>Heartwarming | Passionate | Altruistic</h3>
             <p className={styles.paragraph}>Mrs.Meera Badve is the true embodiment of a mother, driven by a passion for selfless service who wants her kids to reach greater heights. She teachers over 3000+ visually challenged students and encourages them to excel in their chosen fields. Mrs.Meera Badve believes in equal opportunities for all children and strives to uphold this. A rare personality who doesn’t believe in only charity but doing something much more worthwhile, she serves as a  beacon of hope to many children who look up to her as their mother. Meera Badve talks about this rewarding journey and also the challenges that come with it at TEDxPICT. 
            </p>

             </Col>
         </Row>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Vivek Ram</font></p>
             <h3 className={styles.adj}>Philosophical | Artistic | Innovative</h3>
             <p className={styles.paragraph}>Vivek Ram is a creative personality, having worked with DreamWorks, Rhythm, and Hues in the VFX and animation space. He has also been a part of highly acclaimed Hollywood features such as Superman Returns, Fast and the Furious: Tokyo Drift, The Incredible Hulk, and Madagascar, along with being an active member of the animation community in India. At TEDxPICT, Vivek talks about why and how our ancient mythological stories are still relevant in today’s times. "Society defines stories and these stories define the society." Vivek believes that stories must be reinterpreted as the perspectives of the society change along with time.</p>
             
             </Col>
             <Col data-aos="fade-left"lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={VivekRam} alt=""/>
             </Col>
             
         </Row>
         <hr></hr>
         
         <Row >
            <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Perf} alt=""/>
             </Col>
            <Col data-aos="fade-left" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Performance | Nida Siddiqui & Derric D’Souza</font></p>
             <h3 className={styles.adj}>Witty | Original | Charismatic </h3>
             <p className={styles.paragraph}>After leading the live music scene in Pune for the past six years, Derric D'Souza entered the indie landscape. Around the same time, a budding songwriter Nida Siddiqui began performing her originals at open mics with just her ukulele. The two struck a chord and began composing music together. They wrote their first collaborative song 'Butterflies' which came out in late October 2020. At TEDxPICT, performing a medley of songs, they talk about their journey from church choirs and college hobbies to establishing their name in the Indie music community. </p>
            </Col>
             
         </Row>         <br></br>

         
       </Container>
        </Container>
         
        
    )
}
export default OurSpeakers2