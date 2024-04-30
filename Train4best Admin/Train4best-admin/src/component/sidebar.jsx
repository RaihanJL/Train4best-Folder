import { Link } from "react-router-dom";
// Assuming you have a separate CSS file for styling

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
      <Link className="sidebar-link" to={"/payment"}>
        <h2>Payment</h2>
      </Link>
    </div>
  );
};

export default Sidebar;
