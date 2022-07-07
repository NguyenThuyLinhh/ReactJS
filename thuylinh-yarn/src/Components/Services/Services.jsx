import React from "react";
import "./Services.css";
import Emoij from "../../Images/thuongthuong.png";
import Glasses from "../../Images/glasses.png";
import Humble from "../../Images/humble.png";
import Card from "../Card/Card";
import Resume from "./NGUYEN-THI-THUY-LINH.pdf";
const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit laudantium.
          <br />
          Architecto minus nam illum quod. Impedit quibusdam necessitatibus
          iste!
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ left: "18rem" }}>
          <Card
            emoij={Emoij}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, AdobeXD"}
          />
        </div>
        {/* second card */}
        <div style={{ top: "13rem", left: "-7rem" }}>
          <Card
            emoij={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JAVASCRIPT, REACTJS, PHP(Basic)"}
          />
        </div>
        <div style={{ top: "25rem", left: "12rem" }}>
          <Card
            emoij={Humble}
            heading={"UI/UX"}
            detail={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}
          />
        </div>
        {/* tạo những đốm màu */}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
