import "bootstrap/dist/css/bootstrap.min.css";
import './Startpg.css'
import startImg from './Rectangle11.png'

const Startpg = () => {
    return (
        <div className="container-2 mt-4">
            <div className="card bg-dark text-white">

                <img className="card"
                    src={startImg} alt="..." />
                <div className="card-img-overlay">

                    <h4 className="card-title welcome">Welcome to TEDxPICT</h4>
                    <h1 className="card-title welcome-text" >EXPLORE.</h1>
                </div>
            </div>
        </div>
    )
}

export default Startpg
