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
  const { productName, price, quantity } = req.body;

  let parameter = {
    item_details: [
      {
        id: "VVIP-ANGG",
        name: productName,
        price: price,
        quantity: quantity,
      },
    ],
    transaction_details: {
      order_id: `SPOTIX-${Date.now()}`,
      gross_amount: price * quantity,
    },
  };

  try {
    const transaction = await snap.createTransactionToken(parameter);
    res.status(200).json(transaction);
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Failed to create transaction" });
  }
});

module.exports = router;