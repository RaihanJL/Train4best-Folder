import { Sequelize } from "sequelize";

const db = new Sequelize("train4best", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
