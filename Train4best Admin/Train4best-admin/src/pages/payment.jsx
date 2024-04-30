import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";

const Paymentpage = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex container justify-content-between align-items-start">
        <Sidebar />
      </div>
    </>
  );
};
export default Paymentpage;
