import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const [banners, setBanners] = useState(null);

  const fetchBanners = async () => {
    const response = await axios.get("http://localhost:4000/api/banners");
    setBanners(response.data[0].banner);
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="">
      <div className="bg-red-900 w-screen h-[40vh]">
        {banners && <img className='w-[1366px] h-[250px] object-fill' src={banners[0]} />}
      </div>
      <div className="bg-blue-900 w-screen h-[40vh]">
        {banners && <img src={banners[1]} />}
      </div>
      <div className="bg-green-900 w-screen h-[40vh]">
        {banners && <img src={banners[2]} />}
      </div>
    </Slider>
  );
}
