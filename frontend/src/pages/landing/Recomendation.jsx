import React from "react";
import TextUnderline from "../../components/misc/TextUnderline";
import RecomendCard from "../../components/card/RecomendCard";

// Data untuk recomendedCard
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
    <div className="h-auto px-40 py-12 mx-auto border-b-2 border-black">
      <div className="flex items-center justify-between mb-5">
        <TextUnderline label="Rekomendasi" />
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {recomendData.map((item) => (
          <RecomendCard
            key={item.no}
            image={item.image}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Recomendation;
