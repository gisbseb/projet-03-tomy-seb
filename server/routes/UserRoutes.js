import express from "express";
import {
  getAllUsers,
  register,
  login,
} from "../controllers/userControllers.js";

const router = express.Router();

// router.get("/", getRandomUser);
router.get("/getAllUsers", getAllUsers);
// router.post("/", updateUser);
router.post("/register", register);
router.post("/login", login);

export default router;
