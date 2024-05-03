import express from "express";
import asyncHandler from "express-async-handler";

import Blog from "../models/blogModel.js";

const router = express.Router(); //created a routing

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const blogs = await Blog.find({});
    res.json(blogs);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);

      if (blog) {
        res.json(blog);
      } else {
        res.status(404).json({ message: "Blog not found" });
      }
    } catch (err) {
      console.log(err.message);
      res.json(err);
    }
  })
);

export default router;
