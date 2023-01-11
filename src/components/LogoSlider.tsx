import React from 'react'
import PropTypes from 'prop-types'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
type Props = {
    images: Array<string>
}
const LogoSlider = ({images}:Props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, EffectCards, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={false}
          autoplay
          
      effect="cards"
          loop={true}
          
      // pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="h-full w-full logos"
    >
      {images.map((image) => {
        return (
          <SwiperSlide>
            <img
              src={image}
              alt=""
              className="w-full max-sm:w-[20rem] h-full rounded"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default LogoSlider