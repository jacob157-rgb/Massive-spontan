const { CP } = require("../database/models");

const getCPs = async (req, res) => {
  try {
    const cpData = await CP.findAll();
    res.status(200).json({ message: "Connection successful", data: cpData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCPById = async (req, res) => {
  try {
    const cpData = await CP.findByPk(req.params.id);
    if (!cpData) {
      return res.status(404).json({ message: "CP not found" });
    }
    res.status(200).json({ message: "Connection successful", data: cpData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createCP = async (req, res) => {
  try {
    const cpData = await CP.create(req.body);
    res.status(201).json({ message: "CP has been created", data: cpData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateCP = async (req, res) => {
  try {
    const cpId = req.params.id;
    let cpData = await CP.findByPk(cpId);
    if (!cpData) {
      return res.status(404).json({ message: "CP not found" });
    }
    cpData = await cpData.update(req.body);
    res.status(200).json({ message: "CP has been updated", data: cpData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteCP = async (req, res) => {
  try {
    const CPId = req.params.id;
    const CPData = await CP.findByPk(CPId);
    if (!CPData) {
      return res.status(404).json({ message: "CP not found" });
    }
    await CPData.destroy();
    res.status(200).json({ message: "CP has been deleted", data: CPData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getCPs, getCPById, createCP, updateCP, deleteCP };
