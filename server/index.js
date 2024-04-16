import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.connect.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
