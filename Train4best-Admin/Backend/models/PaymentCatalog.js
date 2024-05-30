import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const CatalogPay = db.define(
  "Payment_Catalog",
  {
    email_user: {
      type: DataTypes.STRING,
    },
    id_barang: {
      type: DataTypes.STRING,
    },
    payment_method: {
      type: DataTypes.STRING,
    },
    receipt_payment: {
      type: DataTypes.BLOB,
    },
  },
  {
    freezeTableName: true,
  }
);

export default CatalogPay;
