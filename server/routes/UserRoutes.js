import express from "express";
import {
  getUser,
  getAllUsers,
  register,
  login,
  deleteUser,
  updateUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.get("/getUser/:id?", getUser);
router.get("/getAllUsers", getAllUsers);
router.post("/register", register);
router.post("/login", login);
router.delete("/delete/:id", deleteUser);
router.put("/updateUser", updateUser);

export default router;
