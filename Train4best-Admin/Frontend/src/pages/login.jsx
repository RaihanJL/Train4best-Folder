import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/login", {
        email: email,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <section className="login">
        <div className="background-blue">
          <div className="right-container">
            <div className="d-flex justify-content-center align-items-center ">
              <div className="box-login">
                <div className="d-flex justify-content-center">
                  <img
                    className="img-t4best"
                    src="assets/train4best-blue-no-bg.png"
                    alt="Train4Best Logo"
                  />
                </div>
                <form onSubmit={Auth}>
                  <p>{msg}</p>
                  <div className="container-forlogin">
                    <label htmlFor="email">Email or Username</label>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label htmlFor="pw">Password</label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="psw"
                      id="psw"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div className="text-login">
                      <div className="container-regist">
                        <p>
                          Don't have an account?{" "}
                          <Link to={"/"}>Register here.</Link>
                        </p>
                      </div>
                      <div className="forgot-pw">
                        <p>Forgot Password?</p>
                      </div>
                    </div>
                  </div>
                  <div className="btn-container">
                    <button type="submit" className="login-btn">
                      LOGIN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
