import React ,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import "./Part1.css"
import "./Part2.css"

const Part2 = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="container-contact-us">
            <div className="part2-box-1" data-aos="slide-right">
                <div className="part2-box-1-heading">Want to be a <font style={{ color: "red" }}>partner?</font></div>
                <div className="part2-box-1-smalltext smalltext-upper">Partner with us and be a part of a community brimming with innovation and ideas.</div>
                <pre className="part2-box-1-smalltext">
                    <font style={{ color: "red" }}>Reach out to us:</font><br></br>
                    partnerships@tedxpict.com<br></br>
                  
                </pre>
            </div>
            <div className="part2-box-2" data-aos="slide-left">
                <div className="part2-box-1-heading">Want to be a <font style={{ color: "red" }}>speaker?</font></div>
                <div className="part2-box-1-smalltext smalltext-upper">Partner with us and be a part of a community brimming with innovation and ideas.</div>
                <pre className="part2-box-1-smalltext">
                    <font style={{ color: "red" }}>Reach out to us:</font><br></br>
                    curations@tedxpict.com<br></br>
                </pre>
            </div>

        </div>
    )
}

export default Part2
