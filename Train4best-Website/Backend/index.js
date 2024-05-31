import express from "express";
import db from "./config/database.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import Payment from "./models/PaymentModel.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ dest: "uploads/" }); // Assuming you want to store files in the 'uploads/' directory
app.use(upload.single("receipt"));

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

// Endpoint to fetch image URLs from database
app.get("/images", async (req, res) => {
  try {
    const catalogItems = await Catalog.findAll();
    const imageUrls = catalogItems.map((item) => item.img_barang);
    res.json(imageUrls);
  } catch (error) {
    console.error("Error fetching image URLs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(5000, () => console.log("Server running at port 5000"));
