import React from "react";

const viewed = [
  {
    id: 1,
    title: "Battle Of Ink And Ice",
    images: "/assets/viewed1.png",
    price: "$27",
    category: "Books",
  },
  {
    id: 2,
    title: "The Perfect Cupcake",
    images: "/assets/viewed2.png",
    price: "$15",
    category: "Books",
  },
  {
    id: 3,
    title: "Begin Again",
    images: "/assets/viewed3.png",
    price: "$27",
    category: "Books",
  },
];

const Detailcard = () => {
  return (
    <>
      <div>
        <div className="d-flex flex-wrap justify-content-evenly gap-4 mt-5">
          {viewed.map((viewed) => {
            return (
              <React.Fragment key={viewed.id}>
                <div className="aboutcard d-grid gap-3">
                  <div className="aboutcard-container ">
                    <div className="catalog-card">
                      <img
                        src={viewed.images}
                        className="img-fluid catalog-img"
                        alt="Gambar product"
                      />
                      <div className="d-flex flex-column align-items-center">
                        <h2 className="text-black fs-5 fw-bold catalog-text mt-3">
                          {viewed.price}
                        </h2>
                        <h2
                          style={{ color: "#34478c" }}
                          className=" fs-5 fw-bold catalog-text "
                        >
                          {viewed.title}
                        </h2>
                        <h2 className="text-black fs-5  catalog-text ">
                          {viewed.category}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Detailcard;
