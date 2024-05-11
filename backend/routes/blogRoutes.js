import express from "express";
import {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
} from "../controllers/blogControllers.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getBlogs).post(protect, createBlog);
router.route("/:id").get(getBlogById).put(protect, updateBlog);

export default router;
