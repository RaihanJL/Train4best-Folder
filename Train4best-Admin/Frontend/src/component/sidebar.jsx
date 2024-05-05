import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column gap-5 mt-4 sidebar">
      <Link className="sidebar-link" to={"/user"}>
        <h2>User</h2>
      </Link>
      <Link className="sidebar-link" to={"/catalog"}>
        <h2>Catalog</h2>
      </Link>
      <Link className="sidebar-link" to={"/e-learning"}>
        <h2>E-Learning</h2>
      </Link>
      <div className="d-flex align-items-center sidebar-link">
        <h2>Payment</h2>
        <Nav style={{ padding: 0 }}>
          <NavDropdown
            id="nav-dropdown-dark-example"
            className="custom-dropdown-1"
          >
            <NavDropdown.Item>
              <Link
                to={"/paymentCatalog"}
                style={{ textDecoration: "none", color: "#34478c" }}
              >
                Payment Catalog
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link
                to={"/paymentCourses"}
                style={{ textDecoration: "none", color: "#34478c" }}
              >
                Payment Courses
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
