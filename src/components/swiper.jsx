import { Pagination, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from "react";

function SSwiper({ children, props, onSwiper, refs, initialSlide }) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={50}
      loopedSlides={1}
      initialSlide={initialSlide}
      onSwiper={onSwiper}
      modules={[Pagination, Navigation]}
      className="relative py-8 flex bg-white mySwiper"
      ref={refs}
      {...props}
    >
      {children}
    </Swiper>
  );
}

export { SSwiper };
