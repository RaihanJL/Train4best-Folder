import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Catalog = db.define(
  "Catalog",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    img_barang: {
      type: DataTypes.BLOB,
    },
    nama_barang: {
      type: DataTypes.STRING,
    },
    kategori_barang: {
      type: DataTypes.STRING,
    },
    desc_barang: {
      type: DataTypes.TEXT,
    },
    tahun_terbit: {
      type: DataTypes.STRING,
    },
    harga_barang: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Catalog;
