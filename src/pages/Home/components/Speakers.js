import "bootstrap/dist/css/bootstrap.min.css";
import './Speakers.css'
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Rectangle33 from './Rectangle33.png'
import bmk from './bdk (2).png'
import Vvk from './Vivek.jpg'
import Rz from './Ritviz.jpeg'
const Speakers = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="space-betn">
            <div className="myText-cards title-horizontal-line" style={{ textAlign: "center" }} >Previous <font style={{fontWeight:'bold' ,color: 'red' }}>Speakers</font></div><br></br>
            <div className="container mt-4">
                <div className="grid">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 speaker-box">
                            <div data-aos="slide-right">
                                <img className="speaker-img-custom" src={Rz} alt="" /><h3></h3>
                                <div className="img-badge-text"><div className="img-badge-text-1">Ritwiz</div></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 speaker-box">
                            <div data-aos="fade">
                                <img className="speaker-img-custom" src={bmk} alt="" /><h3></h3>
                                <div className="img-badge-text"><div className="img-badge-text-1">Bindumadhav Khare</div></div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 speaker-box">
                            <div data-aos="slide-left">
                                <img className="speaker-img-custom" src={Vvk} alt="" /><h3></h3>
                                <div className="img-badge-text"><div className="img-badge-text-1">Vivek Ram</div></div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speakers
