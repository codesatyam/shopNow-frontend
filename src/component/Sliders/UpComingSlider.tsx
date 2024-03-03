import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const UpComingSlider = () => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <div className="w-full">
      <Slider ref={sliderRef} {...settings}>
        <div className="bg-green-600 w-full h-[300px]">
          <h3></h3>
        </div>
        <div className="bg-pink-500 w-full h-[300px]">
          <h3></h3>
        </div>
        <div className="bg-cyan-500 w-full h-[300px]">
          <h3></h3>
        </div>
        <div className="bg-blue-700 w-full h-[300px]">
          <h3></h3>
        </div>
        <div className="bg-yellow-500 w-full h-[300px]">
          <h3></h3>
        </div>
        <div className="bg-red-400 w-full h-[300px]">
          <h3></h3>
        </div>
      </Slider>
    </div>
  );
};
