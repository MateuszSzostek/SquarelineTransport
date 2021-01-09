import React from "react"

interface IServiceCardData{
  image: string;
  name: string;
  desc: string;
}

export default (data:IServiceCardData) =>{
  console.log(typeof data);
  return(
  <React.Fragment>
    <div className="service-card flex-container col ">
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
