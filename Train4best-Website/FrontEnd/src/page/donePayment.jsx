import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import check from "../../public/assets/check.png";
import bookMini from "../../public/assets/book-mini.png";
import { Link } from "react-router-dom";
const DonepaymentPage = () => {
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
              <img src={bookMini}></img>
              <p style={{ color: "white", fontSize: "24px" }}>Good To Great</p>
            </div>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>
              $27
            </p>
          </div>
          <hr style={{ color: "white", border: "2px solid " }}></hr>
          <div className="d-flex justify-content-between align-items-center">
            <p>Transaction Date</p>
            <p className="fw-bold">Sunday, 03 March 2024</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p>Payment Code</p>
            <p className="fw-bold">B1297</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p>Payment Method</p>
            <p className="fw-bold">BCA</p>
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
