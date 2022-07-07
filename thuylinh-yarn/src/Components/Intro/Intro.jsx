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
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am</span>
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
        <img src={Emoij} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={King} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={Thumbup} txt1="Best FrontEnd" txt2="Award" />
        </div>
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
