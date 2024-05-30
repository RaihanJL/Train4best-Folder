import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import axios from "axios";

const PaymentCatalogpage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/PaymentCat")
      .then((response) => {
        const updatedData = response.data.map((item) => ({
          ...item,
          receipt_url: item.receipt_payment
            ? URL.createObjectURL(
                new Blob([new Uint8Array(item.receipt_payment.data)], {
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
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
            <h2 className="text-center mb-2">Payment Catalog</h2>
          </div>
          <div className="mt-2">
            {data.length > 0 ? (
              <table className="table">
                <thead className="table-header">
                  <tr>
                    <th>ID Payment</th>
                    <th>Email</th>
                    <th>ID Barang</th>
                    <th>Payment Method</th>
                    <th>Transaction Date</th>
                    <th>Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((payment) => (
                    <tr key={payment.id}>
                      <td>{payment.id}</td>
                      <td>{payment.email_user}</td>
                      <td>{payment.id_barang}</td>
                      <td>{payment.payment_method}</td>
                      <td>{formatDate(payment.createdAt)}</td>
                      <td>
                        {payment.receipt_url && (
                          <img
                            src={payment.receipt_url}
                            alt={`Receipt for payment ${payment.id}`}
                            width="50"
                            height="auto"
                          />
                        )}
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

export default PaymentCatalogpage;
