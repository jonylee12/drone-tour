import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/FlyshopCarousel.css'; // sau poți crea FlyshopCarousel.css dacă vrei separat


const flyshopImages = Array.from({ length: 10 }).map((_, index) =>
  `${import.meta.env.BASE_URL}carousel/flyshopcarousel/fly${index + 1}.jpg`
);

const FlyshopCarousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {flyshopImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`flyshop-slide-${idx + 1}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlyshopCarousel;