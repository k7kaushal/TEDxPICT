import './PastEvents.css'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Rectangle11 from './Rectangle11.png'

const PastEvents = () => {
    return (
        <div className="container container-pasteditions">
            <div className="full-view">
                <div className="container-xs">
                    <ul class="nav nav-tabs nav-1">
                        <li class="nav-item nav-item-1" data-toggle="tab" data-target="#TheMirror">
                            <a class="nav-link active active-1 nav-link-1" data-toggle="tab" href="#TheMirror">The Mirror of Erised</a>
                        </li>
                        <li class="nav-item nav-item-1" data-toggle="tab" data-target="#TheMirror">
                            <a class="nav-link nav-link-1" data-toggle="tab" href="#Safarnama">Safarnama</a>
                        </li>
                        <li class="nav-item nav-item-1">
                            <a class="nav-link nav-link-1" data-bs-toggle="tab" href="#Ikigai">Ikigai</a>
                        </li>
                        <li class="nav-item nav-item-1">
                            <a class="nav-link nav-link-1" data-bs-toggle="tab" href="#LifeIn">Life in Technicolor</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div className="tab-pane " id="TheMirror">
                        <div className="top-image" style={{ height: "380px" }}>
                            <img className="top-image-1" src={Rectangle11} />
                        </div>
                        <div className="tab-content-bottom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="tab-pane" id="Safarnama">
                        <div className="top-image">
                            <img src={Rectangle11.png} />
                        </div>
                        <div className="tab-content-bottom">
                            SAFARNAMA Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="tab-pane" id="Ikigai">
                        <div className="top-image">
                            <img src={Rectangle11.png} />
                        </div>
                        <div className="tab-content-bottom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="tab-pane" id="LifeIn">
                        <div className="top-image">
                            <img src={Rectangle11.png} />
                        </div>
                        <div className="tab-content-bottom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={Rectangle11} alt="First slide" />
                        <div className="tab-content-bottom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={Rectangle11} alt="Second slide" />
                        <div className="tab-content-bottom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={Rectangle11} alt="Third slide" />
                        <div className="tab-content-bottom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">-</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">+</span>
                </a>
            </div>
        </div>
    )
}

export default PastEvents
