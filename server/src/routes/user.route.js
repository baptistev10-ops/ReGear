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
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", register);

router.post("/login", login);

router.get("/verifyMail/:token", verifyMail);

router.get("/current", currentUser);

router.delete("/deleteToken", logoutUser);

router.get("/getusers", getUsers);

router.delete("/getusers/:id", deleteUsers);

router.get("/getusers/:id", detailsUser);

export default router;
