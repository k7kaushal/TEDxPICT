import React ,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import './AboutUs.css';
import img2 from './Ted.png';
import img3 from './Ted1.jpg';
import img4 from './TEDxPICT.jpeg';
import styles from './styles.module.css';
import {GiRoundStar} from "react-icons/gi";



function Info() {
    useEffect(() => {
        Aos.init({duration:900, offset: 60, delay:500});
    }, []);
    return (
        <div className={styles.container1}>
         <div className={styles.container1}>
         <div className="row flex-column-reverse flex-lg-row">
         <div data-aos="fade-right" className="col-lg-6 col-md-12 col-sm-12 " >
             <p  className={styles.Questions1}>What is <font color="red">TED?</font></p>
             <p className={styles.paragraph}>TED is a nonpartisan nonprofit devoted to spreading ideas, usually in the form of short, powerful talks. TED began in 1984 as a conference where Technology, Entertainment, and Design converged, and today covers almost all topics — from science to business to global issues — in more than 110 languages. Meanwhile, independently run TEDx events help share ideas in communities around the world.</p>   
            </div>
            <div data-aos="fade-left" className="col-lg-6 col-md-12 col-sm-12 ">
            <img className={styles.Image2} src={img2} alt=""/>
            </div>
         </div>
        
        </div>
        <div className={styles.container1}>
        <div className="row">
        <div data-aos="fade-right" className="col-lg-6 col-md-12 col-sm-12 " styles={{alignItems:"center"},{textAlign:'center'}}>
            <img className={styles.Image3} src={img3} alt=""/>
            </div>
            <div data-aos="fade-left" className="col-lg-6 col-md-12 col-sm-12 ">
             <p className={styles.Questions2}>What is <font color="red">TEDx?</font></p>
             <p className={styles.paragraph}> In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks videos and live speakers unite to spark a deep discussion and connection amongst individuals. These local, self-organized events are branded as TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations).
</p>   
            </div>
        </div>
        </div>
        <div className={styles.container1}>
        <div className="row no-gutters flex-column-reverse flex-lg-row">
        <div data-aos="fade-right" className="col-lg-6 col-md-12 col-sm-12 ">
             <p className={styles.Questions3}>Community<font color="red"> @TEDxPICT</font></p>
             <p className={styles.paragraph}>     We at TEDxPICT encourage as well as promote deep conversations about various ideas and narratives. Discovering and discussing various issues, bringing forth extraordinary notions in the best way possible, representing the macroscopic view of the community, and spreading unmatched enthusiasm and inspiration is what we’re known for.
</p>   
            </div>
            <div data-aos="fade-left" className="col-lg-6 col-md-12 col-sm-12 "styles={{alignItems:"center"},{textAlign:'center'}}>
            <img className={styles.Image2} src={img4} alt=""/>
            </div>
        </div>
        </div>
        <div className={styles.container1}>
        <h2 data-aos="fade-up" className={styles.h21}>The&nbsp;<font color="red">values</font>&nbsp;we live for</h2>
    
    <div className="row no-gutters" >
    <div  className="col-lg-1 col-md-0 col-sm-0 ">
    <ul data-aos="fade-up" className={styles.star} >
    <li ><GiRoundStar color="gold" size="3em" style={{height:"10em"}}/></li>
    </ul>
    </div>
    <div data-aos="fade-up" className="col-lg-5 col-md-12 col-sm-12 ">
        <h3 className={styles.h3}>Encouraging Spread of Ideas</h3>
        <p className={styles.p}>TEDxPICT encourages the spreading of numerous conventional as well as unconventional ideas and views for the betterment of society and promotes the same.
</p>
    </div>
     <div className="col-lg-1 col-md-0 col-sm-0 ">
    <ul data-aos="fade-up" className={styles.star}>
    <li ><GiRoundStar color="gold" size="3em" style={{height:"10em"}}/></li>
    </ul>
    </div>
    <div data-aos="fade-up" className="col-lg-5 col-md-12 col-sm-12 ">
        <h3 className={styles.h3}>Encouraging Unheard Voices</h3>
        <p className={styles.p}>The unheard voices, the unseen perspectives, the unrevealed stories, are all welcomed and encouraged here in TEDxPICT.</p>
    </div>
    </div>
    <div className="row">
     <div className="col-lg-1 col-md-0 col-sm-0 ">
    <ul data-aos="fade-up" className={styles.star}>
    <li><GiRoundStar color="gold" size="3em" style={{height:"10em"}}/></li>

    </ul>
    </div>
   <div  data-aos="fade-up" className="col-lg-5 col-md-12 col-sm-12 ">
        <h3 className={styles.h3}>Encouraging Innovation</h3>
        <p className={styles.p}>TEDxPICT believes in the power of innovation and thrives in encouraging innovation to inspire and bring about a lasting change in individuals.</p>
    </div>
    <div className="col-lg-1 col-md-0 col-sm-0 ">
    <ul data-aos="fade-up" className={styles.star}>
    <li ><GiRoundStar color="gold" size="3em" style={{height:"10em"}}/></li>
    </ul>
    </div>
    <div data-aos="fade-up" className="col-lg-5 col-md-12 col-sm-12 ">
        <h3 className={styles.h3}>Encouraging Change</h3>
        <p className={styles.p}>Undoubtedly, change is inevitable. We in TEDxPICT encourage not only the change, but also the motivation and the desire of making a change, that it brings along.</p>
    </div>
    </div>
        </div>
        
           
    
      
    
    </div>
        
    )
}

export default Info
