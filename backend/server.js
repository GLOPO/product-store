import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from './routes/products.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()) // Required to parse JSON requests

app.use("/api/products", productRoutes)

// Postman

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost: ` + PORT);
});

//
