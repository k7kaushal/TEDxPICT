import React ,{useEffect} from "react";
import Aos from "aos";
import styles from './ourspeakers.module.css'
import img from './speaker.jpg'
import Aditya from './Aditya.jpg'
import Vv from './Vv2.jpg'
import Simran from './Simran.jpg'
import Suresh from './Suresh.jpg'
import Prasan from './Prasan.jpg'
import Parag from './Parag.jpg'
import {Container, Row, Col} from 'react-bootstrap';
function OurSpeakers3() {
    useEffect(() => {
        Aos.init({duration:900, offset: 60, delay:500});
    }, []);
    return (
        <Container>
            <h2 data-aos="fade-up" className={styles.h21}>Our&nbsp;<font color="red">speakers</font></h2>
         <Container>
         <Row>
             <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Simran} alt=""/>
             </Col>
             <Col data-aos="fade-left" lg={8} md={12} sm={12}>
             <p  className={styles.name}><font color="red">Simran Suri</font></p>
             <h3 className={styles.adj}>Mercurial | Resourceful | Zealous</h3>
             <p className={styles.paragraph}>Simran Suri talks about how her grandfather saw opportunities in times of distress, and how she learned from him. Having an entrepreneurial instinct right from the start, Simran never let go of an opportunity she came across; even the ones disguised as problems. Getting internships right from the age of 17 to channelling her skills for the benefit of society, by volunteering at NGOs. By the time she turned 21, had founded a tech startup ‘Go for Chai’, and was working for a non-profit organization to bridge the gap between companies and laymen. </p>
             </Col>
         </Row>
         <br></br>

         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Mr. Prasan Qilfred</font></p>
             <h3 className={styles.adj}>Curious | Rational | Ingenious</h3>
             <p className={styles.paragraph}>"Wit beyond measure is man's greatest treasure." says Rowena Ravenclaw, a character renowned for her intelligence. Carrying her spirit, Mr. Prasan Wilfred talks about the importance of intelligence in today’s society. Mr. Wilfred’s definition of intelligence does not necessarily align with the one our education system believes in; he believes knowledge must be inculcated accompanied by fun and not as a punishment. Seeing the plight of kids in his town, he came up with a brilliant idea: teaching kids during their babysitting time by trained amateurs. Interestingly, rather than choosing teachers, he chose older students, as they were much more open to the concept of teaching in a fun way.  
             </p>
             </Col>
             <Col data-aos="fade-left" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Prasan} alt=""/>
             </Col>
             
         </Row>
         <hr></hr>
         <Row>
             <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Vv} alt=""/>
             </Col>
             <Col data-aos="fade-left" lg={8}  md={12} sm={12}>
             <p  className={styles.name}><font color="red">Virendra Valsangkar</font></p>
             <h3 className={styles.adj}>Passionate | Fearless | Artistic</h3>
             <p className={styles.paragraph}>In this talk, the speaker, Virendra Valsangkar, talks about his journey from changing career paths to fame as an acknowledged artist. Initially, a graduate in Civil Engineering but he realized that his job did not give him satisfaction and his interests lied in filmmaking. After much thought, he takes the brave decision of leaving his job and following his passion which made him understand more about life, various people, faith, religion, and tribal art. He talks about his inspirations and the people who motivated him to choose this path. Among them was Bhaskar Kulkarni, who introduced the world to “Warli Art”.</p>   
             </Col>
         </Row>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Parag Doodhiya</font></p>
             <h3 className={styles.adj}>Resolute | Optimistic | Self-Aware</h3>
             <p className={styles.paragraph}>From being diagnosed with a very serious Nephrotic Syndrome at the age of 14 to being able to run a full marathon now, the speaker: Parag Doodhiya narrates his heart-wrenching story, which makes one feel his pain. In 2012, he was diagnosed with this kidney disease resulting in abnormal fluid retention from the body. The treatment demanded intake of steroids which in turn led to various side effects like weight gain, acne problems among many others. Watch the entire talk to know his journey from eliminating self-consciousness and becoming a confident, fit, and motivational speaker.</p>   
             </Col>
             <Col data-aos="fade-left"lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Parag} alt=""/>
             </Col>
             
         </Row>
         <hr></hr>
         
         <Row >
            <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Suresh} alt=""/>
             </Col>
            <Col data-aos="fade-left" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Mr. Suresh Dol</font></p>
             <h3 className={styles.adj}>Confident | Dedicated | Adaptive</h3>
             <p className={styles.paragraph}>From losing his father at the age of 2 to becoming the owner of a 100 crore company DOL MOTORS PVT LTD, Mr. Dol narrates his inspiring journey in this talk. Adversities tend to be the most unpleasant phase in one's life. Mr. Dol highlights the importance of pushing through these trying times and becoming a better version of yourself. To quote Mr.Dol himself, “What is a failure, failure is only delayed success”. Mr. Dol is living proof that even if you are at rock bottom, your hardworking honest work will not go recognized and nothing can stop you from envisioning your success and turning it into a reality. </p>   
             </Col>
             
         </Row>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Aditya Veera</font></p>
             <h3 className={styles.adj}>Experimentalist | Practical | Melophile </h3>
             <p className={styles.paragraph}>The co-founder of the project Thayirsadam Blues, Aditya Veera graces the mic to speak about the events which led to the formation of this band. He was exposed to western music by his father at a young age and developed a love for the art form from his grandmother who was a music teacher. From dressing up as waiters and performing at a wedding in Lonavala, to having over 20 artists under their project, they have come a long way. Using the ‘My passion’ algorithm they have followed multiple passions of artists to create unique music and sounds. The talk ends with a live performance of their original songs in Tamil and English which is a pleasure to tune into.</p>
             </Col>
             <Col data-aos="fade-left" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Aditya} alt=""/>
             </Col>
         </Row>
         
       </Container>
        </Container>
         
        
    )
}
export default OurSpeakers3