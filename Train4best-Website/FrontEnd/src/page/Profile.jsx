import React from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import line2 from "../../public/assets/Line 5.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import userbig from "../../public/assets/user-big.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Use named import for jwt-decode
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken); // Use the named import
      setName(decoded.name);
      setEmail(decoded.email);
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-4 d-flex justify-content-between">
        <div className=" w-50 ">
          <form className="user-form  gap-4">
            <label className="text-center fs-1">PROFILE</label>
            <label htmlFor="Username">Username</label>
            <input type="text" placeholder={name} />
            <label htmlFor="Email">E-Mail</label>
            <input type="text" placeholder={email} />

            <div className="w-50 d-flex justify-content-start mt-3">
              <input className="sub-button me-4" type="submit" value="Edit" />
              <input className="sub-button" type="submit" value="Update" />
            </div>
          </form>
        </div>

        <div>
          <img src={line2} alt="line" />
        </div>
        <div className="d-flex flex-column gap-4 align-items-center img-button">
          <img src={userbig} alt="" />
          <button>Change Avatar</button>
          <button>Delete Avatar</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
