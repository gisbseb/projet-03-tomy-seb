import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";

import userRoutes from "./routes/UserRoutes.js";

// CONFIG
dotenv.config();
const app = express();

//ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", userRoutes);

dbConnect();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
