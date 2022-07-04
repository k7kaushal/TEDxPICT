import React from 'react'
import Rectangle206 from './Rectangle206.png'
import './Part1.css'

const Part1 = () => {
    return (
        <div className="container-contact-us">
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col-lg-8 col-md-7 col-part1">
                            <div className="part1-text">
                                <div className="part1-heading">Let’s Get In <font style={{color:"red"}}>Touch →</font></div>
                                <div className="part1-subtext">Want to know more about our projects and events? Here’s how you can reach out to us.</div>
                                <div className="btn btn-danger part1-btn"><a href="mailto:communication@tedxpict.com" style={{textDecoration:"none",color:"white"}} target="_blank">Drop a message</a></div><script src="//embed.typeform.com/next/embed.js"></script>
                                {/* <button data-tf-slider="SQxobKjq" data-tf-width="550" style={{all:"unset" ; font-family:"Helvetica,Arial,sans-serif";display:"inline-block";max-width:"100%";white-space:"nowrap";overflow:"hidden";text-overflow:"ellipsis";background-color:"#DF0C10";color:"#FFFFFF";font-size:"20px";border-radius:"7px";padding:"0 33px";font-weight:"bold";height:'50px';cursor:'pointer';line-height:'50px';text-align:'center';margin:'0';text-decoration:'none'}}>Drop a message</button><script src="//embed.typeform.com/next/embed.js"></script> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-xs-1">
                            <div className="part1-img-container">
                                <img className="part1-img" src={Rectangle206} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Part1
