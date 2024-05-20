import React from "react";
import TextUnderline from "../../components/misc/TextUnderline";
import LandingCard from "../../components/card/LandingCard";
import NextButton from "../../components/misc/NextButton";
import PrevButton from "../../components/misc/PrevButton";

// Data untuk RecomendCard
const carouselData = [
  {
    no: 1,
    image: "/src/assets/img/card/dewa.jpg",
  },
  {
    no: 2,
    image: "/src/assets/img/card/ubb.jpg",
  },
  {
    no: 3,
    image: "/src/assets/img/card/hot.jpg",
  },
];

function Carousel() {
  return (
    <div className="relative h-auto px-4 py-5 mx-auto lg:px-32">
      <div className="flex justify-center mb-5">
        <TextUnderline label="Segera Hadir" justify="center" />
      </div>
      <div className="relative flex items-center">
        <div className="absolute z-10 top-14 -left-7">
          <PrevButton />
        </div>
        <div className="flex-1">
          <div className="grid w-full grid-cols-1 gap-5 pb-5 border-b border-black md:grid-cols-2 lg:grid-cols-3">
            {carouselData.map((item) => (
              <LandingCard key={item.no} no={item.no} image={item.image} />
            ))}
          </div>
        </div>
        <div className="absolute z-10 top-14 -right-7">
          <NextButton />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
