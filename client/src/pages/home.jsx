import React from "react";
import SimpleSlider from '/src/components/slidingBanner'
import Allcategories from '/src/components/allCategories/allcategories'
import BrandSlider from '/src/components/Brand Slider/brandSlider'


function home() {
  return (
    <>
    <SimpleSlider/>
    <Allcategories/>
    <BrandSlider/>
    </>
  )
}

export default home