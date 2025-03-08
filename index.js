import express from "express";
import mongoose from "mongoose";
import eventRoutes from "./routes/eventRoutes.js";


// Create an express app
const app = express();
// Middleware to parse JSON
app.use(express.json());
// Use your routes
app.use("/api/v1", eventRoutes);

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
