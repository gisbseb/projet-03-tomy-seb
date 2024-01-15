import express from "express";
import {
  getAllUsers,
  register,
  login,
  deleteUser,
  updateUser,
} from "../controllers/userControllers.js";

const router = express.Router();

// router.get("/", getRandomUser);
router.get("/getAllUsers", getAllUsers);
router.post("/register", register);
router.post("/login", login);
router.delete("/delete/:id", deleteUser);
router.post("/updateUser", updateUser);

export default router;
