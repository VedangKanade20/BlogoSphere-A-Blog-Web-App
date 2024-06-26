import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import cors from "cors";

import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config(); // For Env

connectDB(); // connection to Mongodb

const app = express();
app.use(express.json()); // Accepting the json data

const corsOptions = {
  origin: "https://localhost:3000", // Replace with your Netlify URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies if needed
  optionsSuccessStatus: 204,
};

// Enable CORS
app.use(cors()); // Use the cors middleware

app.get("/", (req, res) => {
  res.send("API is running");
});

//Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);
app.use("/api/uploads", uploadRoutes);

//Create static folder
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Middleware
app.use(notFound);
app.use(errorHandler);

//Whole ENV Setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold
  );
});
