import express from "express";
import { getAllBlogs } from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/", getAllBlogs);

export default router;
