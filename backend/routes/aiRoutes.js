import express from "express";
import {
  getAiSuggestions,
  enhanceContent,
  summarizeBlog,
  moderateComment,
  getBlogAnalytics,
  searchRecommendations,
} from "../controllers/aiController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// AI-Powered Blog Content Suggestions
router.route("/suggestions").post(protect, getAiSuggestions);

// Real-Time AI Content Enhancement
router.route("/enhance").post(protect, enhanceContent);

// AI-Driven Blog Summarization
router.route("/summarize/:blogId").post(protect, summarizeBlog);

// AI-Powered Comment Moderation
router.route("/moderate").post(protect, moderateComment);

// AI-Driven Blog Analytics
router.route("/analytics/:blogId").get(protect, getBlogAnalytics);

// AI-Powered Search and Recommendation System
router.route("/search").get(protect, searchRecommendations);

export default router;
