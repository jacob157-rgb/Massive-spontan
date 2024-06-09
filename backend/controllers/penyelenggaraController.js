const { Penyelenggara } = require("../database/models");

const getPenyelenggaras = async (req, res) => {
  try {
    const penyelenggaraData = await Penyelenggara.findAll();
    res.status(200).json({ message: "Connection successful", data: penyelenggaraData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getPenyelenggarasById = async (req, res) => {
  try {
    const penyelenggaraData = await Penyelenggara.findByPk(req.params.id);
    if (!penyelenggaraData) {
      return res.status(404).json({ message: "Penyelenggara not found" });
    }
    res.status(200).json({ message: "Connection successful", data: penyelenggaraData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPenyelenggara = async (req, res) => {
  try {
    const penyelenggaraData = await Penyelenggara.create(req.body);
    res.status(201).json({ message: "Penyelenggara has been created", data: penyelenggaraData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updatePenyelenggara = async (req, res) => {
  try {
    const penyelenggaraId = req.params.id;
    let penyelenggaraData = await Penyelenggara.findByPk(penyelenggaraId);
    if (!penyelenggaraData) {
      return res.status(404).json({ message: "Penyelenggara not found" });
    }
    penyelenggaraData = await penyelenggaraData.update(req.body);
    res.status(200).json({ message: "Penyelenggara has been updated", data: penyelenggaraData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deletePenyelenggara = async (req, res) => {
  try {
    const penyelenggaraId = req.params.id;
    const penyelenggaraData = await Penyelenggara.findByPk(penyelenggaraId);
    if (!penyelenggaraData) {
      return res.status(404).json({ message: "Penyelenggara not found" });
    }
    await penyelenggaraData.destroy();
    res.status(200).json({ message: "Penyelenggara has been deleted", data: penyelenggaraData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getPenyelenggaras, getPenyelenggarasById, createPenyelenggara, updatePenyelenggara, deletePenyelenggara };
