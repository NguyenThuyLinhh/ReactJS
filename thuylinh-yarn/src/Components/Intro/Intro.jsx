import React from "react";
import "./Intro.css";
import Github from "../../Images/github.png";
import LikedIn from "../../Images/likedin.png";
import Instagram from "../../Images/instagram.png";
import Vector1 from "../../Images/vector1.png";
import Vector2 from "../../Images/vector2.png";
import Girl from "../../Images/girl.png";
import Emoij from "../../Images/thuongthuong.png";
import Thumbup from "../../Images/thumbup.png";
import King from "../../Images/king.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  // khai bao cho lệnh import {motion}
  const transition = { duration: 2, type: "spring" };
  // khai bao cho lệnh import  { themeContext }
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span
            style={{
              color: darkMode ? "white" : "",
            }}
          >
            Hi! I am
          </span>
          <span>Nguyen Thi Thuy Linh</span>
          <span>
            Frontend Deloper with hight level of experience in web designing and
            development, producting the Quality work
          </span>
        </div>
        <button className="button i-button">Here me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LikedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Girl} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Emoij}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={King} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={Thumbup} txt1="Best FrontEnd" txt2="Award" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      </div>
      <div
        className="blur"
        style={{
          background: "#C1F5FF",
          top: "30rem",
          width: "21rem",
          height: "11rem",
          left: "30rem",
        }}
      ></div>
    </div>
  );
};

export default Intro;
