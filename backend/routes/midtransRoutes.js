const express = require("express");
const router = express.Router();
const midtransClient = require("midtrans-client");
require("dotenv").config();

let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

router.post("/payment", async (req, res) => {
  const { items } = req.body; // menerima array of items dari request body

  // Buat transaction_details dan item_details berdasarkan items dari cart
  const transactionDetails = {
    order_id: `SPOTIX-${Date.now()}`,
    gross_amount: items.reduce((total, item) => total + item.price * item.quantity, 0), // menghitung total harga
  };

  const itemDetails = items.map(item => ({
    id: `${item.name}-${Math.random().toString(36).substr(2, 9)}`, // membuat ID unik untuk tiap item
    name: item.name,
    price: item.price,
    quantity: item.quantity
  }));

  let parameter = {
    transaction_details: transactionDetails,
    item_details: itemDetails,
  };

  try {
    const transaction = await snap.createTransactionToken(parameter);
    res.status(200).json({ transactionToken: transaction });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Failed to create transaction" });
  }
});

module.exports = router;