import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="relative w-full my-5 bg-white rounded-sm shadow-lg">
      <div className="flex items-center gap-3 pt-5 pb-20 justify-evenly">
        <img
          className="w-1/5 h-auto"
          src="/src/assets/img/logo2.png"
          alt="Logo"
        />
        {/* <p className="text-xl font-medium">Pilih tiket pada tab tiket</p> */}
        <div className="border-b border-black">
          <div className="flex items-center justify-between gap-16">
            <p className="text-xl font-medium">VVIP</p>
            <p className="text-xl font-medium">28 Juli 2024</p>
          </div>
          <div className="flex items-center justify-between gap-16">
            <p className="text-sm font-semibold">1 tiket</p>
            <p className="font-semibold">Rp3.000.000,00</p>
          </div>
        </div>
      </div>
      {/* <Link
        to="/event/tiket"
        className="absolute flex items-center px-3 py-2 text-white transform -translate-x-2 bottom-5 bg-secondary">
        <span className="material-symbols-outlined">chevron_left</span>
        Pilih Tiket terlebih dahulu
      </Link> */}
      <Link
        to="/event/tiket"
        className="absolute flex items-center px-3 py-2 text-white transform -end-2 bottom-5 bg-secondary">
        Lanjutkan Pembayaran
        <span className="material-symbols-outlined">chevron_right</span>
      </Link>
    </div>
  );
}

export default Cart;
