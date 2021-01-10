import React from "react";
import TruckImg from "../images/frontal-truck.svg";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default () => (
  <React.Fragment>
    <section className="description-container flex-container col align-items-center">
    <div className="content-border description-grid font-montserrat">
        <div data-aos="fade-up" className="desc-heading">
          <h2>LOREM IPSUM</h2>
          <h2>LOREM IPSUM LOREM IPSUM LOREM IPSUM </h2>
        </div>
        <div data-aos="fade-up" className="desc-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum mi. Sed sit amet orci sed nibh tincidunt volutpat. Nunc nec vulputate ligula, id aliquam ipsum. Vestibulum accumsan eros ante, eu fermentum orci ultrices sed. Ut accumsan justo erat. Donec gravida mauris a lorem finibus, vitae mollis arcu condimentum. Curabitur posuere tincidunt est, finibus ornare sapien cursus sed. Morbi consequat eu nulla ac tempus. In hac habitasse platea dictumst. Mauris a ante sed est eleifend bibendum. Proin fermentum fermentum libero porttitor sagittis. Maecenas id vulputate massa. Praesent ac mauris vel dui sagittis aliquet. Etiam dapibus ultricies odio. Vivamus sit amet nisl non nisl hendrerit pulvinar ut in metus.</p>
        </div>
        <div data-aos="fade-up" className="desc-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum mi. Sed sit amet orci sed nibh tincidunt volutpat. Nunc nec vulputate ligula, id aliquam ipsum. Vestibulum accumsan eros ante, eu fermentum orci ultrices sed. Ut accumsan justo erat. Donec gravida mauris a lorem finibus, vitae mollis arcu condimentum. Curabitur posuere tincidunt est, finibus ornare sapien cursus sed. Morbi consequat eu nulla ac tempus. In hac habitasse platea dictumst. Mauris a ante sed est eleifend bibendum. Proin fermentum fermentum libero porttitor sagittis. Maecenas id vulputate massa. Praesent ac mauris vel dui sagittis aliquet. Etiam dapibus ultricies odio. Vivamus sit amet nisl non nisl hendrerit pulvinar ut in metus.</p>
        </div>
        <div data-aos="fade-up" className="desc-img display-flex justify-content-center align-content-center">
          <img className="truck-img filter-shadow" src={TruckImg}></img>
        </div>
      </div>
    </section>
  </React.Fragment>
)
