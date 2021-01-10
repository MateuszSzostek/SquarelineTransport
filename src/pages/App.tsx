import React, { useState, useEffect} from "react"
import Navigation from "./Navigation";
import Landing from "./Landing";
import Description from "./Description";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import "../css/style.css"
import AOS from "aos";
import 'aos/dist/aos.css'

export default () => {
  const [image1Loaded, setImage1Loaded] = useState(false);
  const [image2Loaded, setImage2Loaded] = useState(false);

  let imagesStatus = [
    setImage1Loaded,
    setImage2Loaded
  ]

  function SetImageStatus(status, nImage) {
    imagesStatus[nImage](status);
    console.log(image1Loaded);
    console.log(image2Loaded);
  }

  AOS.init();

  return(
    <React.Fragment>
      <div className="app-container">
        <Navigation/>
        <Landing/>
        <Description/>
        <Services/>
        <Contact/>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

