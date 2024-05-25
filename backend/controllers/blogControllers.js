// import asyncHandler from "express-async-handler";

// import Blog from "../models/blogModel.js";

// /**
//  * @desc		Get all blogs
//  * @route		GET /api/blogs
//  * @access	public
//  */

// const getBlogs = asyncHandler(async (req, res) => {
//   const blogs = await Blog.find({});
//   res.json(blogs);
// });

// /**
//  * @desc		Get single blog
//  * @route		GET /api/blogs/:id
//  * @access	public
//  */

// const getBlogById = asyncHandler(async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);

//     if (blog) {
//       res.json(blog);
//     } else {
//       res.status(404).json({ message: "Blog not found" });
//     }
//   } catch (err) {
//     console.log(err.message);
//     res.json(err);
//   }
// });

// /**
//  * @desc		Create a product
//  * @route		POST /api/blogs/postBlog
//  * @access	private/admin
//  */

// // const createBlog = asyncHandler(async (req, res) => {
// //   const { title, content, image } = req.body;

// //   console.log("User:", req.user); // Add this line
// //   if (!req.user) {
// //     return res.status(401).json({ message: "User not authenticated" });
// //   }

// //   try {
// //     const newBlog = new Blog({
// //       title,
// //       content,
// //       image,
// //       author: req.user._id,
// //     });
// //     const createdBlog = await newBlog.save();
// //     res.status(201).json(createdBlog);
// //   } catch (err) {
// //     console.log(err.message);
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// const createBlog = asyncHandler(async (req, res) => {
//   const { title, content, image } = req.body;

//   try {
//     const newBlog = new Blog({
//       title,
//       content,
//       image,
//       user: req.user._id,
//     });
//     const createdBlog = await newBlog.save();
//     res.status(201).json(createdBlog);
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// /**
//  * @desc		Update a product
//  * @route		PUT/api/blogs/:id
//  * @access	private/admin
//  */

// const updateBlog = asyncHandler(async (req, res) => {
//   const { title, content, image } = req.body;

//   const blog = await Blog.findById(req.params.id);

//   if (blog) {
//     blog.title = title;
//     blog.content = content;
//     blog.image = image;

//     const updatedBlog = await blog.save();
//     res.json(updatedBlog);
//   } else {
//     res.status(404);
//     throw new Error("Blog not Found");
//   }
// });

// /**
//  * @desc		Delete a blog
//  * @route		DELETE /api/blogs/:id
//  * @access	private
//  */

// const deleteBlog = asyncHandler(async (req, res) => {
//   const blog = await Blog.findById(req.params.id);

//   if (blog) {
//     await blog.deleteOne();
//     res.json({ message: "Blog deleted" });
//   } else {
//     res.status(404);
//     throw new Error("Blog not Found");
//   }
// });

// /**
//  * @desc    Add review comment and rating to a blog
//  * @route   POST /api/blogs/:id/addReview
//  * @access  private
//  */
// const addBlogReview = asyncHandler(async (req, res) => {
//   const { name, comment, rating } = req.body;
//   const blogId = req.params.id;
//   const userId = req.user._id; // Assuming you have user information in the request
//   const userName = req.user.name;

//   try {
//     const blog = await Blog.findById(blogId);

//     if (!blog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }

//     if (name !== userName) {
//       return res.status(404).json({ message: "Enter your name correctly" });
//     }

//     // Add the review to the blog
//     blog.reviews.push({ user: userId, name, comment, rating });
//     // Recalculate the average rating
//     blog.averageRating = (
//       blog.reviews.reduce((total, review) => total + review.rating, 0) /
//       blog.reviews.length
//     ).toFixed(1); // Round to 1 decimal place

//     // Save the updated blog
//     await blog.save();
//     res.status(201).json({ message: "Review added successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// export {
//   addBlogReview,
//   createBlog,
//   deleteBlog,
//   getBlogById,
//   getBlogs,
//   updateBlog,
// };

// import asyncHandler from "express-async-handler";

// import Blog from "../models/blogModel.js";

// /**
//  * @desc		Get all blogs
//  * @route		GET /api/blogs
//  * @access	public
//  */

// const getBlogs = asyncHandler(async (req, res) => {
//   const blogs = await Blog.find({});
//   res.json(blogs);
// });

// /**
//  * @desc		Get single blog
//  * @route		GET /api/blogs/:id
//  * @access	public
//  */

// const getBlogById = asyncHandler(async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);

//     if (blog) {
//       res.json(blog);
//     } else {
//       res.status(404).json({ message: "Blog not found" });
//     }
//   } catch (err) {
//     console.log(err.message);
//     res.json(err);
//   }
// });

// /**
//  * @desc		Create a product
//  * @route		POST /api/blogs/postBlog
//  * @access	private/admin
//  */

// const createBlog = asyncHandler(async (req, res) => {
//   const { title, content, image } = req.body;
//   try {
//     const newBlog = new Blog({
//       title,
//       content,
//       image,
//       user: req.user._id,
//     });
//     const createdBlog = await newBlog.save();
//     res.status(201).json(createdBlog);
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// /**
//  * @desc		Update a product
//  * @route		PUT/api/blogs/:id
//  * @access	private/admin
//  */

// const updateBlog = asyncHandler(async (req, res) => {
//   const { title, content, image } = req.body;

//   const blog = await Blog.findById(req.params.id);

//   if (blog) {
//     blog.title = title;
//     blog.content = content;
//     blog.image = image;

//     const updatedBlog = await blog.save();
//     res.json(updatedBlog);
//   } else {
//     res.status(404);
//     throw new Error("Blog not Found");
//   }
// });

// /**
//  * @desc		Delete a blog
//  * @route		DELETE /api/blogs/:id
//  * @access	private
//  */

// const deleteBlog = asyncHandler(async (req, res) => {
//   const blog = await Blog.findById(req.params.id);

//   if (blog) {
//     await blog.deleteOne();
//     res.json({ message: "Blog deleted" });
//   } else {
//     res.status(404);
//     throw new Error("Blog not Found");
//   }
// });

// /**
//  * @desc    Add review comment and rating to a blog
//  * @route   POST /api/blogs/:id/addReview
//  * @access  private
//  */

// const addBlogReview = asyncHandler(async (req, res) => {
//   const { comment, rating } = req.body;
//   const blogId = req.params.id;
//   const userId = req.user._id; // Assuming you have user information in the request

//   try {
//     const blog = await Blog.findById(blogId);

//     if (!blog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }

//     // Add the review to the blog
//     blog.reviews.push({ user: userId, comment, rating });
//     // Recalculate the average rating
//     blog.ratings = (
//       blog.reviews.reduce((total, review) => total + review.rating, 0) /
//       blog.reviews.length
//     ).toFixed(1); // Round to 1 decimal place

//     // Save the updated blog
//     await blog.save();
//     res.status(201).json({ message: "Review added successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// export {
//   addBlogReview,
//   createBlog,
//   deleteBlog,
//   getBlogById,
//   getBlogs,
//   updateBlog,
// };

import asyncHandler from "express-async-handler";

import Blog from "../models/blogModel.js";

/**
 * @desc		Get all blogs
 * @route		GET /api/blogs
 * @access	public
 */

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({}).populate("author", "name email");
  res.json(blogs);
});

/**
 * @desc		Get single blog
 * @route		GET /api/blogs/:id
 * @access	public
 */

const getBlogById = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate(
      "author",
      "name email"
    );

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
 * @desc		Create a product
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
      author: req.user._id,
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
 * @desc    Add review comment and rating to a blog
 * @route   POST /api/blogs/:id/addReview
 * @access  private
 */
const addBlogReview = asyncHandler(async (req, res) => {
  const { name, comment, rating } = req.body;
  const blogId = req.params.id;
  const userId = req.user._id; // Assuming you have user information in the request
  const userName = req.user.name;

  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (name !== userName) {
      return res.status(404).json({ message: "Enter your name correctly" });
    }

    // Add the review to the blog
    blog.reviews.push({ user: userId, name, comment, rating });
    // Recalculate the average rating
    blog.averageRating = (
      blog.reviews.reduce((total, review) => total + review.rating, 0) /
      blog.reviews.length
    ).toFixed(1); // Round to 1 decimal place

    // Save the updated blog
    await blog.save();
    res.status(201).json({ message: "Review added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export {
  addBlogReview,
  createBlog,
  deleteBlog,
  getBlogById,
  getBlogs,
  updateBlog,
};
