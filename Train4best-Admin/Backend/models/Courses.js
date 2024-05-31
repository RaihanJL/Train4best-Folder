import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Course = db.define('courses', {
    name_course: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price_course: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        get() {
            const priceString = this.getDataValue('price_course');
            return parseFloat(priceString.replace('$', ''));
        },
        set(value) {
            this.setDataValue('price_course', '$' + value.toFixed(2));
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Course;
