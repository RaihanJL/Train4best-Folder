import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import logoLSP from "../../public/assets/logo-LSP-3.png";
import back from "../../public/assets/Back-button.png";
import { Link } from "react-router-dom";
import Coursecard from "../Component/Coursecard";

const CoursesPage = () => {
  return (
    <>
      <Navbar />
      <div className="back-container">
        <div className="">
          <Link to={"/CatalogBundle"}>
            <img src={back}></img>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="h1-header-C">SKEMA LSP TEKNOLOGI DIGITAL</h1>
      </div>
      <div className="d-flex justify-content-center ">
        <img className=" w-50" src={logoLSP} />
      </div>
      <Coursecard />
      <Footer />
    </>
  );
};

export default CoursesPage;
