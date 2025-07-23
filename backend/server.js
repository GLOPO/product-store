import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from './routes/products.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()); // @desc allows to accept json data in the req.body

app.use("/api/products", productRoutes)

// Postman

app.listen(5000, () => {
  connectDB();
  console.log(`Server started at http://localhost: ` + PORT);
});

//
