import React, { useState, useEffect } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import line2 from "../../public/assets/Line 5.png";
import userbig from "../../public/assets/user-big.png";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State for controlling the popup

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token", {
        withCredentials: true,
      });
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setEmail(decoded.email);
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.put(
        "http://localhost:5000/users",
        { name, email, password },
        config
      );
      if (response.data.success) {
        setMessage(response.data.msg);
        setShowPopup(true); // Show popup on successful update
      } else {
        // Handle failure scenario
        console.error("Error updating profile:", response.data.msg);
        setMessage("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile.");
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-4 d-flex justify-content-between">
        <div className="w-50">
          <form className="user-form gap-4" onSubmit={handleUpdateProfile}>
            <label className="text-center fs-1">PROFILE</label>
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="Email">E-Mail</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="w-50 d-flex justify-content-start mt-3">
              <input className="sub-button me-4" type="submit" value="Edit" />
            </div>
          </form>
        </div>
        <div>
          <img src={line2} alt="line" />
        </div>
        <div className="d-flex flex-column gap-4 align-items-center img-button">
          <img src={userbig} alt="" />
          <button onClick={() => setShowPopup(true)}>Change Avatar</button>{" "}
          {/* Button to open the popup */}
          <button>Delete Avatar</button>
        </div>
      </div>
      <Footer />

      {showPopup && (
        <div className="custom-popup">
          <div className="custom-popup-content">
            <span className="custom-close" onClick={togglePopup}>
              &times;
            </span>
            <h2>{message}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
