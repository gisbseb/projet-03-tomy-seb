import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";

dotenv.config();
const app = express();

dbConnect();
app.listen(() => {
  console.log("Server is running on port 3000");
});
