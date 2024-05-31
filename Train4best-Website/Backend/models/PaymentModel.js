import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Payment = db.define(
  "Payment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transactionDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    receipt: {
      type: DataTypes.STRING,
      allowNull: true, // Allow null to handle case when no receipt is uploaded
    },
  },
  {
    freezeTableName: true,
  }
);

export default Payment;
