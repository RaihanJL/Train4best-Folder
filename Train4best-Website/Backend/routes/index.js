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
import { getBarang } from "../controllers/Catalog.js";
import { Contacts, getContact } from "../controllers/Contact.js";

const router = express.Router();

// Catalog routes
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

export default router;
