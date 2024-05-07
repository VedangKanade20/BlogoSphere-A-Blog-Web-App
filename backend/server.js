import colors from "colors";
import dotenv from "dotenv";
import express from "express";

import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config(); // For Env

connectDB(); // connection to Mongodb

const app = express();
app.use(express.json()); // Accepting the json data

app.get("/", (req, res) => {
  res.send("API is running");
});

//Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);

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
