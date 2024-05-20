import React from "react";
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
    <div className="relative h-auto px-4 py-5 mx-auto lg:px-32">
      <div className="mb-5">
        <TextUnderline label="Rekomendasi" />
      </div>
      <div className="relative flex items-center">
        <div className="absolute z-10 top-14 -left-7">
          <PrevButton />
        </div>
        <div className="flex-1">
          <div className="grid w-full grid-cols-1 gap-5 pb-5 border-b border-black md:grid-cols-2 lg:grid-cols-3">
            {recomendData.map((item) => (
              <RecomendCard
                key={item.no}
                no={item.no}
                image={item.image}
                title={item.title}
                date={item.date}
              />
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

export default Recomendation;