const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "train4best",
});

// Parse JSON bodies using express.json()
app.use(express.json());

// Your routes and other middleware

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/catalog", (req, res) => {
  const sql = "SELECT * FROM catalog_page";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/certification", (req, res) => {
  const sql = "SELECT * FROM certification";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/contact", (req, res) => {
  const sql = "SELECT * FROM contact_us";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/course", (req, res) => {
  const sql = "SELECT * FROM course";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/coursedetail", (req, res) => {
  const sql = "SELECT * FROM course_detail";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/paymentCatalog", (req, res) => {
  const sql = "SELECT * FROM payment_catalog";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/paymentCourse", (req, res) => {
  const sql = "SELECT * FROM payment_course";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const sql = `DELETE FROM users WHERE id = ${userId}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error deleting user:", err);
      return res.status(500).json({ error: "An error occurred" });
    }
    console.log(`User with ID ${userId} deleted successfully`);
    return res.json({ message: "User deleted successfully" });
  });
});

app.get("/", (re, res) => {
  return res.json("Testing");
});

app.listen(8081, () => {
  console.log("Listening");
});
