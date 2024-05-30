import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../component/Navbar';
import Sidebar from '../component/sidebar';
import ConfirmationModal from '../component/ConfirmationModal'; // Import the modal component

const Userpage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/users')
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/users/${id}`);
      const updatedData = data.filter((user) => user.id !== id);
      setData(updatedData);
      console.log(`User with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
    }
  };

  const maskPassword = (password) => {
    if (password) {
      return password.length > 2
        ? `${password.charAt(0)}${'*'.repeat(password.length - 2)}${password.slice(-1)}`
        : password;
    }
    return ''; // Return empty string if password is undefined
  };

  const handleShowModal = (id) => {
    setSelectedUserId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUserId(null);
  };

  const handleConfirmDelete = () => {
    if (selectedUserId) {
      handleDelete(selectedUserId);
      handleCloseModal();
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
          <div>
            <h2 className="text-center mb-2">User</h2>
          </div>
          <div className="mt-2">
            {loading ? (
              <p>Loading...</p>
            ) : data.length > 0 ? (
              <table className="table">
                <thead className="table-header">
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Register Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}.</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{maskPassword(user.password)}</td>
                      <td>{formatDate(user.createdAt)}</td>
                      <td>
                        <button onClick={() => handleShowModal(user.id)}>
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
      <ConfirmationModal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default Userpage;
