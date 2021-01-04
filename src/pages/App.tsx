import React from "react"
import Navigation from "./Navigation";
import Landing from "./Landing";
import Description from "./Description";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import "../css/style.css"

export default () => (
    <React.Fragment>
      <Navigation/>
      <Landing/>
      <Description/>
      <Services/>
      <Contact/>
      <Footer/>
    </React.Fragment>
)

