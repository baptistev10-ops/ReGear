import express from "express";
import {
  login,
  register,
  verifyMail,
  currentUser,
  logoutUser,
  getUsers,
  deleteUsers,
  detailsUser,
  googleAuth,
  confirmPassword,
} from "../controllers/user.controller.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", register);

router.post("/login", login);

router.post("/auth-google", googleAuth);

router.get("/verifyMail/:token", verifyMail);

router.get("/current", currentUser);

router.delete("/deleteToken", logoutUser);

router.get("/getusers", getUsers);

router.delete("/:id", deleteUsers);

router.get("/getusers/:id", detailsUser);

router.post("/confirm-delete", protect, confirmPassword);

export default router;
