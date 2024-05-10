import express from "express";
import {
  getBlogs,
  getBlogById,
  createBlog,
} from "../controllers/blogControllers.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getBlogs).post(protect, createBlog);
router.route("/:id").get(getBlogById);

export default router;
