import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";

const Userpage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/users")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
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
            {data.length > 0 ? (
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
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>{formatDate(user.register_date)}</td>
                      <td>
                        <button>Delete</button>
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
