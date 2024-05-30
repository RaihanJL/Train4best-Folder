import React, { useState } from "react";

const EditPopup = ({ item, handleClose, handleSubmit }) => {
  const [formValues, setFormValues] = useState({
    id: item.id,
    nama_barang: item.nama_barang,
    kategori_barang: item.kategori_barang,
    desc_barang: item.desc_barang,
    tahun_terbit: item.tahun_terbit,
    harga_barang: item.harga_barang,
    img_barang: null,
    img_url: item.img_url, // Store the existing image URL
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormValues({ ...formValues, img_barang: e.target.files[0], img_url: URL.createObjectURL(e.target.files[0]) });
  };
  

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formValues);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Edit Product</h2>
        <form onSubmit={onSubmit}>
          <label>
            Nama:
            <input type="text" name="nama_barang" value={formValues.nama_barang} onChange={handleInputChange} />
          </label>
          <label>
            Kategori:
            <input type="text" name="kategori_barang" value={formValues.kategori_barang} onChange={handleInputChange} />
          </label>
          <label>
            Description:
            <textarea name="desc_barang" value={formValues.desc_barang} onChange={handleInputChange} />
          </label>
          <label>
            Tahun Terbit:
            <input type="text" name="tahun_terbit" value={formValues.tahun_terbit} onChange={handleInputChange} />
          </label>
          <label>
            Harga:
            <input type="text" name="harga_barang" value={formValues.harga_barang} onChange={handleInputChange} />
          </label>
          <label>
            Image:
            <input type="file" name="img_barang" onChange={handleImageChange} />
            {formValues.img_url && <img src={formValues.img_url} alt="Current" width="50" height="50" />}
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={handleClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditPopup;
