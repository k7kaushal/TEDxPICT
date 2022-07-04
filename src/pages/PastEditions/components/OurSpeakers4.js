import React ,{useEffect} from "react";
import Aos from "aos";
import styles from './ourspeakers.module.css'
import img from './speaker.jpg'
import img1 from './HimaniChaukar2.jpg'
import img2 from './anuragkumarsingh4.jpg'
import img3 from './bindumahadevkhire3.jpg'
import img4 from './drmedha.jpg'
import img5 from './drshantanu2.jpg'
import img6 from './akashshah.jpg'
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
             <p  className={styles.name}><font color="red">Himani Chaukar</font></p>
             <h3 className={styles.adj}>Curious | Unconventional | Vigilant</h3>
             <p className={styles.paragraph}>Himani Chaukar is an enthusiastic teacher of Philosophy at Ruia College, Mumbai, and is a recipient of the Asiatic Society’s research fellowship for social sciences. At TEDxPICT, she takes us through her journey in Ziro and shows us what makes tribal culture special and important to the outside world. She gives us an insight into their culture, religious ideas, beliefs, and rituals. Their tribal religion, Donyipoloism, was very beautifully explained which gave us a better understanding of the thought process of the tribals of Ziro. </p>
             </Col>
         </Row>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Sujay Dahake</font></p>
             <h3 className={styles.adj}>Perspicacious | Expressive |  Observant</h3>
             <p className={styles.paragraph}>Driven by the need to make films, Sujay Dahake, director, filmmaker, and founder of Pune Film Company is a creative soul with a critical mind. Sujay’s constant endeavor of quenching his thirst for cinema and for sharing his knowledge and insights about the same, compels him to keep working. Cinema remains the gravity in his life that continues to inspire him to deliver the best.
            Cinema is a journey through time itself. He believes that creating cinema is creating history, making a beautiful painting of every moment in time. He brings to the TEDxPICT stage an analysis of how filmmakers and the media subtly use various shapes and color palettes to influence their audience without them even realizing it.</p>   
             </Col>
             <Col data-aos="fade-left" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img7} alt=""/>
             </Col>
             
         </Row>
         <hr></hr>
         <Row>
             <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img6} alt=""/>
             </Col>
             <Col data-aos="fade-left" lg={8}  md={12} sm={12}>
             <p  className={styles.name}><font color="red">Aakash Shah</font></p>
             <h3 className={styles.adj}>Passionate | Persevering | Inspirational</h3>
             <p className={styles.paragraph}>A 21- year old Human Rights Activist and the chairman of the Action for Pune Development, Aakash Shah shares his experiences and lessons as a youth activist. He is one of the very few youth advocates to have attended the official session of the 35th Human Rights Council in Geneva. In his talk, he describes his journey as a youngster and the challenges today’s youth faces for the future. In a very inspiring way, he explains how the youth plays a very crucial role in the development of society. Aakash includes several instances in his talk which focus on the role of the youth, thereby supporting his view that "Youth is the nation's blood and the architect of tomorrow's world".</p>   
             </Col>
         </Row>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Bindumadhav Khire</font></p>
             <h3 className={styles.adj}>Unfeigned | Unshackled | Enthralling</h3>
             <p className={styles.paragraph}>A Gay Rights Activist, founder of Sampathik Trust for LGBTI Rights, and the artist behind 8 books, 3 plays, and 2 short films – Bindumadhav Khire has been organizing Pune Annual LGBTI Pride Walks since 2011. 
                In his talk, he is candid about his journey to reconciling with himself and his identity and how he created a place for himself in this world. He helps us redefine our perception of “normal” and enlightens us about the bad hand that the LGBTQ+ community is dealt repeatedly. While discussing the shackles bounding the LQBTQ+ community, he asks a very crucial question: Are the “solutions” given to LGBTQ+ members about making their lives easier or making the rest of the world’s life more convenient?</p>   
             </Col>
             <Col data-aos="fade-left"lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img3} alt=""/>
             </Col>
             
         </Row>
         <hr></hr>
         
         <Row >
            <Col data-aos="fade-right" lg={4}  md={12} sm={12}>
             <img className={styles.Img} style={{height:"18rem"}} src={img4} alt=""/>
             </Col>
            <Col data-aos="fade-left" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Dr. Medha Tadpatrikar</font></p>
             <h3 className={styles.adj}>Innovative | Revolutionary | Determined</h3>
             <p className={styles.paragraph}>Dr. Medha Tadpatrikar, a serial entrepreneur is a Director of Mantraa Research & Consultants Pvt Ltd, Phoenix General Insurance Brokers Pvt Ltd, and Rudra Environmental Solutions (India) Ltd and Trustee of “Keshav Sita Memorial Foundation Trust”. At TEDxPICT, she shows us a fantastic innovation that allows us to "recover" plastic by converting it to fuel. By creating awareness of waste plastic and segregation at its source, Dr. Medha and her team have saved more than 250 metric tons of plastic. </p>   
             </Col>
             
         </Row>
         <hr></hr>
         <Row className="row flex-column-reverse flex-lg-row">
            <Col data-aos="fade-right" lg={8}  md={12} sm={12} >
             <p  className={styles.name}><font color="red">Dr. Shantanu Abhyankar</font></p>
             <h3 className={styles.adj}>Industrious | Critical | Rational</h3>
             <p className={styles.paragraph}>Dr. Shantanu Abhyankar, a recipient of the Dr.Anandibai Joshi Gaurav Puraskar,has completed 25 years in the fields of gynecology and obstetrics.
                    Did he secure admission in Homoeopathy only to revisit the rigorous journey of the 12th standard to get a seat in Allopathy?
                    In the talk at TEDxPICT, Dr. Shantanu Abhyankar explains his thoughts behind this decision and the outcomes, today from the view of an allopathic doctor.
                    The speaker dives into history to reveal interesting facts about who coined the word 'allopathy' and doesn't miss out on the 'why?'So be ready to witness a talk filled with shreds of evidence and some deep pondering thoughts over a rational approach towards medicine.</p>   
             </Col>
             <Col data-aos="fade-left" lg={4}  md={12} sm={12}>
             <img className={styles.Img} src={img5} alt=""/>
             </Col>
         </Row>
         <hr></hr>
         <Row>
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
         </Row>
       </Container>
        </Container>
         
        
    )
}
export default OurSpeakers4