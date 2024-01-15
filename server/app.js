import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";

dotenv.config();
const app = express();

<<<<<<<<< Temporary merge branch 1
dbConnect();
app.listen(3000, () => {

  console.log("Server is running on port 3000");
});
