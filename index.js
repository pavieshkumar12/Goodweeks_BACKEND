import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./src/config/database.js";
import morgan from "morgan";

import allRoutes from "./src/routes/allRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("combined"));

// All routes
app.use("/api", allRoutes);


// Database Connection
try {
  await sequelize.authenticate();
  console.log("MySQL Connected...");
} catch (err) {
  console.error("DB Connection Error:", err);
}

app.listen(8888, () => console.log("Server running on port 8888"));
