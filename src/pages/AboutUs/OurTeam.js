import React ,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import './AboutUs.css';
import './AboutUs.css'
import Lic from  './components/Lic.jpg'
import CoLic from './components/Colic.jpg'
import Part1 from './components/Part1.jpg'
import Part2 from './components/Part2.jpg'
import Ops1 from './components/Ops1.jpg'
import Ops2 from './components/Ops2.jpg'
import Con1 from './components/Con1.jpg'
import Con2 from './components/Con2.jpg'
import Cur1 from './components/Cur1.jpg'
import Cur2 from './components/Cur2.jpg'
import Des1 from  './components/Des1.jpg'
import Des2 from  './components/Des2.jpg'
import Des3 from  './components/Des3.jpg'
import Brand1 from  './components/Brand1.jpeg'
import Brand2 from  './components/Brand2.PNG'

import { FaInstagram, FaLinkedin} from "react-icons/fa";
import Card from './Card.jsx'
import Card2 from './Cards2.jsx'
import { Container, Col, Row, Button, CardGroup } from "react-bootstrap";
import styles from './ourteam.module.css'

function OurTeam() {
  useEffect(() => {
        Aos.init({duration:1000});
    }, []);
    return (
        <>  
        <div  className={styles.contak}>
           
              <h2 data-aos="fade-up" className={styles.h22}>Meet the&nbsp;<font color="red">Team</font></h2>
            <div className="row">
              <CardGroup data-aos="flip-right" className={styles.heads}>  
              <div className="col-lg-4 col-0"></div>
                <div className="col-lg-2 col-4"><Card img={Lic}  name="Kaushik Shroff" post="Licensee"  insta="https://www.instagram.com/kns3092/" linkd="https://www.linkedin.com/in/kaushik-shroff-51a09a21b"/></div>
                <div className="col-lg-2 col-4"><Card img={CoLic}  name="Yash Desai" post="Co-Licensee" insta="https://www.instagram.com/yash.d3/" linkd="https://www.linkedin.com/in/yash-desai3-i46879/" /></div>
                <div className="col-lg-4 col-0"></div>

                </CardGroup></div>
                <CardGroup data-aos="flip-left" className={styles.heads}>
                <div className="col-lg-1  col-0"></div>
                <div className="col-lg-2 col-5 " ><Card img={Con1} name="Soham Ravindran" post="Content Head" insta="https://www.instagram.com/soham_ravindran/" linkd="https://www.linkedin.com/in/soham-ravindran-177689193/"/></div>
                <div className="col-lg-2 col-7"><Card img={Con2} name="Smita Naik" post="Content Head" insta="https://www.instagram.com/smitaa._/" linkd="https://www.linkedin.com/in/smita-naik-3ba133206/"/></div>
                <div className="col-lg-2 col-5"><Card img={Part2} name="Parag Kulkarni" post="Partnerships & Technical Head" insta="https://www.instagram.com/parag_k_127/" linkd="https://www.linkedin.com/in/parag-kulkarni-9547341b9/"/></div>
                <div className="col-lg-2 col-7"><Card img={Part1} name="Aarushi Wagh" post="Partnerships Head" insta="https://www.instagram.com/aarrushhiii/" linkd="https://www.linkedin.com/in/aarushi-wagh-aa145b213/"/></div>
                
                <div className="col-lg-2 col-5"><Card img={Ops1} name="Mitul Shah" post="Operations Head" insta="https://www.instagram.com/kirtii.i/" linkd="https://www.linkedin.com/in/kirti-palve"/></div>
                <div className="col-lg-1 col-0"></div>
                <div className="col-lg-1 col-0"></div>
                <div className="col-lg-2 col-7"><Card img={Ops2} name="Anushka Mane" post="Operations Head" insta="https://www.instagram.com/anushkamane_/" linkd="https://www.linkedin.com/in/anushka-mane-20837321b/"/></div>
                <div className="col-lg-2 col -5"><Card img={Cur2} name="Gargi Mhaskar" post="Curations Head" insta="https://www.instagram.com/gargimhaskar/" linkd="https://www.linkedin.com/in/gargi-mhaskar-097469208" /></div>
                <div className="col-lg-2 col-7"><Card img={Cur1} name="Manas Jadhav" post="Curations Head" insta="https://www.instagram.com/manas.jj/" linkd="https://www.linkedin.com/in/manas-jadhav-357607206/"/></div>
                <div className="col-lg-2 col-5"><Card img={Brand1}name="Nidhi Bivalkar" post="Branding Head" insta="https://www.instagram.com/nidhibivalkar/" linkd="https://www.linkedin.com/in/nidhi-bivalkar-8281a2215/" /></div>
                <div className="col-lg-2 col-7"><Card img={Brand2} name="Ameya Dhake" post="Branding Head" insta="https://www.instagram.com/___ameya___/" linkd="https://www.linkedin.com/in/ameya-dhake-a69b2b218" /></div>
                <div className="col-lg-1 col-0"></div>
                <div className="col-lg-3 col-0"></div>
               <div className="col-lg-2 col-5"><Card img={Des3} name="Kaushal Kulkarni" post="Design & Technical Head" insta="https://www.instagram.com/k7_kaushal_/" linkd="https://www.linkedin.com/in/kaushal-kulkarni-461a03212" /></div>
               <div className="col-lg-2 col-7"><Card img={Des1} name="Arsh Patne" post="Design Head" insta="https://www.instagram.com/brainfry.png/" linkd="https://www.linkedin.com/in/arsh-patne-2148b6205/" /></div>
               <div className="col-lg-2 col-5"><Card img={Des2} name="Giaa Poddar" post="Design Head" insta="https://www.instagram.com/giaa_poddar_/" linkd="https://www.linkedin.com/in/giaa-poddar-116b48207" /></div>
               <div className="col-lg-3 col-0"></div>
                </CardGroup>
{/* 
                <CardGroup data-aos="flip-right"className={styles.heads}>
                

                </CardGroup>
                <div className="row">

               <CardGroup data-aos="flip-left" className={styles.heads}>
               

               </CardGroup></div> */}
              
              {/*----------------------------------------------------------------*/}
               {/* <CardGroup data-aos="flip-right" >  

              <Card img={Con1} name="Soham Ravindran" post="Content Head" insta="https://www.instagram.com/shlokkalekar/" linkd="https://www.linkedin.com/in/shlok-kalekar-51496b213/"/>
                <Card2 img={Lic}  name="Kaushik Shroff" post="Licensee"  insta="https://www.instagram.com/kns3092/" linkd="https://www.linkedin.com/in/kaushik-shroff-51a09a21b"/>
                <Card2 img={CoLic}  name="Yash Desai" post="Co-Licensee" insta="https://www.instagram.com/yash.d3/" linkd="https://www.linkedin.com/in/yash-desai3-i46879/" />
                <Card img={Con2} name="Smita Naik" post="Content Head" insta="https://www.instagram.com/shlokkalekar/" linkd="https://www.linkedin.com/in/shlok-kalekar-51496b213/"/>
                
              </CardGroup>
                
                <CardGroup data-aos="flip-left" className={styles.heads}>
                <Card img={Part1} name="Aarushi Wagh" post="Partnerships Head" insta="https://www.instagram.com/kirtii.i/" linkd="https://www.linkedin.com/in/kirti-palve"/>
                <Card img={Part2} name="Parag Kulkarni" post="Partnerships & Technical Head" insta="https://www.instagram.com/kirtii.i/" linkd="https://www.linkedin.com/in/kirti-palve"/>
                <Card img={Ops1} name="Mitul Shah" post="Operations Head" insta="https://www.instagram.com/kirtii.i/" linkd="https://www.linkedin.com/in/kirti-palve"/>
                <Card img={Ops2} name="Anushka Mane" post="Operations Head" insta="https://www.instagram.com/kirtii.i/" linkd="https://www.linkedin.com/in/kirti-palve"/>
                </CardGroup>
              
                <CardGroup data-aos="flip-right"className={styles.heads}>
                <Card img={Cur2} name="Gargi Mhaskar" post="Curations Head" insta="https://www.instagram.com/baali_4/" linkd="https://www.linkedin.com/in/aashnakhater" />
                <Card img={Cur1} name="Manas Jadhav" post="Curations Head" insta="https://www.instagram.com/kelkar_anurag/" linkd="https://www.linkedin.com/in/anurag-kelkar-3470b51ab"/>
                <Card img={Brand1}name="Nidhi Bivalkar" post="Branding Head" insta="https://www.instagram.com/memon.sameer_/" linkd="https://www.linkedin.com/in/sameer-memon-0019ab1a9" />
                <Card img={Brand2} name="Ameya Dhake" post="Branding Head" insta="https://www.instagram.com/__maaaanasi_/" linkd="https://www.linkedin.com/in/manasi-ganu-194b431b9" />
                </CardGroup>

               

               <CardGroup data-aos="flip-left" className={styles.heads}>
               <Card img={Des3} name="Kaushal Kulkarni" post="Design & Technical Head" insta="https://www.instagram.com/bansi_vr/" linkd="https://www.linkedin.com/in/bansi-shelke-6282971b2" />
               <Card img={Des1} name="Arsh Patne" post="Design Head" insta="https://www.instagram.com/rohit_james12/" linkd="https://www.linkedin.com/in/rohit-james-6b93b4195/" />
               <Card img={Des2} name="Giaa Poddar" post="Design Head" insta="https://www.instagram.com/bansi_vr/" linkd="https://www.linkedin.com/in/bansi-shelke-6282971b2" />
               
               </CardGroup>  */}
          </div>
      </> 
    )
}

export default OurTeam;
