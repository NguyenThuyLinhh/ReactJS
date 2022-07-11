import React from "react";
import "./Portfolio.css";
// import { Swiper, SwiperSlide } from "swiper/react" để lấy thư viện vừa mới add
// để lấy bằng cách 'yarn add swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../Images/sidebar.jpg";
import Ecomerce from "../../Images/ecomerce.png";
import Musicapp from "../../Images/musicapp.jpg";
import Hoc from "../../Images/hoc.jpg";
// import swiper/css để định dạng css cho cái slide -------
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading */}
      <span>Recent Project</span>
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
