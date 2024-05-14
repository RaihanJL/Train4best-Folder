import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DashboardPage = () => {
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((response) => response.json())
      .then((data) => {
        const currentDate = new Date();
        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

        // Ubah format data tanggal pendaftaran ke bulan
        const monthlyCounts = {};
        data.forEach((user) => {
          const registerDate = new Date(user.register_date);
          if (registerDate >= threeMonthsAgo && registerDate <= currentDate) {
            const monthYear = registerDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            });
            if (monthlyCounts[monthYear]) {
              monthlyCounts[monthYear]++;
            } else {
              monthlyCounts[monthYear] = 1;
            }
          }
        });

        // Bentuk data untuk chart
        const chartData = Object.keys(monthlyCounts).map((key) => ({
          month: key,
          userCount: monthlyCounts[key],
        }));

        setMonthlyData(chartData);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      <div className="container d-flex justify-content-between align-items-start">
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
              padding: "20px",
              marginTop: "20px",
            }}
            className="d-flex flex-column align-items-center"
          >
            <h2>User Count Chart</h2>
            <BarChart width={1000} height={500} data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="userCount" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
