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

const __dirname = path.resolve()
const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true
}));
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));




app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
});

mongoose.connect(process.env.DBURL).then(() => {
    console.log("Connected to the database");
}).catch((error) => {
    console.log("Error connecting to the database:", error);
});

app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);


app.use(express.static(path.join(__dirname, "blazekro/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "blazekro", "dist", "index.html"));
});