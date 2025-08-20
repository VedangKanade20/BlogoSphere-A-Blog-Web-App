// middlewares/uploadMiddleware.js
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "blogs", // Cloud folder
    allowed_formats: ["jpg", "jpeg", "png"],
    // Optional: custom public_id
    public_id: (req, file) =>
      `${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`,
  },
});

// Optional: add limits
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

export default upload;
