import React from "react";
import TextUnderline from "../misc/TextUnderline";

function DescriptionCard() {
  return (
    <div className="py-5">
      <TextUnderline label="Deskripsi" />
      <p className="my-3 text-justify">
        Pertunjukan atau pagelaran ENCHANTING ini dipersembahkan bagi para
        penggemar ANGGUN, super star asal Indonesia dengan berjuta prestasi yang
        telah berhasil menaklukan kancah dunia musik internasional. Dengan
        alunan musik yang akan dipandu oleh Andi Rianto & Magenta Orchestra,
        Sang DIVA beserta beberapa teman akan berkolaborasi, untuk kembali
        memperdengarkan lagu-lagu hits-nya, di antaranya Mimpi, Snow On The
        Sahara, Tua-Tua Keladi, Still Reminds Me, Bayang Bayang Ilusi, Yang ‘Ku
        Tunggu, dan lainnya.
      </p>
      <p className="font-bold">
        OPEN GATE @ 16.45 WIB <br />
        SHOW START @ 18.00 WIB
      </p>
      <p className="mt-3 font-bold">
        Pengunaan E-Ticket:#enchantingANGGUN <br />
      </p>
      <ul className="ml-5 list-disc">
        <li>
          Untuk dapat memasuki venue pertunjukan atau pagelaran, pengunjung
          hanya perlu menunjukan E-Ticket yang diterima melalui email dari
          Spotix.com.
        </li>
        <li>
          Harap membawa kartu identitas asli dan E-Ticket dari Spotix.com untuk
          diperlihatkan pada petugas pada saat memasuki area pertunjukan atau
          pagelaran, area PINTU masuk, sesuai dengan KATEGORI masing-masing.
        </li>
      </ul>
    </div>
  );
}

export default DescriptionCard;
