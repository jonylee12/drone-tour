import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/PromoCarousel.css'; // Asigură-te că acest fișier există

const images = [
  '/drone-tour/carousel/slide1.jpg',
  '/drone-tour/carousel/slide2.jpg',
  '/drone-tour/carousel/slide3.jpg',
  '/drone-tour/carousel/slide4.jpg',
  '/drone-tour/carousel/slide5.jpg',
  '/drone-tour/carousel/slide6.jpg',
  '/drone-tour/carousel/slide7.jpg',
  '/drone-tour/carousel/slide8.jpg',
  '/drone-tour/carousel/slide9.jpg'

];

const PromoCarousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PromoCarousel;
