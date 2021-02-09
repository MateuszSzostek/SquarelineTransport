import React, {useRef} from "react"
import Navigation from "./Navigation";
import Landing from "./Landing";
import Description from "./Description";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import "../css/style.css"
//import AOS from "aos";
//import 'aos/dist/aos.css'
import { useScrollBy } from 'react-use-window-scroll';
import Head from "../components/Head";

export default () => {

  let scroll = useScrollBy();

  let homeRef = useRef<HTMLDivElement>();
  let aboutRef = useRef<HTMLDivElement>()
  let servicesRef = useRef<HTMLDivElement>()
  let contactRef = useRef<HTMLDivElement>();

  let locations = [
    homeRef,
    aboutRef,
    servicesRef,
    contactRef
  ]

  //AOS.init();


  function scrollToFunc(where:number) {
    console.log("klikam");
    console.log(where);
    if(locations[where].current != null)
    {
      scroll({ top: locations[where].current.getBoundingClientRect().y, left: 0, behavior: 'smooth' })
    }
  }

  return(
    <React.Fragment>
      <Head description="Welcome on Squareline Transport company page. We offer various services of lorry transport. " />
      <div className="app-container">
        <Navigation scrollTo={scrollToFunc}/>
        <div ref={homeRef}>
          <Landing/>
        </div>
        <div ref={aboutRef}>
          <Description />
        </div>
        <div ref={servicesRef}>
          <Services/>
        </div>
        <div ref={contactRef}>
          <Contact/>
        </div>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

