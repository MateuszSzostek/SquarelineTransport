import React from "react"

interface IServiceCardData{
  image: string;
  name: string;
  desc: string;
}

export default (data:IServiceCardData) =>{
  return(
  <React.Fragment>
    <div data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease" className="service-card flex-container col ">
      <div className="flex-container row">
        <img src={data.image}></img>
      </div>
      <div className="flex-container row">
        <h2>{data.name}</h2>
      </div>
      <div className="flex-container row">
        <p>{data.desc}</p>
      </div>
    </div>
  </React.Fragment>
  )
} 
