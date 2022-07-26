import React from "react";
import "./Portfolio.css";
// import { Swiper, SwiperSlide } from "swiper/react" để lấy thư viện vừa mới add
// để lấy bằng cách 'yarn add swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../Images/sidebar.jpg";
import Ecomerce from "../../Images/ecomerce.png";
import Musicapp from "../../Images/musicapp.jpg";
import Hoc from "../../Images/hoc.jpg";
import { themeContext } from "../../Context";
import { useContext } from "react";
// import swiper/css để định dạng css cho cái slide -------
import "swiper/css";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span
        style={{
          color: darkMode ? "white" : "",
        }}
      >
        Recent Project
      </span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper
        //   định dạng slider
        spaceBetween={22}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecomerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Musicapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
