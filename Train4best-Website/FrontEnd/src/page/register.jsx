import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <section className="register">
        <div className="left-container">
          <div className="box-container">
            <div className="d-flex justify-content-center">
              <img
                className="img-t4best"
                src="assets/train4best-blue-no-bg.png"
                alt="Train4Best Logo"
              />
            </div>
            <p style={{ color: "red" }} className="text-center fw-bold">
              {msg}
            </p>
            <form onSubmit={Register}>
              <div className="container-register">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label htmlFor="psw">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  id="psw"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="psw">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  id="psw"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  required
                />
                <div className="text-register">
                  <div className="container-login">
                    <p>
                      Already have an account?
                      <Link to="/login"> Login</Link>.
                    </p>
                  </div>

                  <div className="forgot-pwd">
                    <p>Forgot Password?</p>
                  </div>
                </div>
              </div>
              <div className="btn-container">
                <button type="submit" className="register-btn">
                  REGISTER
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
