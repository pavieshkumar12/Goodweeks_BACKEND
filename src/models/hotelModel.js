import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Hotel = sequelize.define(
  "Hotel",
  {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },

    name: { 
      type: DataTypes.STRING, 
      allowNull: false        // required: true
    },

    city: { 
      type: DataTypes.STRING, 
      allowNull: false        // required: true
    },

    rating: { 
      type: DataTypes.FLOAT, 
      allowNull: true         // optional like required: false
    },

    base_price: { 
      type: DataTypes.FLOAT, 
      allowNull: false        // required: true
    },
    available_from: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },

    available_to: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
  },
  { 
    tableName: "hotels",
    timestamps: false 
  }
);
