import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import back from "../../public/assets/Back-button.png";
import { Link } from "react-router-dom";
import BCA from "../../public/assets/Bca.png";
import mandiri from "../../public/assets/mandiri.png";

const PaymentOptionPage = () => {
  return (
    <div>
      <Navbar />
      <div className="back-container">
        <div>
          <Link to={"/DetailCatalog"}>
            <img src={back}></img>
          </Link>
        </div>
      </div>
      <div className="container mb-5 pb-5">
        <p
          style={{ color: "#34478c" }}
          className="text-center mt-5 pt-2 mb-5 pb-2 fs-3"
        >
          To proceed, please choose a payment option :
        </p>
        <div className="d-flex justify-content-evenly align-items-center">
          <Link to={"/Payment"}>
            <div className="img-border d-flex align-items-center justify-content-center">
              <img src={BCA}></img>
            </div>
          </Link>
          <h1 className="fw-bold">OR</h1>
          <Link to={""}>
            <div className="img-border d-flex align-items-center justify-content-center">
              <img src={mandiri}></img>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentOptionPage;
