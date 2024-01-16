import express from "express";
import {
  getUser,
  getAllUsers,
  register,
  login,
  deleteUser,
  updateUser,
} from "../controllers/userControllers.js";
import { verifyToken } from "../middleware/auth.js";
import { isAdmin } from "../middleware/admin.js";

const router = express.Router();

router.get("/getUser/:id?", verifyToken, getUser);
router.get("/getAllUsers", verifyToken, getAllUsers);
router.post("/register", verifyToken, isAdmin, register);
router.post("/login", login);
router.delete("/delete/:id", verifyToken, isAdmin, deleteUser);
router.post("/updateUser", verifyToken, updateUser);

export default router;
