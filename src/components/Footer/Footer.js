import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaFlickr, FaTwitter} from "react-icons/fa";
import Logo from "../../assets/Logo_Black.png";
import "./Footer.css";

function FooterTED() {
  return (
    <>
      <Container bsPrefix="cont">
        <div className="footer">
          <Row>
            <Col lg={4} xs={12}>
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "80%", marginLeft: "15px" }}
              />
              <ul>
                <li>
                  <p className="join">Join Our Newsletter</p>
                </li>
                <li>
                  Be the first to hear from us, you can unsubscribe our update
                  any time you want.
                </li>
              </ul>
            </Col>

            <Col lg={2} xs={6}>
              <ul className="explore">
                <li style={{ fontWeight: "700", marginBottom: "15px" }}>
                  Explore
                </li>
                <li>
                  <Link to="/past-editions">Past Editions</Link>
                </li>
                <li>
                  <Link to="/about-us">About TEDxPICT</Link>
                </li>
                <li>
                  <Link to="/partners">Partners</Link>
                </li>
              </ul>
            </Col>

            <Col lg={2} xs={6}>
              <ul className="resources">
                <li style={{ fontWeight: "700", marginBottom: "15px" }}>
                  Resources
                </li>
                <li>
                  <Link to="/forums">Blog</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </Col>

            <Col lg={4} xs={12}>
              <ul className="contact">
                <li style={{ fontWeight: "700", marginBottom: "15px" }}>
                  Contact
                </li>
                <li>communications@tedxpict.com</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={8} xs={12}>
              <ul>
                <li>
                  This independent TEDx event is operated under license from
                  TED.
                </li>
                <li style={{ marginTop: "10px" }}>
                  Made with ❤️ by{" "}
                  <Link to="/web-team" style={{ color: "white" }}>
                    TEDxPICT Web Dev.
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={4} xs={12}>
              <ul className="social-icons">
                <li style={{ fontWeight: "900" }} >SPREAD THE LOVE</li>
                <a href="https://www.instagram.com/tedxpict/" target="_blank" style={{ color: "white" }} className="icons"><FaInstagram/></a>
                <a href="https://www.facebook.com/tedxpict" target="_blank" style={{ color: "white" }} className="icons"><FaFacebook/></a>
                <a href="https://www.flickr.com/photos/144385794@N03/" target="_blank" style={{ color: "white" }} className="icons"><FaFlickr/></a>
                <a href="https://twitter.com/TEDxPICT" target="_blank" style={{ color: "white" }} className="icons"><FaTwitter/>   </a>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default FooterTED;
