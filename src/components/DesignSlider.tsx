import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from 'prop-types'
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectCards,
    Autoplay,
    EffectCube,
    EffectCoverflow,
} from 'swiper'
import "swiper/css";
import "swiper/css/bundle";
type Props = {
  images: Array<string>;
};
const DesignSlider = ({ images }:Props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, EffectCube, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation={true}
      autoplay
      effect="cube"
      loop={true}
      // pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="h-full des"
    >
      {images.map((image) => {
        return (
          <SwiperSlide>
            <img src={image} alt="" className="w-full max-sm:w-[20rem] h-full max-sm:h-[20rem] rounded" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default DesignSlider;
