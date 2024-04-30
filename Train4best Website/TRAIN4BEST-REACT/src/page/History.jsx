import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Historylines from "../Component/Historylines";

const HistoryPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="container mt-5">
          <div className="history-background">
            <h1>Payment History</h1>
          </div>
          <div>
            <Historylines />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HistoryPage;
