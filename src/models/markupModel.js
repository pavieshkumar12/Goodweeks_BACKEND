import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Markup = sequelize.define(
  "Markup",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    markup: DataTypes.FLOAT,
  },
  { tableName: "markups", timestamps: false }
);
