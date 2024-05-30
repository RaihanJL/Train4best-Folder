import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Courses = db.define(
  "e-learning",
  {
    img_skema: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    nama_skema: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export default Courses;
