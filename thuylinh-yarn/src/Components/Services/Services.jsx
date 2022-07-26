import React from "react";
import "./Services.css";
import Emoij from "../../Images/thuongthuong.png";
import Glasses from "../../Images/glasses.png";
import Humble from "../../Images/humble.png";
import Card from "../Card/Card";
import Resume from "./NGUYEN-THI-THUY-LINH.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  // khai bao cho lệnh import {motion}
  const transition = { duration: 2, type: "spring" };
  // khai bao cho lệnh import  { themeContext }
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span
          style={{
            color: darkMode ? "white" : "",
          }}
        >
          My Awesome
        </span>
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
        <motion.div
          initial={{ left: "25%" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "18rem" }}
        >
          <Card
            emoij={Emoij}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, AdobeXD"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-20rem" }}
          whileInView={{ left: "-5rem" }}
          transition={transition}
          style={{ top: "13rem", left: "-7rem" }}
        >
          <Card
            emoij={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JAVASCRIPT, REACTJS, PHP(Basic), Figma"}
          />
        </motion.div>
        <motion.div
          initial={{ right: "25%" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ top: "25rem", left: "12rem" }}
        >
          <Card
            emoij={Humble}
            heading={"UI/UX"}
            detail={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}
          />
        </motion.div>
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
