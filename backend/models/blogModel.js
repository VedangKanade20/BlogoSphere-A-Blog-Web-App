// import mongoose from "mongoose";

// const reviewSchema = mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     comment: {
//       type: String,
//       required: true,
//     },
//     rating: {
//       type: Number,
//       required: true,
//     },
//     author: {
//       type: String,
//       required: true,
//     },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     blog: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Blog",
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const blogSchema = mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     title: {
//       type: String,
//       required: true,
//     },
//     content: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },

//     author: {
//       type: String,
//       required: true,
//     },
//     rating: {
//       type: Number,
//       required: true,
//       default: 0,
//     },

//     reviews: [reviewSchema],
//   },
//   { timestamps: true }
// );

// const Blog = mongoose.model("Blog", blogSchema);

// export default Blog;

import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const blogSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },

    reviews: [reviewSchema],
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
