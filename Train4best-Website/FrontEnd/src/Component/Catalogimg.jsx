import React from "react";

const products = [
  {
    id: 1,
    title: "GOOD TO GREAT",
    images: "/assets/mini1.png",
    price: "$27",
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

const Catalogcard = () => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-evenly gap-4 mt-5">
        {products.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <div className="aboutcard d-grid gap-3">
                <div className="aboutcard-container ">
                  <div className="catalog-card">
                    <a href="" style={{ textDecoration: "none" }}>
                      <img
                        src={product.images}
                        className="img-fluid catalog-img"
                        alt="Gambar product"
                      />
                      <div className="d-flex flex-column align-items-center">
                        <h2 className="text-black fs-5 fw-bold catalog-text ">
                          {product.title}
                        </h2>
                        <h2 className="text-black fs-6 fw-bold catalog-text">
                          {product.price}
                        </h2>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Catalogcard;
