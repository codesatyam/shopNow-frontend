import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import IMG from '../../constant/images/Sample.png'

// Arrow styling
const arrowStyle = {
  display: "flex",
  zIndex: 20,
  height:'50px',
  widht:"10px",
  justifyContent:"center",
  alignItems:"center",
  background: "gray",  
};


const nextArrowStyle = {
  ...arrowStyle,
  marginRight: "25px",
};

const prevArrowStyle = {
  ...arrowStyle,
  marginLeft: "25px",
};

export const ProductCarousel: React.FC = () => {
  const [slidesToShow, setSlidesToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const breakpoints = [
        { width: 1200, slides: 6 },
        { width: 992, slides: 5 },
        { width: 768, slides: 4 },
        { width: 480, slides: 3 },
        { width: 300, slides: 2 },
      ];

      const matchedBreakpoint = breakpoints.find(breakpoint => window.innerWidth >= breakpoint.width);

      if (matchedBreakpoint) {
        setSlidesToShow(matchedBreakpoint.slides);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, ...nextArrowStyle }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, ...prevArrowStyle }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "flex gap-5",
  };

  return (
    <div className="slider-container w-full">
     <Slider {...settings}>
        {Array(7).fill(0).map((_, index) => (
          <div key={index} className='px-[1px]'>
           <div className='p-4 m-2 shadow-lg rounded-lg'>
           <div className='w-full'>
            <img src={IMG} alt="Image" className="h-36 object-contain rounded-t-lg" />
           </div>
           <div className="p-2">
            <p className="font-bold text-lg text-center">Iphone 14</p>
            <p className="text-green-500 text-center">$21,000</p>
           </div>
          </div>
         </div>
       ))}
     </Slider>
    </div>
  );
}
