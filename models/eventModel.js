

import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
  {
    name: { 
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },

    location: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

 const Event = mongoose.model("Event", eventSchema)

 export default Event
