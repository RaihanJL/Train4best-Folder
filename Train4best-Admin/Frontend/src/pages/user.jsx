import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";

const Userpage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
  };

  const handleDelete = async (id) => {
    try {
      // Make a DELETE request to your API to delete the user with the specified id
      await fetch(`http://localhost:8081/users/${id}`, {
        method: "DELETE",
      });

      // Remove the deleted user from the data array
      const updatedData = data.filter((user) => user.id !== id);
      setData(updatedData);

      console.log(`User with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
    }
  };

  const maskPassword = (password) => {
    return password.length > 2
      ? `${password.charAt(0)}${"*".repeat(
          password.length - 2
        )}${password.slice(-1)}`
      : password;
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
                        <button onClick={() => handleDelete(user.id)}>
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
    </>
  );
};

export default Userpage;
