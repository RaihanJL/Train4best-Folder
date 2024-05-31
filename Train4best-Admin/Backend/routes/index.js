import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  getAdmin,
  getUsers,
  getBarangs,
  createBarang,
  updateCatalogItem,
  deleteCatalogItem,
  deleteUser,
  Login,
  Register,
  Logout
} from '../controllers/Admin.js';
import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controllers/RefreshToken.js';
import { getPaymentCat } from '../controllers/PaymentCat.js';
import { getPaymentCour } from '../controllers/PaymentCour.js';
import {
  getElearning,
  createElearning,
  updateElearning,
  deleteElearning,
} from '../controllers/E-learning.js';

const router = express.Router();

// Configurasi multer untuk upload gambar
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Rute yang sudah ada
router.get('/admin', verifyToken, getAdmin);
router.post('/admin', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/users', getUsers);
router.delete('/users/:id', deleteUser);
router.get('/catalog', getBarangs);
router.post('/catalog', upload.single('img_barang'), createBarang); // Menambahkan barang baru
router.put('/catalog/:id', upload.single('img_barang'), updateCatalogItem); // Memperbaiki fungsi edit
router.delete('/catalog/:id', deleteCatalogItem);
router.get('/Courses', getElearning);
router.get('/PaymentCat', getPaymentCat);
router.get('/PaymentCour', getPaymentCour);
router.get('/Courses', getElearning);
router.post('/Courses', upload.single('img_skema'), createElearning); // Assuming 'img_skema' is the file field name
router.put('/Courses/:id', upload.single('img_skema'), updateElearning);
router.delete('/Courses/:id', deleteElearning);

export default router;
