// import React from "react";
import back from "../../public/assets/Back-button.png";
import { Link } from "react-router-dom";
import Footer from "/src/Component/Footer";
import Navbar from "/src/Component/Navbar";

const CoursesDetailPages = () => {
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

      <div className="jumbotron-courses">
        <div className="bg-jumbotron">
          <div className="text-jumbotron">
            <h3>
              <b>Big Data Scientist</b>
            </h3>
            <p>LSP Telekomunikasi</p>
            <div>
              <span className="heading me-2">5.0</span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <br />
            </div>
            <Link to={"/paymentcourse"}>
              <button className="btn-jmbtron">Only $ 250</button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="video-list">
          <p style={{ color: "black", paddingLeft: "70px", fontSize: "20px" }}>
            1.
          </p>
          <img className="img-list" src="/public/assets/thumbnail1.png"></img>
          <div className="video-description">
            <Link
              to={"/CoursesDetailMore"}
              style={{
                border: "none",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "black", fontSize: "20px", marginBottom: 0 }}>
                ICADBS503B
              </p>
            </Link>
            <Link
              to={"/CoursesDetailMore"}
              style={{
                border: "none",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "black", fontSize: "20px" }}>
                Create a Data Warehouse (Membuat sebuah Gudang Data)
              </p>
            </Link>
          </div>
        </div>
        <br />

        <div className="video-list">
          <p style={{ color: "black", paddingLeft: "70px", fontSize: "20px" }}>
            2.
          </p>
          <img className="img-list" src="/public/assets/thumbnail1.png"></img>
          <div className="video-description">
            <Link
              to={"/CoursesDetailMore"}
              style={{
                border: "none",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "black", fontSize: "20px", marginBottom: 0 }}>
                ICADBS602A
              </p>
            </Link>
            <Link
              to={"/CoursesDetailMore"}
              style={{
                border: "none",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "black", fontSize: "20px" }}>
                Develop a Knowledge Management Strategy (Mengembangkan Strategi
                Manajemen Pengetahuan)
              </p>
            </Link>
          </div>
        </div>
        <br />

        <div className="video-list">
          <p style={{ color: "black", paddingLeft: "70px", fontSize: "20px" }}>
            3.
          </p>
          <img className="img-list" src="/public/assets/thumbnail1.png"></img>
          <div className="video-description">
            <Link
              to={"/CoursesDetailMore"}
              style={{
                border: "none",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "black", fontSize: "20px", marginBottom: 0 }}>
                ICADMT401A
              </p>
            </Link>
            <Link
              to={"/CoursesDetailMore"}
              style={{
                border: "none",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "black", fontSize: "20px" }}>
                Create Visual Design Components for Digital Media (Membuat
                Komponen Desain Visual Untuk Media Digital)
              </p>
            </Link>
          </div>
        </div>
        <br />

        <div className="video-list">
          <p style={{ color: "black", paddingLeft: "70px", fontSize: "20px" }}>
            4.
          </p>
          <img className="img-list" src="/public/assets/thumbnail1.png"></img>
          <div className="video-description">
            <Link
              to={"/CoursesDetailMore"}
              style={{
                border: "none",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "black", fontSize: "20px", marginBottom: 0 }}>
                ICTTEN5204A
              </p>
            </Link>
            <Link
              to={"/CoursesDetailMore"}
              style={{
                border: "none",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "black", fontSize: "20px" }}>
                Membuat solusi teknis dari spesifikasi bisnis
              </p>
            </Link>
          </div>
        </div>
        <br />

        <div className="video-list">
          <p style={{ color: "black", paddingLeft: "70px", fontSize: "20px" }}>
            5.
          </p>
          <img className="img-list" src="/public/assets/thumbnail1.png"></img>
          <div className="video-description">
            <Link
              to={"/CoursesDetailMore"}
              style={{
                border: "none",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "black", fontSize: "20px", marginBottom: 0 }}>
                ICAICT509A
              </p>
            </Link>
            <Link
              to={"/CoursesDetailMore"}
              style={{
                border: "none",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "black", fontSize: "20px" }}>
                Mengumpulkan data untuk mengidentifikasi kebutuhan bisnis
              </p>
            </Link>
          </div>
        </div>
        <br />
      </div>

      <Footer />
    </>
  );
};

export default CoursesDetailPages;
