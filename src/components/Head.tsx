import React from "react"
import Helmet from "react-helmet";

interface HeadProps{
  description?: string
}


const Head: React.FC<HeadProps> = (props) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Squareline Transport"}</title>
        <meta name = "keywords" content=" transport, lorry, truck, pallets, cages, delivery, service, drivers, C+E, C, class1, class2"/>
        <meta name = "author" content="Andrei Stanica"/>
        <base href = "site_addres" target="_blank"/>
        <meta name = "description" content={props.description}/>
        <meta name = "robots" content="index, follow" />
      </Helmet>
    </React.Fragment>
  )
}
export default Head;
