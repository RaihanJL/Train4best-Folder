import { Link } from "react-router-dom";

const Loginpage = () => {
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
                  <div className="container-forlogin mb-5">
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
                  </div>
                </form>
                <Link style={{ textDecoration: "none" }} to={"/dashboard"}>
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

export default Loginpage;
