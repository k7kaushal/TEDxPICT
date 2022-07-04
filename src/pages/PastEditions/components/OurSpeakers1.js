import React ,{useEffect} from "react";
import Aos from "aos";
import styles from './ourspeakers.module.css'
import img from './speaker.jpg'
import Anagha from './Anagha.jpg';
import Kanishk from './Kanishk.jpg';
import Madhav from './Madhav.jpg';
import Madhavi from './Madhavi.jpg';
import Janhavi from './JanhaviJ.jpg';
import Ritviz from './Ritviz2.png';
import SA from './SA.jpg';
import Suvinay from './Suvinay.jpg';
import {Container, Row, Col} from 'react-bootstrap';
function OurSpeakers1() {
    useEffect(() => {
        Aos.init({duration:900, offset: 60, delay:500});
    }, []);
    return (
        <Container>
            <h2 data-aos="fade-up" className={styles.h21}>Our&nbsp;<font color="red">speakers</font></h2>
         <Container>
         <Row>
             <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Kanishk} alt=""/>
             </Col>
             <Col data-aos="fade-left" lg={8} md={12} sm={12}>
             <p  className={styles.name}><font color="red">Kanishk Seth</font></p>
             <h3 className={styles.adj}>Creative | Zealous | Versatile</h3>
             <p className={styles.paragraph}>Music is eternal and its capacity to mature is endless. Kanishk Seth shows us his music and the inspiration behind his work. A 20-year-old music producer working with Sufi and trance music, Kanishk has released 2 albums to date. Having a family background in music, he started early with the Hindustani classical violin. As a result, Kanishk took his musical experience to a different level from a very early age. When he started working along with his mother to make music, he was just 14 years old. He now wants to produce good quality music, and share his source of inspiration with the world.</p>   
             </Col>
         </Row>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Dr. Madhav Mutalik</font></p>
             <h3 className={styles.adj}>Insightful | Unconventional | Nurturing</h3>
             <p className={styles.paragraph}>Dr. Madhav Mutalik is an MBBS, MD Pharmacology, and MBA with a teaching experience of 30 years. He loves creating innovative teaching methods and is passionate about his work, which makes him a favorite amongst students. At TEDxPICT he will be sharing his experience, research, and perceptions on various teaching-learning methods and the possibilities of exploring the unexplored capabilities of students. His out-of-the-box ideas are reflected in this talk where he puts forth an untraditional teaching approach based on visual ability and reasoning.</p>   
             </Col>
             <Col data-aos="fade-left" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Madhav} alt=""/>
             </Col>
             
         </Row>
         <hr></hr>
         <Row>
             <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={SA} alt=""/>
             </Col>
             <Col data-aos="fade-left" lg={8}  md={12} sm={12}>
             <p  className={styles.name}><font color="red">Sendhilkumar Alalasundaram</font></p>
             <h3 className={styles.adj}>Innovative | Perseverant | Resolute</h3>
             <p className={styles.paragraph}>Sendhilkumar Alalasundaram, a bright young mind, worked as the Onboard Computer Subsystem Lead on the SWAYAM satellite project, which was launched by ISRO in June 2016. At TEDxPICT, Sendhil will give his take on the journey of the project. He will describe how different undergraduate students worked towards building a picosatellite for eight years, eight long years which saw over 170 students brainstorming on this project and putting in their unwavering efforts in it. His story teaches us to follow our heart’s innermost desires, even if it means embarking on a path fraught with challenges and uncertainty. </p>   
             </Col>
         </Row>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Anagha Paranjape-Purohit</font></p>
             <h3 className={styles.adj}>Proactive | Persistent | Visionary </h3>
             <p className={styles.paragraph}>An active architect, environment planner, Anagha Paranjape-Purohit is a leading figure in local urban policy action for developing better urban plans and infrastructure. She has been one of the leaders in the Pune citizens’ movement against the Development Plan for the city. In her talk, she breaks down the various factors which influence the urbanization of cities.  She  addresses the various problems that our cities face due to the lack of accountability of our leaders and also proposes a serious paradigm shift in the way we govern our cities.</p>   
             </Col>
             <Col data-aos="fade-left"lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Anagha} alt=""/>
             </Col>
             
         </Row>
         <hr></hr>
         
         <Row >
            <Col data-aos="fade-left" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Janhavi} alt=""/>
             </Col>
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Janhavi Joshi</font></p>
             <h3 className={styles.adj}>Determined | Perceptive | Industrious</h3>
             <p className={styles.paragraph}>Janhavi Joshi is a product/industrial designer as well as the co-founder of a startup named 'Bleetech Innovations Pvt. Ltd'. Her innovation, "Blee", is a device that helps people with a hearing disability to dance in synchronization with the music by converting the audio to vibrations. Blee won the Gandhian Young Technological Innovation Award, which was held at the President's house in New Delhi. Aiming to provide a different experience to individuals with disabilities, Janhavi hopes to share her ideas with the world and inspire us towards something different.</p>   
             </Col>
             
         </Row>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Dr. Suvinay Damle</font></p>
             <h3 className={styles.adj}>Diligent | Ingenious | Persevering</h3>
             <p className={styles.paragraph}>Dr. Suvinay Damle is an Ayurvedic doctor who runs a clinic in a village in Kudal, near Sindhudurg which functions on the barter system model for the patients who can't afford to pay in cash. He has received in exchange for his treatment things starting right from brooms, to utensils to sacks of rice/wheat in return and not to forget a countless number of blessings. After experiencing the barter system and having seen its effects on the people of today, Dr. Damle can tell us about how it can still affect the economy in general.</p>   
             </Col>
             <Col data-aos="fade-left" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Suvinay} alt=""/>
             </Col>
         </Row>
         <hr></hr>
         <Row>
         <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} style={{height:'15rem'}} src={Ritviz} alt=""/>
             </Col>
             
         <Col data-aos="fade-left" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Ritviz Srivastava</font></p>
             <h3 className={styles.adj}>Diligent | Ingenious | Persevering</h3>
             <p className={styles.paragraph}>Ritviz Srivastava, an upcoming music producer talks about his journey into the music industry. He shares his experience in pursuing his dreams and tapping into the unknown.
            He gives his opinion on music and today's arts and also gives us a demo of his first-ever music composition towards the end.
            </p>   
             </Col>
             
         </Row>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Madhavi Jadhav</font></p>
             <h3 className={styles.adj}>Reformer | Catalyst | Upbeat</h3>
             <p className={styles.paragraph}>Madhavi Jadhav, the founder of Thatmate.com talks about the taboo lurking around sex education in India. Even in the 21st century, people hesitate in articulating their voice and opinion on sex. Madhavi shares her perspective on how we can break this taboo and just how important sex education is.
                Madhavi Jadhav(CEO of Thatmate.com) aims at changing how millions of young adults and children view sex education and is determined to make a change in our society.</p>   
             </Col>
             <Col data-aos="fade-left" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={Madhavi} alt=""/>
             <p>



                 
             </p>
             </Col>
         </Row>
        
         
         
         </Container>
        </Container>
         
        
    )
}
export default OurSpeakers1