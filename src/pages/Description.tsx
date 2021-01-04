import React from "react";
import TruckImg from "../img/frontal-truck.svg";

export default () => (
  <React.Fragment>
    <section className="description-container flex-container col align-items-center">
    <div className="content-border description-grid">
        <div className="desc-heading">
          <h2>LOREM IPSUM</h2>
          <h2>LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM </h2>
        </div>
        <div className="desc-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum mi. Sed sit amet orci sed nibh tincidunt volutpat. Nunc nec vulputate ligula, id aliquam ipsum. Vestibulum accumsan eros ante, eu fermentum orci ultrices sed. Ut accumsan justo erat. Donec gravida mauris a lorem finibus, vitae mollis arcu condimentum. Curabitur posuere tincidunt est, finibus ornare sapien cursus sed. Morbi consequat eu nulla ac tempus. In hac habitasse platea dictumst. Mauris a ante sed est eleifend bibendum. Proin fermentum fermentum libero porttitor sagittis. Maecenas id vulputate massa. Praesent ac mauris vel dui sagittis aliquet. Etiam dapibus ultricies odio. Vivamus sit amet nisl non nisl hendrerit pulvinar ut in metus.</p>
        </div>
        <div className="desc-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget interdum mi. Sed sit amet orci sed nibh tincidunt volutpat. Nunc nec vulputate ligula, id aliquam ipsum. Vestibulum accumsan eros ante, eu fermentum orci ultrices sed. Ut accumsan justo erat. Donec gravida mauris a lorem finibus, vitae mollis arcu condimentum. Curabitur posuere tincidunt est, finibus ornare sapien cursus sed. Morbi consequat eu nulla ac tempus. In hac habitasse platea dictumst. Mauris a ante sed est eleifend bibendum. Proin fermentum fermentum libero porttitor sagittis. Maecenas id vulputate massa. Praesent ac mauris vel dui sagittis aliquet. Etiam dapibus ultricies odio. Vivamus sit amet nisl non nisl hendrerit pulvinar ut in metus.</p>
        </div>
        <div className="desc-img">
          <img className="truck-img" src={TruckImg}></img>
        </div>
      </div>
    </section>
  </React.Fragment>
)
