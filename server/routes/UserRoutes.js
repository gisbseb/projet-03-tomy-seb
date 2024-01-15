import express from "express";
import { getAllUsers, createUser } from "../controllers/userControllers.js";

const router = express.Router();

// router.get("/", getRandomUser);
router.get("/getAllUsers", getAllUsers);
// router.post("/", updateUser);
router.post("/createUser", createUser);

export default router;
