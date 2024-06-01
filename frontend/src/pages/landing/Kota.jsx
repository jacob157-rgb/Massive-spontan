import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import TextUnderline from "../../components/misc/TextUnderline";
import KotaCard from "../../components/card/KotaCard";
import NextButton from "../../components/misc/NextButton";
import PrevButton from "../../components/misc/PrevButton";

// Data untuk KotaCard
const kotaData = [
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
    image: "/src/assets/img/kota/makassar.png",
    kota: "Makassar",
  },
  {
    no: 5,
    image: "/src/assets/img/kota/bandung.png",
    kota: "Bandung",
  },
  {
    no: 6,
    image: "/src/assets/img/kota/surabaya.png",
    kota: "Surabaya",
  },
];

function CarouselKota() {
  const carouselName = "kota";

  return (
    <div className="relative h-auto px-4 mx-auto md:py-5 lg:px-32">
      <div className="flex justify-center mb-5">
        <TextUnderline label="Lihat Dikotamu" justify="center" />
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
          {kotaData.map((item) => (
            <SwiperSlide key={item.no}>
              <KotaCard no={item.no} image={item.image} kota={item.kota} />
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

export default CarouselKota;
