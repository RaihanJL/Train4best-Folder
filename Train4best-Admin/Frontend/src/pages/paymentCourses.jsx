import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";

const PaymentCoursepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/paymentCourse")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
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
            <h2 className="text-center mb-2 ">Payment Course</h2>
          </div>
          <div className="mt-2">
            {data.length > 0 ? (
              <table className="table">
                <thead className="table-header">
                  <tr>
                    <th>ID Payment</th>
                    <th>Email</th>
                    <th>ID Course</th>
                    <th>Payment Method</th>
                    <th>Transaction Date</th>
                    <th>Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((payment) => (
                    <tr key={payment.id_payment_course}>
                      <td>{payment.id_payment_course}</td>
                      <td>{payment.email_user}</td>
                      <td>{payment.id_course}</td>
                      <td>{payment.payment_method}</td>
                      <td>{formatDate(payment.transaction_date)}</td>
                      <td>{payment.receipt_payment.data}</td>
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

export default PaymentCoursepage;
