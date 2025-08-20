import express from "express";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Temporary file storage in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload to Cloudinary
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Upload buffer directly to Cloudinary
    const result = await cloudinary.uploader.upload_stream(
      { folder: "blogs" },
      (error, result) => {
        if (error) return res.status(500).json({ message: error.message });
        res.json(result.secure_url); // 👈 return URL to frontend
      }
    );

    // Pipe buffer
    file.stream.pipe(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
