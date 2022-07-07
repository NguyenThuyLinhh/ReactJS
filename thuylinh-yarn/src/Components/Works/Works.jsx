import React from "react";
import "./Works.css";
import Facebook from "../../Images/facebook.png";
import Amazon from "../../Images/amazon.png";
import Fiverr from "../../Images/fiverr.png";
import Shopyfy from "../../Images/shopyfy.jpg";
import Upwork from "../../Images/upwork.png";
const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <spane>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit laudantium.
          <br />
          Architecto minus nam illum quod. Impedit iste!
          <br />
          Architecto minus nam illum quod. Impedit quibusdam necessitatibus
          iste!
          <br />
          Lorem, ipsum dolor sit amet consectetur.
        </spane>

        <button className="button s-button">Here me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
    </div>
  );
};

export default Works;
