import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Partners from "./pages/Partners/Partners";
import PastEditions from "./pages/PastEditions/PastEditions";
import Forums from "./pages/Forums/Forums";
import FAQ from "./pages/FAQ/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import WebTeam from "./pages/WebTeam/WebTeam";
import ScrollToTop from "./components/Scroll/ScrollToTop";


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <ScrollToTop/>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/partners">
            <Partners />
          </Route>
          <Route path="/past-editions">
            <PastEditions />
          </Route>
          <Route path="/forums">
            <Forums />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/web-team">
            <WebTeam />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
