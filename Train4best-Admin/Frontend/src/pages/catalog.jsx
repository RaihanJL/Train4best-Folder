import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import axios from "axios";

const Catalogpage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/catalog")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
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
            <h2 className="text-center mb-2">Catalog</h2>
          </div>
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
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id_barang} className="data-catalog">
                      <td>{item.id_barang}</td>
                      <td>{item.img_barang.data}</td>
                      <td>{item.nama_barang}</td>
                      <td>{item.kategori_barang}</td>
                      <td style={{ textAlign: "justify" }}>
                        {item.desc_barang}
                      </td>
                      <td>{item.tahun_terbit}</td>
                      <td>{item.harga_barang}</td>
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

export default Catalogpage;
