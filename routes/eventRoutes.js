import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  updateEvent,
} from "../controllers/eventController.js";

export const eventRoutes = Router();

//Define routes

eventRoutes.post("/events", createEvent);
eventRoutes.get("/events", getAllEvents);
eventRoutes.put("/events/:id", updateEvent);
eventRoutes.patch("/events/:id", updateEvent);
eventRoutes.delete("/events/:id", deleteEvent);

export default eventRoutes;
