import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import dbConnect from "./config/dbConnect.js";
import userRoutes from "./routes/UserRoutes.js";
import cors from "cors";

import cookieParser from "cookie-parser";
// CONFIG
dotenv.config();
dbConnect();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
