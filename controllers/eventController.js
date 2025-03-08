import Event from "../models/eventModel.js";

export const createEvent = async (req, res, next) => {
  try {
    const event = await Event.create(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    next(error);
  }
};

export const getAllEvents = async (req, res, next) => {
  try {
    const event = await Event.find();
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};    

export const deleteEvent = async (req, res) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: `Event with id ${req.params.id} deleted` });
};
