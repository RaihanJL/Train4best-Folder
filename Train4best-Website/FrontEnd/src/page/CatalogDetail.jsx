import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import back from "../../public/assets/Back-button.png";
import { Link } from "react-router-dom";
import Detailcard from "../Component/Detailcard";
import axios from "axios";

const CatalogDetailpages = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/catalog/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details: ", error);
      });
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="back-container">
        <div>
          <Link to="/CatalogBundle">
            <img src={back} alt="Back" />
          </Link>
        </div>
      </div>
      <div className="container mt-5">
        {product ? (
          <div className="d-flex justify-content-between">
            <div>
              {product.img_barang && (
                <img
                  src={`data:image/jpeg;base64,${product.img_barang}`}
                  alt={product.nama_barang}
                />
              )}
            </div>
            <div className="w-50">
              <div className="diff-box">
                <h1 style={{ color: "#34478c" }} className="mb-3 fw-bold">
                  {product.nama_barang}
                </h1>
                <p className="mb-0">
                  {product.kategori_barang}
                  <br />
                  Published in {product.tahun_terbit}
                </p>
              </div>
              <div className="text-box">
                <div className="d-flex align-items-center justify-content-between price mb-3">
                  <div className="d-flex gap-2 align-items-center">
                    <p className="m-0">Price</p>
                    <p className="m-0 fw-bold fs-3">
                      Rp. {product.harga_barang}
                    </p>
                  </div>
                  <div>
                    {product && product.id && (
                      <Link to={`/Payment/${product.id}`}>
                        <button className="pe-5 px-5 fw-bold">Buy Now</button>
                      </Link>
                    )}
                  </div>
                </div>
                <p className="desc-text">{product.desc_barang}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
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
