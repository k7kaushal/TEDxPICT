import React  ,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Col, Row, Button, CardGroup } from "react-bootstrap";

import Kaushal from '../AboutUs/components/Des3.jpg'
import Smeet from '../AboutUs/components/Smeet.jpeg'
import Rohit from '../AboutUs/components/Rohit.jpeg'
import Parag from './Parag.jpeg'
import Devansh from '../AboutUs/components/Devansh.jpeg'
import Bhavika from './Bhavika.jpeg'
import Tanvi from './Tanvi.jpeg'
import './WebTeam.css';

import Card from './Card.jsx'


function WebTeam() {
  useEffect(() => {
    Aos.init({duration:1000});
}, []);
  return (
    <>  
      <div className="contq">
   
            <h1>Meet the brains behind this website.</h1>
            <h6>It took us sleepless nights and a ton of caffeine to make what you’d love.</h6>
        
          
            <h4>Licensee</h4>
            <CardGroup data-aos="flip-right">
           
              <Card webimg={Devansh} name="Devansh Mundada" post="Licensee"  insta="https://www.instagram.com/deevaaanssh/" linkd="https://www.linkedin.com/in/devansh-mundada" />
              
              <Card webimg={Smeet} name="Smeet Ramteke" post="Co-Licensee" insta="https://www.instagram.com/smeetramteke/" linkd="https://www.linkedin.com/in/smeet-ramteke" />
            </CardGroup>
      




        
            <h4>Designers</h4>
            <CardGroup data-aos="flip-left">
              <Card webimg={Tanvi} name="Tanvi Bhargaw" post="UX Designer" insta="https://www.instagram.com/taanviiii/" linkd="https://www.linkedin.com/in/tanvi-sb" />
              <Card webimg={Bhavika} name="Bhavika Chuttar" post="UX Designer" insta="https://www.instagram.com/whybhavikawhy_/" linkd="https://www.linkedin.com/in/bhavika-chuttar"  />
            </CardGroup>
        





      
            <h4>Development Heads</h4>
            <CardGroup data-aos="flip-right">
                
                <Card webimg={Rohit} name="Rohit James" post="Sr Developer"  insta="https://www.instagram.com/rohit_james12/" linkd="https://www.linkedin.com/in/rohit-james-6b93b4195/" />
                <Card webimg={Smeet} name="Smeet Ramteke" post="Sr Developer"  insta="https://www.instagram.com/smeetramteke/" linkd="https://www.linkedin.com/in/smeet-ramteke"/>
                
            </CardGroup>



    
            <h4>Development Team</h4>
            <CardGroup data-aos="flip-left">
                <Card webimg={Parag} name="Parag Kulkarni" post="Jr Developer" insta="https://www.instagram.com/parag_k_127/" linkd="https://www.linkedin.com/in/parag-kulkarni-9547341b9" />
                <Card webimg={Kaushal} name="Kaushal Kulkarni" post="Jr Developer"  insta="https://www.instagram.com/k7_kaushal_/" linkd="https://www.linkedin.com/in/kaushal-kulkarni-461a03212" />
               
              
            </CardGroup>
         




      
    </div>
    </> 
  );
}

export default WebTeam;
