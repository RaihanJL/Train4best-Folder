import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import CarouselA from "../Component/Carousel";
import "../styles/Catalogpage.css"; // Import CSS file for animations
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "GOOD TO GREAT",
    images: "/assets/mini1.png",
    price: "$27",
    url: "/Detailcatalog",
  },
  {
    id: 2,
    title: "A Love & Beyond",
    images: "/assets/mini2.png",
    price: "$15",
  },
  {
    id: 3,
    title: "BATTLE OF INK AND ICE",
    images: "/assets/mini3.png",
    price: "$27",
  },
  {
    id: 4,
    title: "THE PERFECT CUPCAKE",
    images: "/assets/mini4.png",
    price: "$5.64",
  },
  {
    id: 5,
    title: "Begin Again",
    images: "/assets/mini5.png",
    price: "$11.99",
  },
  {
    id: 6,
    title: "Cooking the Books",
    images: "/assets/mini6.png",
    price: "$15",
  },
  {
    id: 7,
    title: "Crossing The Charm",
    images: "/assets/mini7.png",
    price: "$15",
  },
  {
    id: 8,
    title: "Practical Design Discovery",
    images: "/assets/mini8.png",
    price: "$15",
  },
];

const itemsPerPage = 8; // Number of products per page

const CatalogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState("forward");

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setDirection(pageNumber > currentPage ? "forward" : "backward");
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className=" mt-5">
          <h1
            className="mb-5"
            style={{
              textAlign: "center",
              color: "#34478c",
              fontWeight: "bold",
              fontSize: "48px",
            }}
          >
            Products of the Month
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
          <div
            className={`d-flex flex-wrap justify-content-evenly mt-5 ${
              direction === "forward" ? "slide-in-right" : "slide-in-left"
            }`}
          >
            {currentItems.map((product) => (
              <div className="aboutcard d-grid gap-3" key={product.id}>
                <div className="aboutcard-container ">
                  <div className="catalog-card ">
                    <Link to={product.url}>
                      <img
                        src={product.images}
                        className="img-fluid catalog-img"
                        alt="Product image"
                      />
                    </Link>
                    <div className="d-flex flex-column align-items-center">
                      <h2 className="text-black fs-5 fw-bold catalog-text mt-3">
                        {product.title}
                      </h2>
                      <h2 className="text-black fs-6 fw-bold catalog-text mb-5">
                        {product.price}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={products.length}
            paginate={paginate}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center mt-4">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CatalogPage;
