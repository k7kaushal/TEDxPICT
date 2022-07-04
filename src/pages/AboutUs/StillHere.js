import React ,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import './AboutUs.css';
import styles from './StillHere.module.css';
import Slider from "./Slider";

function StillHere() {
     useEffect(() => {
        Aos.init({duration:900, offset: 60, delay:500});
    }, []);
    return (
        <div className={styles.containerr}>
        <div class="row" >
        <div data-aos="zoom-in-left" className="col-lg-6 col-md-12 col-sm-12 " style={{position:'relative', paddingTop:'2.5%'}}>
        <h2 className={styles.h2still}>Still <font color="red">here?</font></h2>
                <p className={styles.p}>Looks like you love our little team. Here are some fun memories that we’ve collected through the years ❤️.</p>
            </div>
            <div data-aos="zoom-in-right"  className="col-lg-6 col-md-12 col-sm-12 " >
           <Slider/>
            </div>
        </div>
        </div>
        
        
    )
}

export default StillHere;
