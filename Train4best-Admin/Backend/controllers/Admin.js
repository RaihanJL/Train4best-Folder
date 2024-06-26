import Admin from "../models/UserModel.js";
import Users from "../models/Users.js";
import Barang from "../models/Barang.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from 'fs';

export const getAdmin = async(req, res) => {
    try{
        const admin = await Admin.findAll({
            attributes:['id', 'name', 'email']
        });
        res.json(admin);
    } catch (error) {
        console.log(error);
    }
}

export const getUsers = async(req, res) => {
    try{
        const users = await Users.findAll({
            attributes:['id', 'name', 'email', 'createdAt', 'updatedAt']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      await Users.destroy({ where: { id: id } });
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
  };

export const getBarangs = async (req, res) => {
    try {
        const barangs = await Barang.findAll({
            attributes: ['id', 'img_barang', 'nama_barang', 'kategori_barang', 'desc_barang', 'tahun_terbit', 'harga_barang', 'createdAt', 'updatedAt']
        });
        res.json(barangs);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving barang" });
    }
};

export const deleteCatalogItem = async (req, res) => {
    try {
      const { id } = req.params;
      await Barang.destroy({ where: { id: id } });
      res.status(200).json({ message: 'Catalog item deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting catalog item', error: error.message });
    }
  };

  export const createBarang = async (req, res) => {
    const { img_barang, nama_barang, kategori_barang, desc_barang, tahun_terbit, harga_barang } = req.body;
    try {
        const newBarang = await Barang.create({
            img_barang,
            nama_barang,
            kategori_barang,
            desc_barang,
            tahun_terbit,
            harga_barang
        });
        res.status(201).json(newBarang);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating barang" });
    }
};

export const updateCatalogItem = async (req, res) => {
    try {
      const { id } = req.params;
      console.log("Received update request for item ID: ", id);
      console.log("Request body: ", req.body);
  
      const { nama_barang, kategori_barang, desc_barang, tahun_terbit, harga_barang } = req.body;
  
      let updatedFields = { 
        nama_barang,
        kategori_barang,
        desc_barang,
        tahun_terbit,
        harga_barang
      };
  
      if (req.file && req.file.path) {
        console.log("Image uploaded: ", req.file.path);
        updatedFields.img_barang = fs.readFileSync(req.file.path);
        fs.unlinkSync(req.file.path); 
      }
  
      console.log("Updated fields: ", updatedFields);
  
      await Barang.update(updatedFields, { where: { id } });
      res.status(200).json({ message: 'Item updated successfully' });
    } catch (error) {
      console.error("Error updating item: ", error);
      res.status(500).json({ message: 'Error updating item', error: error.message });
    }
};

export const Register = async(req, res) => {
    const { name, email, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Admin.create({
            name: name,
            email: email,
            password: hashPassword
        });
        res.json({msg: "Register Berhasil"});
    } catch (error) {
        console.log(error);
    }
}

export const Login = async(req, res) => {
    try{
        const admin = await Admin.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, admin[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const adminId = admin[0].id;
        const name = admin[0].name;
        const email = admin[0].email;
        const accessToken = jwt.sign({adminId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({adminId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Admin.update({refresh_token: refreshToken},{
            where:{
                id: adminId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            // secure: true
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg: "Email tidak ditemukan"});
    }
}

export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const admin = await Admin.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!admin[0]) return res.sendStatus(204);
    const adminId = admin[0].id;
    await Admin.update({refresh_token: null},{
        where:{
            id: adminId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}
