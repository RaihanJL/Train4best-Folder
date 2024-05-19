import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Contact = db.define(
  "Contact",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Contact;
