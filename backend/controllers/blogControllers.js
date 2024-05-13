import asyncHandler from "express-async-handler";

import Blog from "../models/blogModel.js";
import User from "../models/userModel.js";

/**
 * @desc		Get all blogs
 * @route		GET /api/blogs
 * @access	public
 */

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

/**
 * @desc		Get single blog
 * @route		GET /api/blogs/:id
 * @access	public
 */

const getBlogById = asyncHandler(async (req, res) => {
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
});

/**
 * @desc		Create a blogd
 * @route		POST /api/blogs/postBlog
 * @access	private/admin
 */
const createBlog = asyncHandler(async (req, res) => {
  const { title, content, image } = req.body;
  try {
    const newBlog = new Blog({
      title,
      content,
      image,
      user: req.user._id,
    });
    const createdBlog = await newBlog.save();
    res.status(201).json(createdBlog);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

/**
 * @desc		Update a product
 * @route		PUT/api/blogs/:id
 * @access	private/admin
 */
const updateBlog = asyncHandler(async (req, res) => {
  const { title, content, image } = req.body;

  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.title = title;
    blog.content = content;
    blog.image = image;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error("Blog not Found");
  }
});

/**
 * @desc		Delete a blog
 * @route		DELETE /api/blogs/:id
 * @access	private
 */
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    await blog.deleteOne();
    res.json({ message: "Blog deleted" });
  } else {
    res.status(404);
    throw new Error("Blog not Found");
  }
});

/**
 * @desc		Create a new review
 * @route		POST /api/products/:id/reviews
 * @access	private
 */

const createBlogReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  const alreadyReviewed = blog.reviews.find(
    (review) => review.user.toString() === req.user._id.toString()
  );

  if (alreadyReviewed) {
    res.status(400);
    throw new Error("Blog already reviewed");
  }

  const review = {
    title: req.user.title,
    rating: +rating,
    comment,
    user: req.user._id,
  };

  blog.reviews.push(review);
  blog.numReviews = blog.reviews.length;

  /* const totalRating = blog.reviews.reduce(
    (acc, currVal) => acc + currVal.rating,
    0
  );
  blog.rating = totalRating / blog.reviews.length; */

  await blog.save();

  res.status(201).json({ message: "Review added successfully" });
});

export {
  getBlogById,
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  createBlogReview,
};
