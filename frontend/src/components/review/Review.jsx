import React from "react";
import TextUnderline from "../misc/TextUnderline";
import Comment from "./Comment";

const comments = [
  {
    name: "Rina Mutia",
    rate: 4,
    likes: 10,
    dislikes: 2,
    comment:
      "Website Spotix mudah digunakan dan proses pembelian tiketnya cepat. Saya juga suka dengan pilihan acara yang beragam.",
  },
  {
    name: "Shalwa Rifdyana",
    rate: 5,
    likes: 20,
    dislikes: 1,
    comment:
      "Website Spotix terpercaya dan aman untuk membeli tiket. Saya belum pernah mengalami kendala saat membeli tiket di website ini.",
  },
  {
    name: "Rizaldo Pardede",
    rate: 4,
    likes: 15,
    dislikes: 1,
    comment:
      "Website Spotix user-friendly dan informatif. Saya mudah menemukan acara yang saya inginkan dan membeli tiketnya dengan cepat.",
  },
  {
    name: "Jekopp",
    rate: 4,
    likes: 22,
    dislikes: 3,
    comment:
      "Website Spotix adalah platform terpercaya untuk membeli tiket berbagai acara. Saya selalu puas dengan pelayanannya.",
  },
  {
    name: "Seri Ayudia",
    rate: 5,
    likes: 25,
    dislikes: 2,
    comment:
      "Website Spotix sangat praktis untuk membeli tiket berbagai acara tanpa harus antri dan Fitur e-wallet yang memudahkan pembayaran.",
  },
  // Add more comments as needed
];

function Review() {
  return (
    <>
      <TextUnderline label="Ulasan" />
      <div className="inline-flex items-center px-2 py-1 my-2 border border-black rounded-sm">
        <span className="text-yellow-400 material-icons">star</span>
        <p className="ml-2 text-lg font-medium">4.9</p>
      </div>
      <Comment comments={comments} />
    </>
  );
}

export default Review;
