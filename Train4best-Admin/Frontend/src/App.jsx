import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Userpage from "./pages/user";
import Catalogpage from "./pages/catalog";
import Elearningpage from "./pages/e-learning";
import PaymentCatalogpage from "./pages/paymentCatalog";
import PaymentCoursespage from "./pages/paymentCourses";
import Loginpage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/user" element={<Userpage />} />
        <Route path="/catalog" element={<Catalogpage />} />
        <Route path="/e-learning" element={<Elearningpage />} />
        <Route path="/paymentCatalog" element={<PaymentCatalogpage />} />
        <Route path="/paymentCourses" element={<PaymentCoursespage />} />
      </Routes>
    </>
  );
}

export default App;
