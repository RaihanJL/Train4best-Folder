import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import axios from "axios";

const Elearningpage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/Courses")
      .then((response) => {
        const updatedData = response.data.map((item) => ({
          ...item,
          img_url: item.img_skema
            ? URL.createObjectURL(
                new Blob([new Uint8Array(item.img_skema.data)], {
                  type: "image/jpeg",
                })
              )
            : null,
        }));
        setData(updatedData);
      })
      .catch((error) => {
        console.error(
          "Error fetching data: ",
          error.response?.data || error.message
        );
      });
  }, []);

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
            <h2 className="text-center mb-2">E-Learning</h2>
          </div>
          <div className="mt-2">
            {data.length > 0 ? (
              <table className="table">
                <thead className="table-header">
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Nama Skema</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user, index) => (
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>
                        {user.img_url && (
                          <img
                            src={user.img_url}
                            alt={user.nama_skema}
                            width="50"
                            height="auto"
                          />
                        )}
                      </td>
                      <td>
                        {typeof user.nama_skema === "object"
                          ? JSON.stringify(user.nama_skema)
                          : user.nama_skema}
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

export default Elearningpage;
