import React from "react";
import TiketCard from "../card/TiketCard";
import TextUnderline from "../misc/TextUnderline";

const tiket = [
  {
    name: "VVIP",
    detail:
      "Selected Numbered Seating(s); para pengunjung dapat memilih seat-nya pada saat pembelian tiket, dan akan mendapatkan Amazing Goodie Bag(s) (diberikan oleh petugas pada saat memasuki area pertunjukan/ pagelaran). #enchantingANGGUN",
    expired: "2024-07-18T12:00:00",
    price: 3000000,
    stock: 200,
  },
  {
    name: "VIP",
    detail:
      "Randomized Numbered Seating(s); Pengunjung akan diberikan Best Available Seat(s). Tempat duduk di kategori ini akan diberi penomoran. #enchantingANGGUN",
    expired: "2024-07-18T12:00:00",
    price: 2500000,
    stock: 200,
  },
  {
    name: "Festival",
    detail:
      "Standing; para pengunjung di kategori ini dibebaskan untuk memilih lokasi terbaik pada area yang telah ditentukan untuk menyaksikan pertunjukan/ pagelaran (tanpa memiliki tempat duduk). #enchantingANGGUN",
    expired: "2024-07-18T12:00:00",
    price: 400000,
    stock: 200,
  },
];

function ListTiket() {
  return (
    <div>
      <TextUnderline label="Tiket" />
      {tiket.map((item, index) => (
        <TiketCard
          key={index}
          name={item.name}
          detail={item.detail}
          expired={item.expired}
          price={item.price}
          stock={item.stock}
        />
      ))}
    </div>
  );
}

export default ListTiket;
