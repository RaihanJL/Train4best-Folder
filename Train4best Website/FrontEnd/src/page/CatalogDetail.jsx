import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import back from "../../public/assets/Back-button.png";
import { Link } from "react-router-dom";
import image1 from "../../public/assets/img-book.png";
import Catalogcard from "../Component/Catalogimg";
import Detailcard from "../Component/Detailcard";

const CatalogDetailpages = () => {
  return (
    <>
      <Navbar />
      <div className="back-container">
        <div className="">
          <Link to={"/Catalog"}>
            <img src={back}></img>
          </Link>
        </div>
      </div>
      <div className="container mt-5">
        <div className="d-flex gap-5">
          <div>
            <img src={image1}></img>
          </div>

          <div className="d-flex align-items-start flex-column ">
            <div className="diff-box">
              <h1 style={{ color: "#34478c" }} className="mb-3 fw-bold">
                Good to Great
              </h1>
              <p className="mb-0">
                Nonfiction | Book | Adult<br></br> Published in 2001
              </p>
            </div>

            <div className="text-box">
              <div className="d-flex align-items-center justify-content-between price mb-3">
                <div className="d-flex gap-2 align-items-center">
                  <p className="m-0">Price</p>
                  <p className="m-0 fw-bold fs-3">$27</p>
                </div>
                <Link to={"/PaymentOption"}>
                  <button className="pe-5 px-5 fw-bold">Buy Now </button>
                </Link>
              </div>
              <p className="desc-text">
                Good to Great, published in 2001, serves as both a follow-up and
                thematic prequel to author Jim Collins’s 1994 best seller, Built
                to Last. Comprehensive in the scope of its research, Good to
                Great is an examination of the defining qualities of greatness
                in companies that have made a pivotal transition from “good”
                (performing relatively consistently) to “great” (performing
                exceptionally). In making his arguments, Collins brings his
                expertise as a faculty member at the Stanford University
                Graduate School of Business, as well as his time at the helm of
                his own research laboratory in Boulder, Colorado.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1
            style={{ color: "#34478c" }}
            className="fw-bold text-center mt-5 pt-5"
          >
            People Also Viewed
          </h1>
          <Detailcard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CatalogDetailpages;
