import { Rekening } from "../database/models";

export const getRekenings = async (req, res) => {
  try {
    const rekeningData = await Rekening.findAll();
    res.status(200).json({ message: "Connection successful", data: rekeningData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRekeningsById = async (req, res) => {
  try {
    const rekeningData = await Rekening.findByPk(req.params.id);
    if (!rekeningData) {
      return res.status(404).json({ message: "Rekening not found" });
    }
    res.status(200).json({ message: "Connection successful", data: rekeningData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRekening = async (req, res) => {
  try {
    const rekeningData = await Rekening.create(req.body);
    res.status(201).json({ message: "Rekening has been created", data: rekeningData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateRekening = async (req, res) => {
  try {
    const rekeningId = req.params.id;
    let rekeningData = await Rekening.findByPk(rekeningId);
    if (!rekeningData) {
      return res.status(404).json({ message: "Rekening not found" });
    }
    rekeningData = await rekeningData.update(req.body);
    res.status(200).json({ message: "Rekening has been updated", data: rekeningData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteRekening = async (req, res) => {
  try {
    const rekeningId = req.params.id;
    const rekeningData = await Rekening.findByPk(rekeningId);
    if (!rekeningData) {
      return res.status(404).json({ message: "Rekening not found" });
    }
    await rekeningData.destroy();
    res.status(200).json({ message: "Rekening has been deleted", data: rekeningData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
