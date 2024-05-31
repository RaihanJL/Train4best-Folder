import React, { useState, useEffect } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import CarouselA from "../Component/Carousel";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Homepages() {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token", {
        withCredentials: true, // Ensure cookies are sent with the request
      });
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
      fetchCatalogItems(response.data.accessToken);
    } catch (error) {
      console.error("Token refresh failed:", error);
      navigate("/");
    }
  };

  const fetchCatalogItems = async (token) => {
    try {
      const response = await axios.get("http://localhost:5000/catalog", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Failed to fetch catalog items:", error);
    }
  };

  return (
    <>
      <div>
        {/* Navbar Section */}
        <Navbar />
        {/* Jumbotron Section */}
        <div className="container jumb-container">
          <div className="jumbotron">
            <div className="jumb-header">
              <h1>Welcome To</h1>
            </div>
            <div className="jumb-img">
              <img
                className="mid-img"
                src="../assets/train4best-mid.png"
                alt="Jumbotron Image"
              />
            </div>
            <div className="jum-msg">
              <p>Website for Catalog Train4best’s Products and e-learning</p>
            </div>
          </div>
          <div className="jumbo-image">
            <img src="../assets/girl pic.png" alt="Girl" />
          </div>
        </div>
        {/* Jumbotron Section */}

        {/* AboutUs Section */}
        <div className="home-A">
          <div className="blue-bg container">
            <div className="blue-bg-head">
              <h1
                style={{
                  fontSize: "85px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Get to know more
                <br />
                about us
              </h1>
              <p
                style={{
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontSize: "24px",
                }}
              >
                "Getting know something is a beautiful process"
              </p>
              <Link to={"/About"}>
                <button>Get Started &gt;</button>
              </Link>
            </div>
          </div>
          <img className="circle-1" src="../assets/Vector.png" alt="Circle" />
        </div>
        {/* AboutUs Section */}
        <div className="mt-5 pt-5">
          <div className="first-text text-center mt-5 mb-3">
            <h1>
              Looking for something <br />
              interesting?
            </h1>
          </div>
          <CarouselA />
          <div className="last-text d-flex align-items-center justify-content-center gap-5 mt-3">
            <h1>
              Here are some of <br />
              our products
            </h1>
            <Link to={"/CatalogBundle"}>
              <button className="fs-5 fw-bold">Check it out now &gt;</button>
            </Link>
          </div>
        </div>
        {/* Course Section */}
        <div className="crs-background">
          <div className="container">
            <div>
              <h1>
                Get your certification now,
                <br />
                Come learn with us
              </h1>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-4 card-box">
              <div>
                <img src="../assets/Group 52.png" alt="" />
                <p>"Get more certificate"</p>
              </div>
              <div>
                <img src="../assets/Group 53.png" alt="" />
                <p>"Find the right course for you"</p>
              </div>
              <div>
                <img src="../assets/Group 54.png" alt="" />
                <p>"Learn new things"</p>
              </div>
            </div>
            <div>
              <Link to={"/CatalogBundle"}>
                <button
                  style={{ marginTop: "20px" }}
                  className="crs-button fw-bold"
                >
                  Learn more &gt;
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Course Section */}

        {/* Contact Us Section */}
        <div className="container cus-section" style={{ position: "relative" }}>
          <div>
            <h1>Contact Us Here</h1>
          </div>
          <div className="d-flex align-items-center justify-content-evenly">
            <img src="../assets/map.png" alt="Map" />
            <div>
              <h2 style={{ fontSize: "48px" }}>
                if you're interested,
                <br />
                contact us now
              </h2>
              <Link to={"/Contact"}>
                <button className="cus-button fw-bold">Contact Us</button>
              </Link>
            </div>
          </div>
          <div style={{ marginLeft: "135px" }}>
            <p>
              Kindo Building, Block C2, Jl. Duren Tiga Raya 101, Jakarta 12760
              <br />
              RumahLab Train4best Jl. Laboratorium No.1 Duren
              <br />
              Tiga, Jakarta Selatan, DKI Jakarta 12760
            </p>
          </div>
          <img
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              margin: "20px",
            }}
            src="../assets/Train4best-putih-logo 1.png"
            alt="Train4best Logo"
          />
        </div>
        {/* Contact Us Section */}
      </div>
      <Footer />
    </>
  );
}

export default Homepages;
