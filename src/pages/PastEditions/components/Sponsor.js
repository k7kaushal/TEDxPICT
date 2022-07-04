import './Sponsor.css';
import "bootstrap/dist/css/bootstrap.min.css";
import circle from './circle.png'

const Sponsor = () => {
    return (
        <>
            <h2 data-aos="fade-up" className="h21">Our&nbsp;<font color="red">Sponsors</font></h2>
            <div className="hr-sect text-heading myCustomHeading"style={{ textAlign: "center" }}>
                     
                        
            </div>
            <div className="container my-5">
                <div className="row grid-layout">
                    <div className="col-sm col-sm-no-style" >
                        <div className="card card-no-style"style={{alignItems:"center",textAlign:"center"}}>
                            <img className="card-img-top1" src={circle} alt="Milestone" />
                            <div className="card-body">
                                <h3 className="card-title text-center"  style={{right:"5%"}}>Card title</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-sm-no-style ">
                        <div className="card card-no-style" style={{alignItems:"center",textAlign:"center"}} >
                            <img className="card-img-top1" src={circle} alt="Milestone" />
                            <div className="card-body">
                                <h3 className="card-title text-center"  style={{right:"5%"}}>Card title</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-sm-no-style">
                        <div className="card card-no-style" style={{alignItems:"center",textAlign:"center"}} >
                            <img className="card-img-top1" src={circle} alt="Milestone" />
                            <div className="card-body">
                                <h3 className="card-title text-center" style={{right:"3%"}}>Card title</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sponsor;
