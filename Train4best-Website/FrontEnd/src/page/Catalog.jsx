import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import CarouselA from "../Component/Carousel";
import "../styles/Catalogpage.css"; // Import CSS file for animations
import { Link } from "react-router-dom";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const CatalogPage = () => {
  const [data, setData] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/catalog")
      .then((response) => {
        console.log("Data dari server:", response.data);
        const updatedData = response.data.map((item) => ({
          ...item,
          img_url: item.img_barang
            ? `data:image/jpeg;base64,${item.img_barang}`
            : null,
        }));
        setData(updatedData);
      })
      .catch((error) => {
        console.error(
          "Error fetching data: ",
          error.response?.data || error.message
        );
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((response) => {
        console.log("Data dari server:", response.data);
        const updatedCourses = response.data.map((course) => ({
          ...course,
          img_url: course.img_skema
            ? `data:image/jpeg;base64,${course.img_skema}`
            : null,
        }));
        setCourses(updatedCourses);
      })
      .catch((error) => {
        console.error(
          "Error fetching data: ",
          error.response?.data || error.message
        );
      });
  }, []);

  const handleSelectCertification = (course) => {
    // Implementasi yang sesuai untuk menangani pemilihan sertifikasi
    console.log("Selected course:", course);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="mt-5">
          <h1
            className="mb-5"
            style={{
              textAlign: "center",
              color: "#34478c",
              fontWeight: "bold",
              fontSize: "60px",
            }}
          >
            Catalog
          </h1>
          <CarouselA />
        </div>
        <div className="container">
          <h1
            style={{
              fontWeight: "bold",
              color: "#34478c",
              textDecoration: "underline",
            }}
            className="text-center mt-5"
          >
            Our Products
          </h1>
          <div className="row mt-4">
            {data.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="d-flex flex-column align-items-center">
                  <Link to={`/Detailcatalog/${item.id}`}>
                    {item.img_url && (
                      <img
                        src={item.img_url}
                        className="card-img-top"
                        alt={item.nama_barang}
                      />
                    )}
                  </Link>

                  <div className="text-center">
                    <h5>{item.nama_barang}</h5>
                    <h5>Rp.{item.harga_barang}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ border: "1px solid black" }}></div>
      </div>
      <div>
        <div className="container home-C d-flex justify-content-center flex-column gap-4">
          <div className="first-text mt-5">
            <h1 style={{ textAlign: "center" }}>Courses (E-learning)</h1>
          </div>
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

        <div className="container-all-courses text-center mt-5">
          <h1>
            <u>Certification</u>
          </h1>
          <div className="d-flex flex-column align-items-center gap-5 justify-content-between mt-3">
            {courses.map((course) => (
              <div
                className="container-skema d-flex align-items-center "
                key={course.id}
              >
                {course.img_url && (
                  <img
                    src={course.img_url}
                    alt={course.nama_skema}
                    style={{
                      height: "80px",
                      marginRight: "10px",
                    }}
                  />
                )}
                <DropdownButton
                  className="drop-btn-skema"
                  id="dropdown-basic-button"
                  title={course.nama_skema}
                  variant="secondary"
                >
                  {/* Dropdown content can go here */}
                </DropdownButton>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CatalogPage;
