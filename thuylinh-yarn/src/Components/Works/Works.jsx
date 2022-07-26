import React from "react";
import "./Works.css";
import Facebook from "../../Images/facebook.png";
import Amazon from "../../Images/amazon.png";
import Fiverr from "../../Images/fiverr.png";
import Shopyfy from "../../Images/shopyfy.png";
import Upwork from "../../Images/upwork.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        <span
          style={{
            color: darkMode ? "white" : "",
          }}
        >
          Works for All these
        </span>
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
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopyfy} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
