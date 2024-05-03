import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Userpage from "./pages/user";
import Catalogpage from "./pages/catalog";
import Elearningpage from "./pages/e-learning";
import Paymentpage from "./pages/payment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/user" element={<Userpage />} />
        <Route path="/catalog" element={<Catalogpage />} />
        <Route path="/e-learning" element={<Elearningpage />} />
        <Route path="/payment" element={<Paymentpage />} />
      </Routes>
    </>
  );
}

export default App;
