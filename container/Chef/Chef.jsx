import React from "react";

import "./Chef.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const Chef = () => (
  <div className="app__bgg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            rerum culpa quaerat consequatur sequi, animi adipisci, sed nostrum
            corrupti voluptate dignissimos obcaecati. Ratione incidunt
            dignissimos magni qui necessitatibus accusamus voluptatum?
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
