import './PreviousSponsors.css';
import "bootstrap/dist/css/bootstrap.min.css";
import circle from './p.jpg'
import m from './map1.jpg'
import g from './GG.png'
const PreviousSponsors = () => {
    return (
        <>
            <div className="hr-sect text-heading myCustomHeading"style={{ textAlign: "center", marginTop:"4vh" }}>
                     
                         <span className="" style={{ textAlign: "center", color: "black",lineHeight:"1rem",fontSize:"2.5rem" }}>Some of our previous&nbsp;</span>
                <span className="" style={{ textAlign: "center", color: "red",lineHeight:"1rem",fontSize:"2.5rem" }}> Sponsors</span>
            </div>
            <div className="container my-5">
                <div className="row grid-layout">
                    <div className="col-sm col-sm-no-style" >
                        <div className="card card-no-style"style={{alignItems:"center",textAlign:"center"}}>
                            <img className="card-img-top1" src={circle} alt="Milestone" />
                            <div className="card-body">
                                <h3 className="card-title text-center"  style={{right:"5%"}}>Persistent</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-sm-no-style ">
                        <div className="card card-no-style" style={{alignItems:"center",textAlign:"center"}} >
                            <img className="card-img-top1" src={m} alt="Milestone" />
                            <div className="card-body">
                                <h3 className="card-title text-center"  style={{right:"5%"}}>Mapro</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-sm-no-style">
                        <div className="card card-no-style" style={{alignItems:"center",textAlign:"center"}} >
                            <img className="card-img-top1" src={g} alt="Milestone" />
                            <div className="card-body">
                                <h3 className="card-title text-center" style={{right:"3%"}}>Gold's Gym</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PreviousSponsors;
