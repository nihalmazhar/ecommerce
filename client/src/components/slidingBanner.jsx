import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="mt-2">
      <div className="bg-red-900 w-screen h-[40vh]">
        <h3>1</h3>
      </div>
      <div className="bg-blue-900 w-screen h-[40vh]">
        <h3>2</h3>
      </div>
      <div className="bg-green-900 w-screen h-[40vh]">
        <h3>3</h3>
      </div>
    </Slider>
  );
}
