import React from "react";
import ServiceCard from "./ServiceCard";

export default () => (
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
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)
