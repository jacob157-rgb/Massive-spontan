const { Event } = require("../database/models");

const getEvents = async (req, res) => {
  try {
    const eventData = await Event.findAll();
    if (eventData.length > 0) {
      res
        .status(200)
        .json({ message: "Connection successful", data: eventData });
    } else {
      res.status(200).json({ message: "Connection failed", data: [] });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const getEventsById = async (req, res) => {
  try {
    const eventData = await Event.findOne({ where: { id: req.params.id } });
    if (eventData.length > 0) {
      res
        .status(200)
        .json({ message: "Connection successful", data: eventData });
    } else {
      res.status(200).json({ message: "Connection failed", data: [] });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const createEvent = async (req, res) => {
  try {
    const eventData = await Event.create(req.body);
    if (eventData.length > 0) {
      res
        .status(201)
        .json({ message: "Event has been created", data: eventData });
    } else {
      res.status(200).json({ message: "Connection failed", data: [] });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const updateEvent = async (req, res) => {
  try {
    const EventId = req.params.id;
    let EventData = await Event.findByPk(EventId);
    if (!EventData) {
      return res.status(404).json({ message: "Event not found" });
    }
    EventData = await EventData.update(req.body);
    res
      .status(200)
      .json({ message: "Event has been updated", data: EventData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const EventId = req.params.id;
    const EventData = await Event.findByPk(EventId);
    if (!EventData) {
      return res.status(404).json({ message: "Event not found" });
    }
    await EventData.destroy();
    res
      .status(200)
      .json({ message: "Event has been deleted", data: EventData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getEvents,
  getEventsById,
  createEvent,
  updateEvent,
  deleteEvent,
};
