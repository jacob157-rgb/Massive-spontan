import React from "react";
import TextUnderline from "../misc/TextUnderline";

function SnkCard() {
  return (
    <div className="py-5">
      <TextUnderline label="Syarat & Ketentuan" />
      <ul className="my-3 ml-5 list-disc">
        <li>
          Harga sudah termasuk pajak pagelaran & biaya admin portal
          pembelian E-Ticket, akan tetapi belum termasuk biaya transaksi per
          pembayaran.
        </li>
        <li>
          E-Ticket tidak boleh diperjualbelikan, dipindahtangankan, diduplikasi,
          disalahgunakan, diuangkan, maupun dikembalikan.
        </li>
        <li>
          Pembeli wajib mengisi data diri pribadi saat melakukan
          pembelian E-Ticket.
        </li>
        <li>
          1 (satu) akun email dapat digunakan untuk pembelian lebih dari 1
          (satu) kali transaksi, dengan maksimum pembelian sejumlah 10
          (sepuluh) buah E-Ticket per transaksi.
        </li>
        <li>
          Penjualan E-Ticket sewaktu-waktu dapat dihentikan atau dimulai sesuai
          dengan kebijakan dari Penyelenggara/ Promotor.
        </li>
        <li>
          Pengguna kursi roda/ penyandang disabilitas hanya dapat membeli tiket
          dengan kategori VVIP.
        </li>
        <li>
          Penyelenggara/ Promotor tidak bertanggung jawab atas kelalaian
          pembeli, yang mengakibatkan E-Ticket jatuh ke tangan orang lain (dalam
          penguasaan orang lain).
        </li>
      </ul>
    </div>
  );
}

export default SnkCard;
