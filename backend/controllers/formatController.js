import { Format } from "../database/models";

export const getFormats = async (req, res) => {
  try {
    const formatData = await Format.findAll();
    res.status(200).json({ message: "Connection successful", data: formatData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getFormatsById = async (req, res) => {
  try {
    const formatData = await Format.findByPk(req.params.id);
    if (!formatData) {
      return res.status(404).json({ message: "Format not found" });
    }
    res.status(200).json({ message: "Connection successful", data: formatData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createFormat = async (req, res) => {
  try {
    const formatData = await Format.create(req.body);
    res.status(201).json({ message: "Format has been created", data: formatData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateFormat = async (req, res) => {
  try {
    const formatId = req.params.id;
    let formatData = await Format.findByPk(formatId);
    if (!formatData) {
      return res.status(404).json({ message: "Format not found" });
    }
    formatData = await formatData.update(req.body);
    res.status(200).json({ message: "Format has been updated", data: formatData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteFormat = async (req, res) => {
  try {
    const formatId = req.params.id;
    const formatData = await Format.findByPk(formatId);
    if (!formatData) {
      return res.status(404).json({ message: "Format not found" });
    }
    await formatData.destroy();
    res.status(200).json({ message: "Format has been deleted", data: formatData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
