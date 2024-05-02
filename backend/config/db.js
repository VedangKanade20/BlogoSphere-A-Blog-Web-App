import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.bold.underline
    );
  } catch (err) {
    console.error(`Error: ${err.message}`.red.underline);
    process.exit(1);
  }
};

export default connectDB;
