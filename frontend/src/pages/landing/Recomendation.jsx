import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import TextUnderline from "../../components/misc/TextUnderline";
import RecomendCard from "../../components/card/RecomendCard";
import NextButton from "../../components/misc/NextButton";
import PrevButton from "../../components/misc/PrevButton";
// Data untuk RecomendCard
const recomendData = [
  {
    no: 1,
    image: "/src/assets/img/card/dopamine.jpg",
    title: "2024 Junny Tour: (Intro) Dopamine - Jakarta",
    date: "28 Juni 2024",
  },
  {
    no: 2,
    image: "/src/assets/img/card/soi.jpg",
    title: "Scent of Indonesia",
    date: "24 Juni - 30 Juni 2024",
  },
  {
    no: 3,
    image: "/src/assets/img/card/kod.jpg",
    title: "KIND OF DREAM FESTIVAL 2024",
    date: "14 Juni - 15 Juni 2024",
  },
];

function Recomendation() {
  return (
    <div className="relative h-auto px-4 mx-auto md:py-5 lg:px-32">
      <div className="mb-5">
        <TextUnderline label="Rekomendasi" />
      </div>
      <div className="relative flex items-center">
        <div className="absolute z-10 top-14 -left-7">
          <PrevButton />
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2} // Show 1 full slide and part of the next slide
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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
          {recomendData.map((item) => (
            <SwiperSlide key={item.no}>
              <RecomendCard
                no={item.no}
                image={item.image}
                title={item.title}
                date={item.date}
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

export default Recomendation;
