import express from "express";
import {
  getAdmin,
  getUsers,
  getBarangs,
  createBarang,
  Login,
  Register,
  Logout,
} from "../controllers/Admin.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getElearning } from "../controllers/E-learning.js";
import { getPaymentCat } from "../controllers/PaymentCat.js";
import { getPaymentCour } from "../controllers/PaymentCour.js";

const router = express.Router();

router.get("/admin", verifyToken, getAdmin);
router.post("/admin", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.get("/users", getUsers);
router.get("/catalog", getBarangs);
router.post("/catalog", createBarang);
router.get("/Courses", getElearning);
router.get("/PaymentCat", getPaymentCat);
router.get("/PaymentCour", getPaymentCour);

export default router;
