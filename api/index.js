import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";
import path from 'path';

dotenv.config();

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 8001;

// Allow requests from any origin (for testing purposes)
app.use(cors({
    origin: 'https://blazekroclone.onrender.com',
    credentials: true,
  }));

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

// API Routes
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);

// Serve Static Files
app.use(express.static(path.join(__dirname, "blazekro/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "blazekro", "dist", "index.html"));
});

// Connect to MongoDB
mongoose.connect(process.env.DBURL).then(() => {
    console.log("Connected to the database");
}).catch((error) => {
    console.log("Error connecting to the database:", error);
});

// Start the Server
app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
});
