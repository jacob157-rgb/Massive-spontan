// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const { User } = require("../database/models/Users");
// // const { sendOTP, verifyOTP } = require("../utils/otp"); // Fungsi untuk mengirim dan memverifikasi OTP

// router.post("/send-otp", async (req, res) => {
//   const { email } = req.body;
//   try {
//     // Send OTP to the provided email
//     await sendOTP(email);
//     res.status(200).send("OTP sent successfully");
//   } catch (error) {
//     console.error("Error sending OTP:", error);
//     res.status(500).send("Failed to send OTP");
//   }
// });

// router.post("/verify-otp", async (req, res) => {
//   const { email, otp } = req.body;
//   try {
//     // Verify the OTP
//     const isVerified = await verifyOTP(email, otp);
//     if (isVerified) {
//       res.status(200).send("OTP verified successfully");
//     } else {
//       res.status(400).send("Invalid OTP");
//     }
//   } catch (error) {
//     console.error("Error verifying OTP:", error);
//     res.status(500).send("Failed to verify OTP");
//   }
// });

// module.exports = router;
