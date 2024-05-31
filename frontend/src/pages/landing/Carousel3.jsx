import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TextUnderline from "../../components/misc/TextUnderline";
import KotaCard from "../../components/card/KotaCard";
import NextButton from "../../components/misc/NextButton";
import PrevButton from "../../components/misc/PrevButton";

// Data untuk RecomendCard
const carouselData = [
  {
    no: 1,
    image: "/src/assets/img/kota/bali.png",
    kota: "Bali",
  },
  {
    no: 2,
    image: "/src/assets/img/kota/jogja.png",
    kota: "Yogyakarta",
  },
  {
    no: 3,
    image: "/src/assets/img/kota/jakarta.png",
    kota: "Jakarta",
  },
  {
    no: 4,
    image: "/src/assets/img/kota/jogja.png",
    kota: "Yogyakarta",
  },
  {
    no: 5,
    image: "/src/assets/img/kota/jakarta.png",
    kota: "Jakarta",
  },
  {
    no: 6,
    image: "/src/assets/img/kota/bali.png",
    kota: "Bali",
  },
];

function Carousel() {
  return (
    <div className="relative h-auto px-4 py-5 mx-auto lg:px-32">
      <div className="flex justify-center mb-5">
        <TextUnderline label="Lihat Dikotamu" justify="center" />
      </div>
      <div className="relative flex items-center">
        <div className="absolute z-10 top-14 -left-7">
          <PrevButton />
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {carouselData.map((item) => (
            <SwiperSlide key={item.no}>
              <KotaCard
                no={item.no}
                image={item.image}
                kota={item.kota}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute z-10 top-14 -right-7">
          <NextButton />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
