import React from "react";
import "./Services.css";
import Emoij from "../../Images/thuongthuong.png";
import Glasses from "../../Images/glasses.png";
import Humble from "../../Images/humble.png";

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit laudantium amet eos corporis optio, sequi magnam placeat
          .
          <br />
          Architecto minus nam illum quod. Impedit quibusdam necessitatibus
          iste!
        </spane>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards"></div>
    </div>
  );
};

export default Services;
