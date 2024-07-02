import { Topik } from "../database/models";

export const getTopiks = async (req, res) => {
  try {
    const topikData = await Topik.findAll();
    res.status(200).json({ message: "Connection successful", data: topikData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTopikById = async (req, res) => {
  try {
    const topikData = await Topik.findByPk(req.params.id);
    if (!topikData) {
      return res.status(404).json({ message: "Topik not found" });
    }
    res.status(200).json({ message: "Connection successful", data: topikData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTopik = async (req, res) => {
  try {
    const topikData = await Topik.create(req.body);
    res.status(201).json({ message: "Topik has been created", data: topikData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateTopik = async (req, res) => {
  try {
    const topikId = req.params.id;
    let topikData = await Topik.findByPk(topikId);
    if (!topikData) {
      return res.status(404).json({ message: "Topik not found" });
    }
    topikData = await topikData.update(req.body);
    res.status(200).json({ message: "Topik has been updated", data: topikData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTopik = async (req, res) => {
  try {
    const topikId = req.params.id;
    const topikData = await Topik.findByPk(topikId);
    if (!topikData) {
      return res.status(404).json({ message: "Topik not found" });
    }
    await topikData.destroy();
    res.status(200).json({ message: "Topik has been deleted", data: topikData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
