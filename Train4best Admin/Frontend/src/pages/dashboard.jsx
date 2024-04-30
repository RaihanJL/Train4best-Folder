import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-between align-align-items-start">
        <div>
          <Sidebar />
        </div>
        <div>
          <h2 style={{ textAlign: "right", color: "#34478C" }}>
            Welcome back, Admin
          </h2>
          <div
            style={{
              width: "1000px",
              height: "500px",
              borderRadius: "10px",
              backgroundColor: "#34478C",
            }}
            className="mt-3"
          ></div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
