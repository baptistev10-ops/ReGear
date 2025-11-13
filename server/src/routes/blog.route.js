import express from "express";
import {
  getAllBlogs,
  publishAd,
  getBlogById,
  getUserBlogCount,
} from "../controllers/blog.controller.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllBlogs);

router.post("/publish", protect, publishAd);

router.get("/blog/:id", getBlogById);

router.get("/user/:id/count", protect, getUserBlogCount);
export default router;
