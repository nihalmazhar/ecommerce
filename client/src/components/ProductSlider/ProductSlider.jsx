import React from 'react'

import { useState, useEffect } from 'react';
import Slider from 'react-slick'
import './slider.css'
import { slideimages } from './slideimages';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function imageSlider() {
    const [nav1, setNav1] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slider1, setSlider1] = useState(null);

    useEffect(() => {
        setNav1(slider1);
      }, [slider1]);

    const settings = {
        onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
        lazyLoad: true,
        asNavFor: ".slider-nav",
        focusOnSelect: true,
       
        arrows:true,
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
      };

  return (
    <div className='slidercontainer'>
         <Slider {...settings} asNavFor={nav1}
            ref={(slider) => setSlider1(slider)}>
                {slideimages.map(slides => <div className='img-body' key={slides.id}> <img src={slides.src}/> </div>)}
        
        </Slider>
      <div className="thumb-wrapper">
          {slideimages.map((item, idx) => (
            <div 
              key={item.id} 
              className={currentSlide === idx ? "active": null} 
              onClick={() => {
                slider1?.slickGoTo(idx)
              }}>
              <img src={item.src} />
              
            </div>
          ))}
        </div>
    </div>
  )
}

export default imageSlider