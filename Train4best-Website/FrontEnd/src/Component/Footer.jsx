import React from "react";

const footer = () => {
  return (
    <>
      <footer>
        <div className="container footer-container">
          <div className="first-section">
            <img
              src="../assets/Train4best-putih-logo 1.png"
              alt="Train4best Logo"
            />
          </div>
          <div className="second-section">
            <div>
              <div>
                <h5>About Us</h5>
                <p>
                  Provide Professional Standarized, Trainings, Consultings, and
                  Assessments for you and your company!
                </p>
              </div>
              <div style={{ marginTop: "50px" }}>
                <h5>Follow Us</h5>
                <img
                  src="../assets/Screenshot_2024-02-26_115104-removebg-preview.png"
                  alt="Follow Us"
                />
                <img
                  src="../assets/Screenshot_2024-02-26_115109-removebg-preview.png"
                  alt="Follow Us"
                />
                <img
                  src="../assets/Screenshot_2024-02-26_115114-removebg-preview.png"
                  alt="Follow Us"
                />
              </div>
            </div>
          </div>
          <div className="third-section">
            <h5>Contact</h5>
            <div className="contact-footer-1">
              <div>
                <img src="../assets/image 3.png" alt="Address" />
              </div>
              <div>
                <p style={{ paddingBottom: "5px" }}>
                  Kindo Building, Block C2, Jl. Duren Tiga Raya 101, Jakarta
                  12760
                </p>
                <p>
                  RumahLab Train4best Jl. Laboratorium No.1 Duren Tiga, Jakarta
                  Selatan, DKI Jakarta 12760
                </p>
              </div>
            </div>
            <div className="contact-footer-2">
              <div>
                <img src="../assets/image 2.png" alt="Phone" />
              </div>
              <div>
                <p>+62-896-5220-8914, +62-813-1789-8399, +62-811-8041-230</p>
              </div>
            </div>
            <div className="contact-footer-3">
              <div>
                <img src="../assets/image 1.png" alt="Email" />
              </div>
              <div>
                <p>Admin@train4best.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
