import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./3d-carousel.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className='nextArrow' onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className='prevArrow' onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

const ImageSlider = ({ images, slidesToShow = 3 }) => {
    // 3.
  const [imageIndex, setImageIndex] = useState(0);

    // 4.
  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 1100,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    // 5.
  const templateImages = images.map((image, idx) => {
    return (
      <div
        className={idx === imageIndex ? "activeSlide" : "slide"}
        key={image.id}
      >
        <div className="slideWrapper">
          {image.code ? image.code : <img src={image.src} alt={image.alt} />}
        </div>
      </div>
    );
  });

  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;
