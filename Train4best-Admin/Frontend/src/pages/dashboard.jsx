import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { format } from "date-fns";

const DashboardPage = () => {
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:8081/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken); // Use the named import
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      navigate("/");
    }
  };

  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); // Log the JSON data
        const currentDate = new Date();
        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

        const monthlyCounts = {};
        data.forEach((user) => {
          const registerDate = new Date(user.createdAt);
          if (registerDate >= threeMonthsAgo && registerDate <= currentDate) {
            const monthYear = format(registerDate, "MMMM yyyy");
            monthlyCounts[monthYear] = (monthlyCounts[monthYear] || 0) + 1;
          }
        });

        const chartData = Object.keys(monthlyCounts).map((key) => ({
          month: key,
          userCount: monthlyCounts[key],
        }));

        setMonthlyData(chartData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
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
            Welcome back, {name}
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
            {loading ? (
              <p>Loading...</p>
            ) : (
              <BarChart width={1000} height={500} data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="userCount" fill="#8884d8" />
              </BarChart>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
