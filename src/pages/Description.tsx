import React from "react";
import TruckImg from "../images/frontal-truck.svg";
import "animate.css/animate.min.css";

export default () => (
  <React.Fragment>
    <section className="description-container flex-container col align-items-center">
    <div className="content-border description-grid font-montserrat">
        <div data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease" className="desc-heading">
          <h2>CARE FLOWS</h2>
          <h2>THROUGH OUR ROUTES</h2>
        </div>
        <div data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease"className="desc-1">
          <p>Do you have heavy loads to transport? No need to worry. We can transport loads of any size. 
            We are well-equipped with the required vehicles, equipment and tools to transport your heavy
             loads to anywhere in the UK or Europe. We have articulated vehicles in place. 
            You can rely on our services.</p>
        </div>
        <div data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease" className="desc-2">
          <p>We aim to deliver high standards of care, with unparalleled customer service to retain and grow 
            our client base. With tailor-made services and unique systems to suit your needs, we offer a 
            complete package encompassing all your storage, pick-pack and distribution needs.</p>
        </div>
        <div data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease" className="desc-img display-flex justify-content-center align-content-center">
          <img className="truck-img filter-shadow" src={TruckImg}></img>
        </div>
      </div>
    </section>
  </React.Fragment>
)
