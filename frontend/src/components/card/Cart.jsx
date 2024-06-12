import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";

function Cart() {
  const { cart } = useCart();

  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(amount);
  };

  const handlePayment = async () => {
    try {
      const response = await fetch("http://localhost:3000/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart, // mengirim seluruh item dalam keranjang
        }),
      });

      const data = await response.json();
      if (data.transactionToken) {
        window.snap.pay(data.transactionToken, {
          onSuccess: (result) => {
            console.log("Payment successful", result);
          },
          onPending: (result) => {
            console.log("Payment pending", result);
          },
          onError: (result) => {
            console.error("Payment error", result);
          },
          onClose: () => {
            console.log("Payment popup closed");
          },
        });
      } else {
        alert("Failed to create transaction");
      }
    } catch (error) {
      console.error("Error handling payment:", error);
      alert("Failed to create transaction");
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="relative w-full px-5 my-5 bg-white rounded-sm shadow-lg">
      <div className="flex items-center gap-3 pt-5 pb-20 justify-evenly">
        <img
          className="w-1/5 h-auto"
          src="/src/assets/img/logo2.png"
          alt="Logo"
        />
        {cart.length === 0 ? (
          <Link
            to="/event/tiket"
            className="absolute flex items-center px-3 py-2 text-white transform -start-2 bottom-5 bg-secondary">
            <span className="material-symbols-outlined">chevron_left</span>
            Pilih Tiket terlebih dahulu
          </Link>
        ) : (
          <div className="border-b border-black">
            {cart.map((item, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-center justify-between gap-16">
                  <p className="font-medium text-md md:text-xl">{item.name}</p>
                  <p className="font-medium text-md md:text-xl">28 Juli 2024</p>
                </div>
                <div className="flex items-center justify-between gap-16">
                  <p className="text-sm font-semibold">{item.quantity} tiket</p>
                  <p className="font-semibold">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between gap-16 mt-4">
              <p className="font-semibold text-md md:text-xl">Total Harga:</p>
              <p className="font-semibold text-md md:text-xl">{formatCurrency(totalPrice)}</p>
            </div>

          </div>
        )}
      </div>
      {cart.length > 0 && (
        <button
          onClick={handlePayment}
          className="absolute flex items-center px-3 py-2 text-white transform -end-2 bottom-5 bg-secondary">
          Lanjutkan Pembayaran
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      )}
    </div>
  );
}

export default Cart;
