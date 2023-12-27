import React from "react"
import ServiceCard from "./ServiceCard"
import Image1 from "../images/clock.svg"
import Image2 from "../images/driver.svg"
import Image3 from "../images/award.svg"
import Image4 from "../images/worker.svg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"

//import { LazyLoadImage } from 'react-lazy-load-image-component';

export default () => {
  const cardsData = [
    {
      id: 1,
      image: Image1,
      name: "QUICK",
      desc: "We pay special attention to ensure that our services are performed on time.",
    },
    {
      id: 2,
      image: Image2,
      name: "QUALIFIED",
      desc: "All our drivers have the CPC certificate and are fully qualified to operate all our vehicles.",
    },
    {
      id: 3,
      image: Image3,
      name: "QUALITY",
      desc: "We provide our clients with professional service and the use of the best means of transport adapted to the transported cargo.",
    },
    {
      id: 4,
      image: Image4,
      name: "SAFETY",
      desc: "We keep our trucks in pristine condition to optimise our fleet’s performance, reliability, quality and above all safety.",
    },
  ]

  let serviceCards = cardsData.map(s => (
    <ServiceCard
      data-aos="fade-up"
      key={s.id}
      image={s.image}
      name={s.name}
      desc={s.desc}
    />
  ))

  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allFile(filter: { name: { in: ["image_2"] } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <div className="services-container">
        <GatsbyImage
          className="services-bg"
          objectFit="cover"
          image={
            data?.allFile?.edges[0]?.node?.childImageSharp?.gatsbyImageData
          }
          alt="landing image"
        />
        <div
          className="flex-container col align-items-center"
          style={{ zIndex: 0, position: "relative" }}
        >
          <div className="content-border flex-container col justify-content-right">
            <div className="flex-container row justify-content-right">
              <div
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
                className="services-text"
              >
                <h2>OUR SERVICES</h2>
                <h2>ARE</h2>
              </div>
            </div>
            <div className="flex-container row">
              <div className="grid-cards-container">{serviceCards}</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
