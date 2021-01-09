import React from "react";
import ServiceCard from "./ServiceCard";
import Image1 from '../img/clock.svg';
import Image2 from '../img/driver.svg';
import Image3 from '../img/award.svg';
import Image4 from '../img/worker.svg';

export default () => {
  console.log(Image1);

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

  return(
<React.Fragment>
    <div className="services-container">
      <div className="parallax2">
        <div className="flex-container col align-items-center">
          <div className="content-border flex-container col justify-content-right">
            <div className="flex-container row justify-content-right">
              <div className="services-text">
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
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}
