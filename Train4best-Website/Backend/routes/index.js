import express from "express";
import {
  Register,
  getUsers,
  Login,
  Logout,
  updateUser,
} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getBarang, getProductDetails } from "../controllers/Catalog.js"; // Import getProductDetails
import { Contacts, getContact } from "../controllers/Contact.js";
import { getElearning } from "../controllers/E-Learning.js";
import { PaymentCatalog, getPayment, getPaymentDetails } from "../controllers/Payment.js"; // Import getPaymentDetails

const router = express.Router();

// Catalog routes
router.get("/catalog/:id", getProductDetails); // Add route for getProductDetails
router.get("/catalog", getBarang);

// User routes
router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.put("/users", verifyToken, updateUser);

// Auth routes
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

// Contact routes
router.get("/contacts", getContact);
router.post("/contacts", Contacts);

//Courses routes
router.get("/Courses", getElearning);

//Payment routes
router.get("/payment", getPayment);
router.get("/payment/:id", getPaymentDetails); // Add route for getPaymentDetails
router.post("/payment", PaymentCatalog);

export default router;
