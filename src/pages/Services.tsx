import React from "react";
import ServiceCard from "./ServiceCard";
import Image1 from '../images/clock.svg';
import Image2 from '../images/driver.svg';
import Image3 from '../images/award.svg';
import Image4 from '../images/worker.svg';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from 'gatsby-background-image'

//import { LazyLoadImage } from 'react-lazy-load-image-component';

export default () => {
  const cardsData = [
    {
      id: 1,
      image: Image1,
      name: "QUICK",
      desc: "Quick lorem ipsum lorm ipsum"
    },
    {
      id: 2,
      image: Image2,
      name: "QUALIFIED",
      desc: "Qualified lorem ipsum lorm ipsum"
    },
    {
      id: 3,
      image: Image3,
      name: "QUALITY",
      desc: "Quality lorem ipsum lorm ipsum"
    },
    {
      id: 4,
      image: Image4,
      name: "COMFORT",
      desc: "Comfort lorem ipsum lorm ipsum"
    },
  ]

  let serviceCards = cardsData.map(s => <ServiceCard key={s.id} image={s.image} name={s.name} desc={s.desc}/>)

  const data = useStaticQuery(graphql`
  query MyQueryII {
    file(relativePath: {eq: "image_2.jpg"}) {
      childImageSharp {
        fluid(quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  
  `);

  return(
<React.Fragment>
    <div className="services-container">
      <BackgroundImage id="parallax2" className="flex-container col align-items-center" fluid ={data.file.childImageSharp.fluid}>
          <div className="content-border flex-container col justify-content-right">
            <div className="flex-container row justify-content-right">
              <div data-aos="fade-up" className="services-text">
                <h2>OUR SERVICES</h2>
                <h2>ARE</h2>
              </div>
            </div>
            <div className="flex-container row">
              <div className="grid-cards-container">
                {serviceCards}
              </div>
            </div>
          </div>
      </BackgroundImage>
    </div>
  </React.Fragment>
  )
}
