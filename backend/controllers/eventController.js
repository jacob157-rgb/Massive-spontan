import { Event } from "../database/models";

export const getEvents = async (req, res) => {
  try {
    const eventData = await Event.findAll();
    if (eventData.length > 0) {
      res.status(200).json({ message: "Connection successful", data: eventData });
    } else {
      res.status(200).json({ message: "Connection failed", data: [] });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getEventsById = async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id);
    if (eventData) {
      res.status(200).json({ message: "Connection successful", data: eventData });
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createEvent = async (req, res) => {
  try {
    const eventData = await Event.create(req.body);
    res.status(201).json({ message: "Event has been created", data: eventData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    let eventData = await Event.findByPk(eventId);
    if (!eventData) {
      return res.status(404).json({ message: "Event not found" });
    }
    eventData = await eventData.update(req.body);
    res.status(200).json({ message: "Event has been updated", data: eventData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const eventData = await Event.findByPk(eventId);
    if (!eventData) {
      return res.status(404).json({ message: "Event not found" });
    }
    await eventData.destroy();
    res.status(200).json({ message: "Event has been deleted", data: eventData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
