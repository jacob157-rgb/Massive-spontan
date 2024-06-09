const { Tiket } = require("../database/models");

const getTikets = async (req, res) => {
  try {
    const tiketData = await Tiket.findAll();
    res.status(200).json({ message: "Connection successful", data: tiketData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getTiketById = async (req, res) => {
  try {
    const TiketData = await Tiket.findByPk(req.params.id);
    if (!TiketData) {
      return res.status(404).json({ message: "Tiket not found" });
    }
    res.status(200).json({ message: "Connection successful", data: TiketData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createTiket = async (req, res) => {
  try {
    const TiketData = await Tiket.create(req.body);
    res.status(201).json({ message: "Tiket has been created", data: TiketData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateTiket = async (req, res) => {
  try {
    const TiketId = req.params.id;
    let TiketData = await Tiket.findByPk(TiketId);
    if (!TiketData) {
      return res.status(404).json({ message: "Tiket not found" });
    }
    TiketData = await TiketData.update(req.body);
    res.status(200).json({ message: "Tiket has been updated", data: TiketData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteTiket = async (req, res) => {
  try {
    const TiketId = req.params.id;
    const TiketData = await Tiket.findByPk(TiketId);
    if (!TiketData) {
      return res.status(404).json({ message: "Tiket not found" });
    }
    await TiketData.destroy();
    res.status(200).json({ message: "Tiket has been deleted", data: TiketData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getTikets, getTiketById, createTiket, updateTiket, deleteTiket };
