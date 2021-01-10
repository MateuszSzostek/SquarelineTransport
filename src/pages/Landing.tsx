/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby";
import React from "react"
import Image from "../images/image_1.jpg";
import Img from "gatsby-image";
import { css, jsx } from "@emotion/react"
import BackgroundImage from 'gatsby-background-image'


interface IImageFunction{
  func: any;
}
//<Img fluid={data.file.childImageSharp.fluid}/>
//<div css={css`  background: url(${data.file.childImageSharp.fluid.src});background-position: center;background-size: cover;background-attachment: fixed;`}className="parallax1 flex-container col justify-content-center align-items-center test-class"></div>

export default () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "image_1.jpg"}) {
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
      <div className="landing-container">
        <BackgroundImage id="parallax1" className="flex-container col justify-content-center align-items-center"
        fluid ={data.file.childImageSharp.fluid}>
          <div data-aos="fade-up" className="company-name flex-container row">
            <h1>SQUERLINE TRANSPORT</h1>
          </div>
          <div data-aos="fade-up" className="landing-heading flex-container col">
            <h1>EXCELLENCE DELIVERED</h1>
            <h1>YOUR DEDICATED TRANSPORT SERVICES</h1>
          </div>
        </BackgroundImage>
      </div>
    </React.Fragment>
  )
}

