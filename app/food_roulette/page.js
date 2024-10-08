// components/Slider.js
'use client'
import Slider from "react-slick";

const SampleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2> 슬라이드 예제 </h2>
      <Slider {...settings}>
        <div>
          <h3> 슬라이드 1 </h3>
        </div>
        <div>
          <h3> 슬라이드 2 </h3>
        </div>
        <div>
          <h3> 슬라이드 3 </h3>
        </div>
      </Slider>
    </div>
  );
};

export default SampleSlider;
