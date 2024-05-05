// import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

const PaymentcoursePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 style={{ color: "#34478c" }} className="text-center fw-bold mt-5">
          Detail Transaction
        </h1>

        <div className="d-flex justify-content-evenly align-items-center mt-5">
        <div className="d-flex flex-wrap justify-content-evenly align-items-center">
              <div className="container-courses-py">
                <div className="box-card-courses-py">
                  <div>
                    <img
                      className="photo-courses"
                      src="/assets/Detailcourse1.png"
                      alt="Course"
                    />
                  </div>
                  <div className="text-box-C">
                    <h5>
                      <b className="fs-6">Big Data Scientist</b>
                    </h5>
                    <p>LSP Teknologi Digital</p>
                    <span className="heading me-2">5.0</span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <h5 className="mt-3">
                      <b>$250</b>
                    </h5>

                    <Link
                      style={{
                        color: "white",
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                    </Link>
                  </div>
                </div>
              </div>
      </div>

        <div className=" d-flex justify-content-evenly">
          <div>
            <div className="blue-box mb-3">
              <div className="text-payment">
                <div className="d-flex payment-info ">
                  <p>Name</p>
                  <p>: User</p>
                </div>
                <hr className="lines"></hr>
                <div className="d-flex payment-info">
                  <p>Email</p>
                  <p>: User39@gmail.com</p>
                </div>
                <hr className="lines"></hr>
                <div className="d-flex payment-info">
                  <p>Phone</p>
                  <p>: +62 990-7654-0987 </p>
                </div>
              </div>
            </div>
            <div className="blue-box-2">
              <div className="text-payment">
                <div>
                  <div className="d-flex payment-info2 ">
                    <p>Payment Code</p>
                    <p>: User</p>
                  </div>
                  <hr className="lines"></hr>
                  <div className="d-flex payment-info2">
                    <p>Price</p>
                    <p>: $250</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="d-flex justify-content-center mt-4 ">
          <div className="blue-box3">
            <div className="payment-info3 d-flex align-items-center justify-content-between">
              <p>Payment Method</p>
              <p>Mandiri</p>
            </div>
            <hr className="lines"></hr>
            <div className="payment-info3 d-flex align-items-center justify-content-between">
              <p>Transaction Date</p>
              <p>Sunday, 03 March 2024</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="blue-box4">
            <div className="payment-info4">
              <p style={{ fontSize: "32px" }}>Account Numbers :</p>
              <h1 style={{ fontSize: "64px" }}>1 1 1 - 3 3 -0 9 2 7 4 2 5 -9</h1>
              <p style={{ fontSize: "32px" }}>a.n Pedro Pascal</p>
              <p style={{ fontSize: "16px" }} className="mt-5">
                Upload your receipt of payment
              </p>
              <button className="fw-bold">Upload</button>
            </div>
          </div>
        </div>
        <Link to="/donePayment">
          <button className="fw-bold mt-4 button-status">Check Status</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentcoursePage;
