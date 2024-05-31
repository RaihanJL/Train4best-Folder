import React, { useState } from "react";

const AddPopup = ({ handleClose, handleSubmit }) => {
  const [formData, setFormData] = useState({
    nama_barang: "",
    kategori_barang: "",
    desc_barang: "",
    tahun_terbit: "",
    harga_barang: "",
    img_barang: null, // File input for image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, img_barang: e.target.files[0] });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Add New Product</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Nama Barang</label>
            <input type="text" name="nama_barang" value={formData.nama_barang} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Kategori Barang</label>
            <input type="text" name="kategori_barang" value={formData.kategori_barang} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Deskripsi Barang</label>
            <textarea name="desc_barang" value={formData.desc_barang} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Tahun Terbit</label>
            <input type="text" name="tahun_terbit" value={formData.tahun_terbit} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Harga Barang</label>
            <input type="number" name="harga_barang" value={formData.harga_barang} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Gambar Barang</label>
            <input type="file" name="img_barang" onChange={handleFileChange} />
          </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
          <button className="close-btn" onClick={handleClose}>
          Close
        </button>
        </form>
      </div>
    </div>
  );
};

export default AddPopup;
