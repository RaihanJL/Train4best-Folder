import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Menggunakan useNavigate
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { jwtDecode } from "jwt-decode";

const generatePaymentCode = () => {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `C${randomNumber}`;
};

const PaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Menggunakan useNavigate
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentCode, setPaymentCode] = useState(generatePaymentCode());
  const [price, setPrice] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("BCA");
  const [transactionDate, setTransactionDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token", {
        withCredentials: true,
      });
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setEmail(decoded.email);
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/catalog/${id}`);
        const product = response.data;
        setPrice(product.harga_barang);
      } catch (error) {
        console.error("Failed to fetch product details", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("catalogId", id);
    data.append("name", name);
    data.append("email", email);
    data.append("paymentCode", paymentCode);
    data.append("price", price);
    data.append("paymentMethod", paymentMethod);
    data.append("transactionDate", transactionDate);
    data.append("receipt", receipt);

    try {
      await axios.post("http://localhost:5000/payment", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setName("");
      setEmail("");
      setPaymentCode(generatePaymentCode());
      setReceipt(null);
      // Redirect to next page after successful submission
      navigate("/donePayment"); // Menggunakan navigate
    } catch (error) {
      console.error("Failed to submit payment", error);
    }
  };

  const handleFileChange = (e) => {
    setReceipt(e.target.files[0]);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="C-head">
          <h1>Payment Details</h1>
        </div>
        <div className="d-flex justify-content-evenly mb-5">
          <div className="C-form">
            <form
              className="d-flex flex-column gap-3 align-items-center"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                className="form-input"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                className="form-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="paymentCode">Payment Code:</label>
              <input
                id="paymentCode"
                className="form-input"
                type="text"
                placeholder="Enter your payment code"
                value={paymentCode}
                readOnly
              />
              <label htmlFor="price">Price:</label>
              <input
                id="price"
                className="form-input"
                type="text"
                placeholder="Enter the price"
                value={price}
                readOnly
              />
              <label htmlFor="paymentMethod">Payment Method:</label>
              <select
                id="paymentMethod"
                className="form-select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="BCA">BCA</option>
                <option value="Mandiri">Mandiri</option>
              </select>

              <label htmlFor="transactionDate">Transaction Date:</label>
              <input
                id="transactionDate"
                className="form-input"
                type="date"
                defaultValue={transactionDate}
                readOnly
              />
              <div
                className="bank-account-info"
                style={{
                  backgroundColor: "#34478c",
                  padding: "20px",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <div>
                  <h2 style={{ fontSize: "24px" }}>Bank Account Information</h2>
                  <p style={{ fontSize: "18px" }}>
                    Virtual Account Number: 902817261012
                  </p>
                  <p style={{ fontSize: "18px" }}>Account Name: Pak haji</p>
                </div>
              </div>

              <label htmlFor="receipt">Receipt of Payment:</label>
              <input
                id="receipt"
                className="form-input"
                type="file"
                onChange={handleFileChange}
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
