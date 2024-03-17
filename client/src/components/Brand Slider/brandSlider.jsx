import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './brandSlider.css'
function BrandSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="my-3  h-20">
      <div>
        <img src="./src/assets/BrandImages/bosch.webp" alt="" />
      </div>
      <div className=" ">
        <img src="./src/assets/BrandImages/euromac.webp" />
      </div>
      <div className=" ">
        <img src="./src/assets/BrandImages/ign.webp" alt="" />
      </div>
      <div className=" ">
        <img src="./src/assets/BrandImages/maclite.webp" alt="" />
      </div>
      <div className=" ">
        <img src="./src/assets/BrandImages/minda.webp" alt="" />
      </div>
      <div className=" ">
        <img src="./src/assets/BrandImages/motherson.webp" alt="" />
      </div>
      <div className=" ">
        <img src="./src/assets/BrandImages/sheen.webp" alt="" />
      </div>
      <div className=" ">
        <img src="./src/assets/BrandImages/technix.webp" alt="" />
      </div>
      <div className=" ">
        <img src="./src/assets/BrandImages/valeo.webp" alt="" />
      </div>
      <div className=" ">
        <img src="./src/assets/BrandImages/woscher.webp" alt="" />
      </div>
    </Slider>
  );
}

export default BrandSlider;
