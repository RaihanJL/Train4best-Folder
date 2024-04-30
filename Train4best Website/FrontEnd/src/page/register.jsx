// import React from "react";
import { Link } from "react-router-dom";

const registerPage = () => {
    return(
        <>
        <section className="register">
            <div className="left-container">
                <div className="box-container">
                    <div className="d-flex justify-content-center">
                        <img className="img-t4best" src="assets/train4best-blue-no-bg.png" alt="Train4Best Logo" />
                    </div>
                    <form>
                        <div className="container-register">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                name="name"
                                id="name"
                                required
                            />

                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                placeholder="Enter Email"
                                name="email"
                                id="email"
                                required
                            />

                            <label htmlFor="psw">Password</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="psw"
                                id="psw"
                                required
                            />

                            <div className="text-register">
                                <div className="container-login">
                                <p>
                                        Already have an account?<Link to={"/login"}> <a href="login.html">Login</a>.</Link>
                                </p>
                                </div>

                                <div className="forgot-pwd">
                                    <p>Forgot Password?</p>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div>
                    <Link to={"/login"}>
                        <button type="submit" className="register-btn">REGISTER</button>
                    </Link>
                    </div>
                    <a href="login.html"></a>
                </div>
            </div>
        </section>
        </>
    )
}

export default registerPage;