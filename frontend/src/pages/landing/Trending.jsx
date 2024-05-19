import React from "react";
import TextUnderline from "../../components/misc/TextUnderline";
import TrendingCard from "../../components/card/TrendingCard";

// Data untuk TrendingCard
const trendingData = [
  {
    no: 1,
    image: "/src/assets/img/card/anggun.png",
    title: "FLASHBACK motion - Enchanting",
    date: "28 Juli 2024",
  },
  {
    no: 2,
    image: "/src/assets/img/card/kelab.jpg",
    title: "Kelab Pertunjukan",
    date: "24 Mei - 25 Mei 2024",
  },
  {
    no: 3,
    image: "/src/assets/img/card/pland.jpg",
    title: "P-LAND: K-Pop Art Market Vol.3",
    date: "22 Juni - 23 Juni 2024",
  },
];

function Trending() {
  return (
    <div className="h-auto px-40 py-12 mx-auto border-b-2 border-black">
      <div className="mb-5">
        <TextUnderline label="Trending" />
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {trendingData.map((item) => (
          <TrendingCard
            key={item.no}
            no={item.no}
            image={item.image}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Trending;
