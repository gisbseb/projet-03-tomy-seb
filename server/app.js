import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import dbConnect from "./config/dbConnect.js";
import userRoutes from "./routes/UserRoutes.js";

// CONFIG
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());

//ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", userRoutes);

dbConnect();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
