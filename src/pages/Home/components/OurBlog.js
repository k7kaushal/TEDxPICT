import './OurBlog.css'
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import vector10 from './Vector10.png'
import Vector9 from './Vector9.png'
import Rectangle209 from './Rectangle209.jpeg'
import Rectangle2091 from './Rectangle2091.jpeg'
import Rectangle2092 from './VdGame.png'


const OurBlog = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="space-betn">
            <br></br><div className="myText-cards title-horizontal-line" style={{ textAlign: "center" }} >Our <font style={{ fontWeight: 'bold', color: "red" }}>Blog</font></div><br></br>
            <div className="container mt-4">
                <div className="grid">
                    <div className="row">
                        <div data-aos="slide-right" className="col-lg-4 col-md-12  read-our-blog">
                            <span className="imgvectors"><img className="vector10" src={vector10} alt="" /></span><span> </span><span><img className="vector9" src={Vector9} alt="" /></span>
                            <div style={{}}>
                                {/* <span className="myText" style={{ color: "black" }}>Read exclusive articles from our</span>
                                <span className="myText" style={{ color: "red" }}> blog -</span> */}
                            </div>
                            <h1 className="rob-text" font style={{ color: "black", textAlign: "left" }}>Read exclusive articles from our <font style={{ color: "red" }}>blog-</font></h1>
                            <span className="my-card-text myct1" style={{ textAlign: "left" }}>Our blogs offer insight into topics that make you think, leave you spellbound and cause growth.</span><br></br><br></br>
                            <button type="button" className="my-btn" ><h2 className="my-btn-text" ><a href="https://blogs.tedxpict.com/" style={{textDecoration:"none",color:"white"}} target="_blank">Check Our Blog →</a></h2></button>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-lg-7 col-md-12 side-section-ourBlog">
                            <div className="grid">
                                <div className="col">
                                    <div className="row side-section-ourBlog-box">
                                        <div data-aos="slide-left" className="card">
                                            <div className='card-body blog-card'>
                                                <div className="grid">
                                                    <div className="row">
                                                        <div className="col-md-3 col-3">
                                                            <img className="blog-img" src={Rectangle209} alt="" />
                                                        </div>
                                                        <div className="col">
                                                            <h3 style={{}} className="para-text">Chai -</h3>
                                                            <span style={{}} className="my-card-text">The second I met him, I knew I was damned. But still, I couldn’t resist. I melted into his chocolate brown eyes, the hopeless lump …</span>
                                                        </div>
                                                        {/* <div className="col col-md-2">
                                                            <a href="#" className="btn blog-btn"></a>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><br></br>
                                    <div className="row side-section-ourBlog-box">
                                        <div data-aos="slide-left" className="card w-100 ">
                                            <div className="card-body blog-card">
                                                <div className="">
                                                    <div className="row">
                                                        <div className="col-md-3 col-3">
                                                            <img className="blog-img" src={Rectangle2091} alt="" />
                                                        </div>
                                                        <div className="col">
                                                            <h3 style={{ textAlign: "left" }} className="para-text">Dark Humour -</h3>
                                                            <span style={{ textAlign: "left" }} className="my-card-text">I was digging in our garden when I found a chest full of gold coins. I was about to run straight home to tell my wife about it, but then I remembered why I was digging in our garden.</span>
                                                        </div>
                                                        {/* <div className="col col-md-2">
                                                            <a href="#" className="btn blog-btn"></a>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><br></br>
                                    <div className="row side-section-ourBlog-box">
                                        <div data-aos="slide-left" className="card w-100 ">
                                            <div className="card-body blog-card">
                                                <div className="">
                                                    <div className="row">
                                                        <div className="col-md-3 col-3">
                                                            <img className="blog-img" src={Rectangle2092} alt="" />
                                                        </div>
                                                        <div className="col">
                                                            <h3 style={{ textAlign: "left" }} className="para-text">Video game -</h3>
                                                            <span style={{ textAlign: "left" }} className="my-card-text">Art. The expression of human creativity. A mark our species has put on the world. It seems that art is eternal with so many works …</span>
                                                        </div>
                                                        {/* <div className="col-2 col-md-2">
                                                            <a href="#" className="btn blog-btn"></a>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>
        </div>
    )
}

export default OurBlog
