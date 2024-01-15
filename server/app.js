import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";

import userRoutes from "./routes/UserRoutes.js";
import cors from "cors";
// CONFIG
dotenv.config();
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

//ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", userRoutes);

dbConnect();
app.listen(() => {
  console.log("Server is running on port 3000");
});
