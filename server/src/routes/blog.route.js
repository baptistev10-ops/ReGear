import express from "express";
import { getAllBlogs, publishAd } from "../controllers/blog.controller.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllBlogs);

router.post("/publish", protect, publishAd);

export default router;
