import React, { useState } from "react";
import { useCart } from "../../../contexts/CartContext";

function TiketCard({ name, detail, expired, price, stock }) {
  const [expanded, setExpanded] = useState(false);
  const { addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(0);
  const [selected, setSelected] = useState(false);

  const expiredtime = (expiredDate) => {
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember",
    ];

    const date = new Date(expiredDate);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const monthName = months[monthIndex];
    const WIBhours = (hours + 7) % 24;

    return `${day} ${monthName} ${year} • ${WIBhours}:${minutes < 10 ? "0" : ""}${minutes} WIB`;
  };

  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(amount);
  };

  const stockStatus = (stock) => {
    return stock > 0 ? "Tersedia" : "Habis";
  };

  const toggleDetail = () => {
    setExpanded(!expanded);
  };

  const incrementQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      setSelected(true);
      addToCart({ name, price });
    }
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart({ name });
    }
    if (quantity === 1) {
      setSelected(false);
    }
  };

  const cancelSelection = () => {
    setQuantity(0);
    setSelected(false);
    removeFromCart({ name }, true);  // Pass true to remove all quantities
  };

  return (
    <div className="relative my-5 border rounded-sm shadow-md border-c1b">
      <div className="flex flex-col p-5 mb-3 border-b">
        <p className="text-2xl font-medium md:text-3xl">{name}</p>
        <div className="flex items-center justify-between">
          <p className={`mt-2 text-sm md:text-base ${expanded ? "flex-grow" : "truncate"}`}>
            {detail}
          </p>
          <button className="text-gray-600 material-icons" onClick={toggleDetail}>
            {expanded ? "expand_less" : "expand_more"}
          </button>
        </div>
        <p className="mt-2 text-lg">{expiredtime(expired)}</p>
      </div>
      <div className="grid grid-cols-2 px-5 pb-3">
        <p className="text-lg md:text-xl">{formatCurrency(price)}</p>
        {selected ? (
          <div className="flex items-center gap-3">
            <button className="p-0.5 text-white rounded-sm material-symbols-outlined bg-secondary" onClick={decrementQuantity}>
              remove
            </button>
            <p className="text-lg font-medium">{quantity}</p>
            <button className="p-0.5 text-white rounded-sm material-symbols-outlined bg-secondary" onClick={incrementQuantity}>
              add
            </button>
          </div>
        ) : (
          <p className="text-lg md:text-xl">{stockStatus(stock)}</p>
        )}
      </div>
      {selected ? (
        <button className="flex absolute bottom-2 right-2 items-center justify-center p-1.5 text-white bg-secondary ml-2" onClick={cancelSelection}>
          Batal
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      ) : (
        <button className="flex absolute bottom-2 -right-2 items-center justify-center p-1.5 text-white bg-secondary ml-2" onClick={incrementQuantity} disabled={stock === 0}>
          Pilih Tiket
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      )}
    </div>
  );
}

export default TiketCard;
