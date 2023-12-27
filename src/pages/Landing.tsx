import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default () => {
  const data = useStaticQuery(graphql`
    query LandingQuery {
      allFile(filter: { name: { in: ["image_1"] } }) {
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
      <div className="landing-container">
        {/*
<BackgroundImage
          id="parallax1"
          className="flex-container col justify-content-center align-items-center"
          fluid={data.file.childImageSharp.fluid}
         
        >
         */}
        <GatsbyImage
          className="landing-image"
          objectFit="cover"
          image={
            data?.allFile?.edges[0]?.node?.childImageSharp?.gatsbyImageData
          }
          alt="landing image"
        />
        <div
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="company-name flex-container row"
        >
          <h1>STREAMLINE TRANSPORT</h1>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="landing-heading flex-container col"
          style={{ zIndex: 1, position: "relative" }}
        >
          <h1>EXCELLENCE DELIVERED</h1>
          <h1>YOUR DEDICATED TRANSPORT SERVICES</h1>
        </div>
        {/*
 </BackgroundImage>
            */}
      </div>
    </React.Fragment>
  )
}
