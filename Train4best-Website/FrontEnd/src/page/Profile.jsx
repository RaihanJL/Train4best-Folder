import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import line2 from "../../public/assets/Line 5.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import userbig from "../../public/assets/user-big.png";

const ProfilePage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-4 d-flex justify-content-between">
        <form className="user-form w-50 ">
          <label htmlFor="User">User</label>
          <input type="text" placeholder="User" />
          <label htmlFor="Username">Username</label>
          <input type="text" placeholder="User123123" />
          <label htmlFor="Email">E-Mail</label>
          <input type="text" placeholder="User39@gmail.com" />
          <label htmlFor="Password">Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="pass-text"
            />
            {showPassword ? (
              <VisibilityOffIcon
                className="toggle-password"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <VisibilityIcon
                className="toggle-password"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
          <label htmlFor="Phone">Phone</label>
          <input type="text" placeholder="+62 990-7654-0987"></input>
          <div className="w-50 d-flex justify-content-start mt-3">
            <input className="sub-button me-4" type="submit" value="Edit" />
            <input className="sub-button" type="submit" value="Update" />
          </div>
        </form>

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
