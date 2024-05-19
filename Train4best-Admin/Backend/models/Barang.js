import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Barang = db.define('catalog', {
    img_barang: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    nama_barang: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kategori_barang: {
        type: DataTypes.STRING,
        allowNull: false
    },
    desc_barang: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    tahun_terbit: {
        type: DataTypes.STRING, 
        allowNull: true
    },
    harga_barang: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

export default Barang;