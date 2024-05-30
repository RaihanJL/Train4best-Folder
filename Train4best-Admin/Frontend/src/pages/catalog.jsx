import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import axios from "axios";
import ConfirmDeleteModal from "../component/ConfirmationDelCat";
import EditPopup from "../component/EditPopup";

const CatalogPage = () => {
  const [data, setData] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8081/catalog")
      .then((response) => {
        const updatedData = response.data.map((item) => ({
          ...item,
          img_url: item.img_barang ? URL.createObjectURL(new Blob([new Uint8Array(item.img_barang.data)], { type: 'image/jpeg' })) : null,
        }));
        setData(updatedData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/catalog/${id}`);
      setData(data.filter((item) => item.id !== id));
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  const handleShowDeleteModal = (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      handleDelete(itemToDelete.id);
    }
  };

  const handleShowEditModal = (item) => {
    setItemToEdit(item);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setItemToEdit(null);
  };

  const handleEditSubmit = async (updatedItem) => {
    try {
      console.log("Submitting update for item: ", updatedItem);
  
      const formData = new FormData();
      formData.append('id', updatedItem.id);
      formData.append('nama_barang', updatedItem.nama_barang);
      formData.append('kategori_barang', updatedItem.kategori_barang);
      formData.append('desc_barang', updatedItem.desc_barang);
      formData.append('tahun_terbit', updatedItem.tahun_terbit);
      formData.append('harga_barang', updatedItem.harga_barang);
      if (updatedItem.img_barang) {
        formData.append('img_barang', updatedItem.img_barang); 
      }
  
      await axios.put(`http://localhost:8081/catalog/${updatedItem.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      const updatedData = data.map((item) => (item.id === updatedItem.id ? { ...item, ...updatedItem, img_url: updatedItem.img_barang ? URL.createObjectURL(updatedItem.img_barang) : item.img_url } : item));
      setData(updatedData);
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating item: ", error);
    }
  };  

  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div className="d-flex container justify-content-between align-items-start">
        <div>
          <Sidebar />
        </div>
        <div className="w-75">
          <h2 className="text-center mb-2">Catalog</h2>
          <div className="mt-2">
            {data.length > 0 ? (
              <table className="table">
                <thead className="table-header">
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Nama</th>
                    <th>Kategori</th>
                    <th>Description</th>
                    <th>Tahun Terbit</th>
                    <th>Harga</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        {item.img_url && <img src={item.img_url} alt={item.nama_barang} width="50" height="50" />}
                      </td>
                      <td>{item.nama_barang}</td>
                      <td>{item.kategori_barang}</td>
                      <td style={{ textAlign: "justify" }}>{item.desc_barang}</td>
                      <td>Published in {item.tahun_terbit}</td>
                      <td>{item.harga_barang}</td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => handleShowEditModal(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleShowDeleteModal(item)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </div>
      <ConfirmDeleteModal
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        handleConfirm={handleConfirmDelete}
      />
      {showEditModal && (
        <EditPopup
          item={itemToEdit}
          handleClose={handleCloseEditModal}
          handleSubmit={handleEditSubmit}
        />
      )}
    </>
  );
};

export default CatalogPage;
