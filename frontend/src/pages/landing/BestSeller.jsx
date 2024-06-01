import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import TextUnderline from "../../components/misc/TextUnderline";
import LandingCard from "../../components/card/LandingCard";
import NextButton from "../../components/misc/NextButton";
import PrevButton from "../../components/misc/PrevButton";

// Data untuk RecomendCard
const bestSellerData = [
  {
    no: 1,
    image: "/src/assets/img/card/evoria.jpg",
  },
  {
    no: 2,
    image: "/src/assets/img/card/ladwitra.jpg",
  },
  {
    no: 3,
    image: "/src/assets/img/card/isyana.jpg",
  },
  {
    no: 4,
    image: "/src/assets/img/card/evoria.jpg",
  },
  {
    no: 5,
    image: "/src/assets/img/card/ladwitra.jpg",
  },
  {
    no: 6,
    image: "/src/assets/img/card/isyana.jpg",
  },
];

function bestSeller() {
  const carouselName = "bestseller";

  return (
    <div className="relative h-auto px-4 mx-auto md:py-5 lg:px-32">
      <div className="flex justify-center mb-5">
        <TextUnderline label="Terlaris Minggu ini" justify="center" />
      </div>
      <div className="relative flex items-center">
        <div className="absolute z-10 top-14 -left-7">
          <PrevButton carousel={carouselName} />
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2} // Show 1 full slide and part of the next slide
          loop={true}
          navigation={{
            nextEl: `.${carouselName}-next`,
            prevEl: `.${carouselName}-prev`,
          }}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          }}>
          {bestSellerData.map((item) => (
            <SwiperSlide key={item.no}>
              <LandingCard key={item.no} no={item.no} image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute z-10 top-14 -right-7">
          <NextButton carousel={carouselName} />
        </div>
      </div>
    </div>
  );
}

export default bestSeller;
