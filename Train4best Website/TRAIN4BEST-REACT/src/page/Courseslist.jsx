// import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import CarouselC from "../Component/CarouselC";
import { Link } from "react-router-dom";

const CourselistPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container home-C d-flex justify-content-center flex-column gap-4">
        <div className="first-text mt-5">
          <h1 style={{ textAlign: "center" }}>Training & Certification</h1>
        </div>
        <CarouselC />
        <div></div>
      </div>

      <div>
        <div className="title-training">
          <h1>
            <u>Training Categories</u>
          </h1>
        </div>

        <div className="container-training">
          <div className="box-training">
            <h5>
              <b style={{ fontSize: "large" }}>TELEKOMUNIKASI</b>
            </h5>
            <p>
              Menawarkan pelatihan-pelatihan dalam <br />
              bidang telekomunikasi yang dibutuhkan <br />
              untuk menguatkan skill dan kompetensi. <br />
              Terdapat berbagai skema pelatihan <br />
              dengan tenaga pengajar profesional.
            </p>
          </div>
          <div className="box-training">
            <h5>
              <b style={{ fontSize: "large" }}>IT / KOMPUTER</b>
            </h5>
            <p>
              Menawarkan pelatihan-pelatihan dalam <br />
              bidang IT / Komputer yang dibutuhkan <br />
              untuk menguatkan skill dan kompetensi. <br />
              Terdapat berbagai skema pelatihan <br />
              dengan tenaga pengajar profesional.
            </p>
          </div>
          <div className="box-training">
            <h5>
              <b style={{ fontSize: "large" }}>WEBINAR</b>
            </h5>
            <p>
              Menawarkan berbagai webinar untuk <br />
              menambah pengetahuan dan wawasan <br />
              anda dengan tema-tema yang menarik <br />
              untuk dibahas serta disampaikan oleh <br />
              pembicara ahli di bidangnya.
            </p>
          </div>
        </div>

        <div className="container-training">
          <div className="box-training">
            <h5>
              <b style={{ fontSize: "large" }}>SOFT SKILL</b>
            </h5>
            <p>
              Menawarkan pelatihan-pelatihan dalam <br />
              bidang soft skill yang dibutuhkan <br />
              untuk menguatkan skill dan kompetensi. <br />
              Terdapat berbagai skema pelatihan <br />
              dengan tenaga pengajar profesional.
            </p>
          </div>
          <div className="box-training">
            <h5>
              <b style={{ fontSize: "large" }}>PAJAK</b>
            </h5>
            <p>
              Menawarkan pelatihan-pelatihan dalam <br />
              bidang perpajakan yang dibutuhkan <br />
              untuk menguatkan skill dan kompetensi. <br />
              Terdapat berbagai skema pelatihan <br />
              dengan tenaga pengajar profesional.
            </p>
          </div>
          <div className="box-training">
            <h5>
              <b style={{ fontSize: "large" }}>LEARNING MANAGEMENT SYSTEM</b>
            </h5>
            <p>
              Laman e-learning Train4best untuk <br />
              mempermudahkan akses pembelajaran <br /> atau pelatihan secara
              daring.
            </p>
          </div>
        </div>
      </div>

      <div className="container-all-courses">
        <h1>
          <u>Certification</u>
        </h1>
        <div className="d-flex justify-content-evenly align-items-center">
          <div className="container-courses-list">
            <div className="box-card-courses-list">
              <div>
                <img
                  className="photo-courses-list"
                  src="/assets/logo-LSP-1.png"
                />
              </div>
              <div className="text-box-C-list">
                <h5>
                  <b style={{ fontSize: "large" }}>
                    SKEMA LSP ELEKTRONIKA INDONESIA
                  </b>
                </h5>
                <a
                  href="/page/Courses.html"
                  className="mt-3 d-flex justify-content-end"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#34478c",
                    color: "#fafafa",
                    textDecoration: "none",
                    paddingTop: "20px",
                  }}
                >
                  <b style={{ fontSize: "large" }}>See More &gt;</b>
                </a>
              </div>
              <div></div>
            </div>
          </div>

          <div className="container-courses-list">
            <div className="box-card-courses-list">
              <div>
                <img
                  className="photo-courses-list"
                  src="/assets/logo-LSP-2.png"
                />
              </div>
              <div className="text-box-C-list">
                <h5>
                  <b style={{ fontSize: "large" }}>
                    SKEMA LSP TENAGA TEKNIK INDONESIA
                  </b>
                </h5>
                <a
                  href="/page/Courses.html"
                  className="mt-3 d-flex justify-content-end"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#34478c",
                    color: "#fafafa",
                    textDecoration: "none",
                    paddingTop: "20px",
                  }}
                >
                  <b style={{ fontSize: "large" }}>See More &gt;</b>
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-evenly align-items-center">
          <div className="container-courses-list">
            <div className="box-card-courses-list">
              <div>
                <img
                  className="photo-courses-list"
                  src="/assets/logo-LSP-3.png"
                />
              </div>
              <div className="text-box-C-list">
                <h5>
                  <b style={{ fontSize: "large" }}>
                    SKEMA LSP TEKNOLOGI DIGITAL
                  </b>
                </h5>
                <a
                  href="/page/Courses.html"
                  className="mt-3 d-flex justify-content-end"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#34478c",
                    color: "#fafafa",
                    textDecoration: "none",
                    paddingTop: "20px",
                  }}
                >
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/Courses"}
                  >
                    <b style={{ fontSize: "large" }}>See More &gt;</b>
                  </Link>
                </a>
              </div>
              <div></div>
            </div>
          </div>

          <div className="container-courses-list">
            <div className="box-card-courses-list">
              <div>
                <img
                  className="photo-courses-list"
                  src="/assets/logo-LSP-4.png"
                />
              </div>
              <div className="text-box-C-list">
                <h5>
                  <b style={{ fontSize: "large" }}>
                    SKEMA LSP P3 TEKNOLOGI DIGITAL
                  </b>
                </h5>
                <a
                  href="/page/Courses.html"
                  className="mt-3 d-flex justify-content-end"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#34478c",
                    color: "#fafafa",
                    textDecoration: "none",
                    paddingTop: "20px",
                  }}
                >
                  <b style={{ fontSize: "large" }}>See More &gt;</b>
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-evenly align-items-center">
          <div className="container-courses-list">
            <div className="box-card-courses-list">
              <div>
                <img
                  className="photo-courses-list"
                  src="/assets/logo-LSP-5.png"
                />
              </div>
              <div className="text-box-C-list">
                <h5>
                  <b style={{ fontSize: "large" }}>SKEMA LSP TELEKOMUNIKASI</b>
                </h5>
                <a
                  href="/page/Courses.html"
                  className="mt-3 d-flex justify-content-end"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#34478c",
                    color: "#fafafa",
                    textDecoration: "none",
                    paddingTop: "20px",
                  }}
                >
                  <b style={{ fontSize: "large" }}>See More &gt;</b>
                </a>
              </div>
              <div></div>
            </div>
          </div>

          <div className="container-courses-list">
            <div className="box-card-courses-list">
              <div>
                <img
                  className="photo-courses-list"
                  src="/assets/logo-LSP-6.png"
                />
              </div>
              <div className="text-box-C-list">
                <h5>
                  <b style={{ fontSize: "large" }}>
                    SKEMA LSP TELEKOMUNIKASI INDONESIA
                  </b>
                </h5>
                <a
                  href="/page/Courses.html"
                  className="mt-3 d-flex justify-content-end"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#34478c",
                    color: "#fafafa",
                    textDecoration: "none",
                    paddingTop: "20px",
                  }}
                >
                  <b style={{ fontSize: "large" }}>See More &gt;</b>
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CourselistPage;
