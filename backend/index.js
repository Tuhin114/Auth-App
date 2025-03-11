import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoutes.js";
import connectMongoDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// Middleware to parse JSON request bodies
app.use(express.json()); // for parsing application/json

// Middleware to parse URL-encoded request bodies (if you're using form data)
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRoute);

app.listen(8000, () => {
  console.log("Server is running on PORT 8000");
  connectMongoDB();
});
