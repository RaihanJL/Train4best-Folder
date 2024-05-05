import { Link } from "react-router-dom";

const LoginPage = () => {
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
                <form>
                  <div className="container-forlogin">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      name="email"
                      id="email"
                      required
                    />
                    <label htmlFor="pw">Password</label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="psw"
                      id="psw"
                      required
                    />

                    <div className="text-login">
                      <div className="container-regist">
                        <p>
                          Don't have an account?{" "}
                          <Link to={"/register"}>Register here.</Link>
                        </p>
                      </div>

                      <div className="forgot-pw">
                        <p>Forgot Password?</p>
                      </div>
                    </div>
                  </div>
                </form>
                <Link style={{ textDecoration: "none" }} to={"/Home"}>
                  <div className="btn-container">
                    <button type="submit" className="login-btn">
                      LOGIN
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
