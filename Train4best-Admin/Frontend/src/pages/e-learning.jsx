import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import axios from "axios";
import ConfirmDeleteModal from "../component/ConfDelCourse";
import EditCourse from "../component/EditCourse";
import AddCourse from "../component/AddCourse";

const Elearningpage = () => {
  const [data, setData] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:8081/Courses");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/Courses/${id}`);
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
      const formData = new FormData();
      formData.append('nama_skema', updatedItem.nama_skema);
      if (updatedItem.img_skema) {
        formData.append('img_skema', updatedItem.img_skema);
      }

      const response = await axios.put(`http://localhost:8081/Courses/${updatedItem.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const updatedItemFromResponse = response.data;

      const updatedData = data.map((item) => (
        item.id === updatedItem.id ? { 
          ...item, 
          ...updatedItemFromResponse
        } : item
      ));
      setData(updatedData);
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating item: ", error);
    }
  };

  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleAddSubmit = async (newItem) => {
    try {
      const formData = new FormData();
      formData.append('nama_skema', newItem.nama_skema);
      if (newItem.img_skema) {
        formData.append('img_skema', newItem.img_skema);
      }

      const response = await axios.post(`http://localhost:8081/Courses`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const addedItem = response.data;
      setData([...data, addedItem]);
      setShowAddModal(false);
    } catch (error) {
      console.error("Error adding new item: ", error);
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
          <h2 className="text-center mb-2">E-Learning</h2>
          <button className="btn btn-primary mb-2" onClick={handleShowAddModal}>Add New Skema</button>
          <div className="mt-2">
            {data.length > 0 ? (
              <table className="table">
                <thead className="table-header">
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Nama Skema</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        {item.img_skema && <img src={item.img_skema} alt={item.nama_skema} width="50" height="50" />}
                      </td>
                      <td>{item.nama_skema}</td>
                      <td>
                        <button className="btn btn-warning mx-2" onClick={() => handleShowEditModal(item)}>Edit</button>
                        <button className="btn btn-danger" onClick={() => handleShowDeleteModal(item)}>Delete</button>
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
        <EditCourse
          show={showEditModal}
          handleClose={handleCloseEditModal}
          handleSubmit={handleEditSubmit}
          item={itemToEdit}
        />
      )}
      {showAddModal && (
        <AddCourse
          show={showAddModal}
          handleClose={handleCloseAddModal}
          handleSubmit={handleAddSubmit}
        />
      )}
    </>
  );
};

export default Elearningpage;
