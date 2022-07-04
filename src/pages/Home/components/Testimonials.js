import './Testimonials.css'
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Group114 from './Group114.png'
import Ellipse12 from './Ellipse12.png'
import Carousel from "react-elastic-carousel";

const Testimonials = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 },
    ];
    return (
        <div className="space-betn">
            <div className="myText-cards title-horizontal-line" style={{ textAlign: "center" }} >Testimonials</div><br></br><br></br>
            <div className="container-fluid">
                <Carousel breakPoints={breakPoints}>
                    <div data-aos="slide-up" className="col-xl-4 col-md-12 coursel-adjust">
                        <div className="custom-card" >
                            <div className="row">
                                <div className="col-xl-2 col-lg-1"><span><img className="inverted-commas-img" src={Group114} /></span></div>
                                <div className="col testionial-text">
                                    <span className="card-text custom-text"><br></br>It was a very good learning experience! TEDx speakers are very successful in life and getting to understand the journey behind one's success is important in analyzing patterns to how I can also achieve my goals. </span></div>
                            </div><br></br>
                            {/* <div className="">
                                    <div className="row">
                                        <div className="col-5">
                                            <img className="custom-img" src={Ellipse12} alt="" />
                                        </div>
                                        <div className="col-7">
                                            <div className="img-title-name">Dr. SK Ingle</div>
                                            <div className="img-subtitle-name"><i>Professor, PICT</i></div>
                                        </div>
                                    </div>
                                </div> */}
                        </div>
                    </div>
                    <div data-aos="slide-up" className="col-xl-4 col-md-12 coursel-adjust">
                        <div className="custom-card">
                            <div className="row">
                                <div className="col-xl-2 col-lg-1"><span><img className="inverted-commas-img" src={Group114} /></span></div>
                                <div className="col testionial-text">
                                    <span className="card-text custom-text"><br></br>I got inspired by listening to various life experiences. The performance was great as well, the singers and the lyrics were awesome.</span></div>
                            </div><br></br>
                            {/* <div className="">
                                    <div className="row">
                                        <div className="col-5">
                                            <img className="custom-img" src={Ellipse12} alt="" />
                                        </div>
                                        <div className="col-7">
                                            <div className="img-title-name">Dr. SK Ingle</div>
                                            <div className="img-subtitle-name"><i>Professor, PICT</i></div>
                                        </div>
                                    </div>
                                </div> */}
                        </div>
                    </div>
                    <div data-aos="slide-up" className="col-xl-4 col-md-12 coursel-adjust">
                        <div className="custom-card">
                            <div className="row">
                                <div className="col-xl-2 col-lg-1"><span><img className="inverted-commas-img" src={Group114} /></span></div>
                                <div className="col testionial-text">
                                    <span className="card-text custom-text"><br></br>The event was beautifully organised amidst the difficult circumstances. The speakers were top-notch and I think it did justice to what TED represents.</span></div>
                            </div><br></br>
                            {/* <div className="">
                                    <div className="row">
                                        <div className="col-5">
                                            <img className="custom-img" src={Ellipse12} alt="" />
                                        </div>
                                        <div className="col-7">
                                            <div className="img-title-name">Dr. SK Ingle</div>
                                            <div className="img-subtitle-name"><i>Professor, PICT</i></div>
                                        </div>
                                    </div>
                                </div> */}
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonials
