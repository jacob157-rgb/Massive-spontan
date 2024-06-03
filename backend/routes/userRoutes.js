const express = require("express");
const router = express.Router();
const { User } = require("../database/models");

router.get('/', (req, res) => {
    res.json({
        message: "Welcome User Route",
    });
});

module.exports = router;
