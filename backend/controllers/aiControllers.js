import asyncHandler from "express-async-handler";
import axios from "axios";
import Blog from "../models/blogModel";

const getAiSuggestions = asyncHandler(async (req, res) => {
  const { keyword } = req.body;

  if (!keyword) {
    return res.status(400).json({ message: "Keyword is required" });
  }

  const response = await axios.post(
    "https://api.example.com/suggestions",
    { keyword, userId: req.user._id },
    {
      headers: { Authorization: `Bearer ${process.env.AI_API_KEY}` },
    }
  );

  res.json(response.data.suggestions);
});

const enhanceContent = asyncHandler(async (req, res) => {
  const { content } = req.body;
  if (!content) {
    res.status(400).json({ message: "Content is required" });
    return;
  }

  const response = await axios.post(
    "https://api.example.com/enhance",
    { content },
    {
      headers: { Authorization: `Bearer ${process.env.AI_API_KEY}` },
    }
  );
  res.json(response.data.enhancedContent);
});

const summarizeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const blog = await Blog.findById(blogId);

  if (!blog) {
    res.status(404).json({ message: "Blog not found" });
    return;
  }

  const response = await axios.post(
    "https://api.example.com/summarize",
    { text: blog.content },
    {
      headers: { Authorization: `Bearer ${process.env.AI_API_KEY}` },
    }
  );

  blog.summary = response.data.summary;
  await blog.save();
  res.json({ summary: blog.summary });
});

const moderateComment = asyncHandler(async (req, res) => {
  const { comment } = req.body;
  if (!comment) {
    res.status(400).json({ message: "Comment is required" });
    return;
  }

  const response = await axios.post(
    "https://api.example.com/moderate",
    { text: comment },
    {
      headers: { Authorization: `Bearer ${process.env.AI_API_KEY}` },
    }
  );

  res.json({ moderationResult: response.data });
});

const getBlogAnalytics = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const blog = await Blog.findById(blogId);

  if (!blog) {
    res.status(404).json({ message: "Blog not found" });
    return;
  }

  const response = await axios.post(
    "https://api.example.com/analytics",
    {
      blogData: {
        views: blog.views || 0,
        reviews: blog.reviews.length,
        averageRating: blog.averageRating || 0,
      },
    },
    {
      headers: { Authorization: `Bearer ${process.env.AI_API_KEY}` },
    }
  );

  res.json(response.data.analytics);
});

const searchRecommendations = asyncHandler(async (req, res) => {
  const { query } = req.query;
  if (!query) {
    res.status(400).json({ message: "Search query is required" });
    return;
  }

  const response = await axios.get("https://api.example.com/search", {
    params: { query, userId: req.user._id },
    headers: { Authorization: `Bearer ${process.env.AI_API_KEY}` },
  });

  res.json(response.data.recommendations);
});

export {
  searchRecommendations,
  getBlogAnalytics,
  moderateComment,
  summarizeBlog,
  enhanceContent,
  getAiSuggestions,
};
