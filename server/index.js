import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.connect.js";
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/messages.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running....");
});
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
