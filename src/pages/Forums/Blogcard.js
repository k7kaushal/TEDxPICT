import React ,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Card from './Card.jsx'
import { Container, Col, Row, Button, CardGroup } from "react-bootstrap";
import {BsArrowRight } from  "react-icons/bs";
import styles from './cards.module.css'
import Marcato from './Marcato.png'
import Poetry from './Poetry.png'
import Esports from './Esports.jpg'
import Olympics from './Olympics.png'
import VdGame from './VdGame.png'
import Takeover from './Takeover.png'
import Mcing from './Mcing.png'
function Blogcard() {
  useEffect(() => {
        Aos.init({duration:1000});
    }, []);
    return (
        <>  
        <div data-aos="fade-up" className="contq">
           
             
              
             <CardGroup className={styles.currblogcard} data-aos="flip-left">
             <Card date="January 26,2022" blogimg={Marcato} name="MARCATO" content="The wait is finally over! We are thrilled to announce that the theme for TEDxPICT 2022 is drum roll please Marcato! As Marvin Gaye once said,” Music is one of the closest link-ups with God that we can probably experience. It’s a common vibrating tone of the musical notes that holds all life together.” One of the many such notes is the Marcato- a note played louder than the surrounding music. This year TEDxPICT hopes to cherish and celebrate the Marcatos of life exploring the correspondences in music and life, the highs and lows and everything." link="https://blogs.tedxpict.com/marcato"/>
             </CardGroup>
               
            
              <CardGroup data-aos="flip-right" className={styles.blogcards}>  
              <Card date="June 3,2021" blogimg={Esports} name="Breaking the Stigma: Sports and eSports" content="‘Esports’- an extremely competitive and fast-growing international phenomenon with millions of fans and billions of dollars up for grabs. Yet there seems to be a conjecture when it comes to accepting eSports as a modern counterpart to traditional sports. Screaming announcers, cheering crowds, moments that viewers will never forget are reasons we love and watch both sports and eSports. Only by exploring the commonality between the two can we harness their true potential. It’s time we broke the underlying stigma around eSports, both as an industry and an experience!" link="https://blogs.tedxpict.com/breaking-the-stigma-sports-and-esports"/>
              <Card date="March 2,2021" blogimg={Olympics} name="Olympics:A Cure for Modern Civilization" content="Every four years since 1896 the world has gathered together to follow every moment of the Olympics. The games are heavily influenced by our societal norms but how much do they reflect back? Humanity has been and is plagued with several issues that impede our progress. So, in this article, we delve into how the Olympics could just heal the deep wounds that haunt our world. The Olympics have never just been about physical activity; rivalries, sportsmanship, representation and making statements have always been an integral part of them. Therefore, it is time we start looking at the Olympics as a cure for modern civilization!" link="https://blogs.tedxpict.com/olympics-a-cure-for-modern-civilization"/>
               <Card   date="June 3,2021" blogimg={Poetry} name="Poetry is Dead" content="Poetry. Always sort of a mystique. Having been around for aeons, poetry has moved people, igniting a spark of feelings throughout. The poetry-loathing friend is not convinced. But the poetry-loving friend explains the fluidity, the essence, the appeal of poetry. Human ethos is universal, and so is the need to express it. In various forms, in various minds poetry exists and remains resolute. There is no obligation of how it should be; it can be however we want it to be. After all, it stems from the heart and sings a myriad of emotions, heard differently by all. And now, it is more alive than ever." link="https://blogs.tedxpict.com/poetry-is-dead"/>
                <Card  date="March 2,2021" blogimg={Mcing} name="The Art of MCing" content="In the music industry, there is a general notion that has been conceived regarding songs in which rhythm can only be created using the instrument and their notes. Hip-Hop as a genre has always been about the voice of the people and the streets. What’s unique about this art form is the ability of MCs to use the musicality of rhymes and words to create a vibe. This article delves into the minds of some of the greatest artists rap has experienced and analysed their timeless verses down to the last syllable. " link="https://blogs.tedxpict.com/the-art-of-mcing"/>
                <Card  date="March 2,2021" blogimg={VdGame} name="Arts,Identity and Video Games" content="The principle of true art is not to portray but to evoke. Art is not an imitation but rather a reflection of human life, its struggling, its strife, its pain, and its pleasure, it portrays both the individualistic and the collective identity. Art is free from the conformities of form, medium, and freedom itself, anything and everything is art. The artform could be traditional or unconventional, but most importantly, something that moves you. This article recounts the experience of a gamer, and how he found art through video games." link="https://blogs.tedxpict.com/arts-identity-and-video-games"/>
                <Card  date="March 2,2021" blogimg={Takeover} name="The Takeover: Indie is the Way Forward" content="Our lives are encompassed by these collections of rhythms and melodies known as music. But till what point do we really know behind the creation of our favourite songs and albums. The music industry is a constant battle between the artist and the record label. Labels have been infamous for brokering unethical deals to a point that artists sacrifice their quality for sales. This article shows how the internet era with the medium of free-sharing has seen an increase in freedom for the independent musician to express true art without conforming to the tyranny of labels." link="https://blogs.tedxpict.com/the-takeover-indie-is-the-way-forward"/>
                </CardGroup>
        
                
                </div>
                <p>
                <a href="https://blogs.tedxpict.com/" target="_blank" style={{ color: "red" , textAlign: "center"}}><button className={styles.blogs_button}>Check Our Blogs<BsArrowRight size="2rem"/></button></a>
                </p>
                
      </> 
    )
}

export default Blogcard;
