const { Tag } = require("../database/models");

const getTags = async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.status(200).json({ message: "Connection successful", data: tagData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getTagsById = async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id);
    if (!tagData) {
      return res.status(404).json({ message: "Tag not found" });
    }
    res.status(200).json({ message: "Connection successful", data: tagData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createTag = async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(201).json({ message: "Tag has been created", data: tagData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateTag = async (req, res) => {
  try {
    const tagId = req.params.id;
    let tagData = await Tag.findByPk(tagId);
    if (!tagData) {
      return res.status(404).json({ message: "Tag not found" });
    }
    tagData = await tagData.update(req.body);
    res.status(200).json({ message: "Tag has been updated", data: tagData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteTag = async (req, res) => {
  try {
    const tagId = req.params.id;
    const tagData = await Tag.findByPk(tagId);
    if (!tagData) {
      return res.status(404).json({ message: "Tag not found" });
    }
    await tagData.destroy();
    res.status(200).json({ message: "Tag has been deleted", data: tagData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getTags, getTagsById, createTag, updateTag, deleteTag };
