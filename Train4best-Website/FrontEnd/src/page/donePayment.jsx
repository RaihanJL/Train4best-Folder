import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import check from "../../public/assets/check.png";
import bookMini from "../../public/assets/book-mini.png";

const DonepaymentPage = () => {
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    const fetchLastPaymentData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/payment`);
        const lastPayment = response.data[response.data.length - 1];
        setPaymentData(lastPayment);
      } catch (error) {
        console.error("Error fetching payment data", error);
      }
    };

    fetchLastPaymentData();
  }, []);

  if (!paymentData) {
    return <p>Loading...</p>;
  }

  // Format transaction date to display only year, month, and date
  const transactionDate = new Date(
    paymentData.transactionDate
  ).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="dp-img-container  mt-5 mb-3">
            <img src={check} alt="Check"></img>
          </div>
          <div>
            <h1 className="fw-bold mb-5 pb-5" style={{ color: "#34478c" }}>
              Payment Succesful!
            </h1>
          </div>
        </div>
        <div className="dp-blue-box">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <img src={bookMini} alt="Book"></img>
              <p style={{ color: "white", fontSize: "24px" }}>
                {paymentData.namaBarang}
              </p>
            </div>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>
              Rp.{paymentData.price}
            </p>
          </div>
          <hr style={{ color: "white", border: "2px solid " }}></hr>
          <div className="d-flex justify-content-between align-items-center">
            <p>Transaction Date</p>
            <p className="fw-bold">{transactionDate}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p>Payment Code</p>
            <p className="fw-bold">{paymentData.paymentCode}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p>Payment Method</p>
            <p className="fw-bold">{paymentData.paymentMethod}</p>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link to={"/Home"}>
            <button>Back Home</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonepaymentPage;
