import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepages from "./page/home";
import AboutPages from "./page/About";
import CatalogPages from "./page/Catalog";
import ContactPages from "./page/Contact";
import CatalogDetailpages from "./page/CatalogDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./page/Profile";
import Paymentpage from "./page/payment";
import PaymentOptionPage from "./page/pOption";
import HistoryPage from "./page/History";
import DonepaymentPage from "./page/donePayment";
import CourselistPage from "./page/Courseslist";
import CoursesDetailPage from "./page/CoursesDetail";
import CoursesDetailMorePages from "./page/CoursesDetailMore";
import CoursesPage from "./page/Courses";
import RegisterPage from "./page/register";
import LoginPage from "./page/login";
import LandingPage from "./page/landingPage";
import PaymentcoursePage from "./page/paymentcourse";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Homepages />} />
        <Route path="/About" element={<AboutPages />} />
        <Route path="/Contact" element={<ContactPages />} />
        <Route path="/CatalogBundle" element={<CatalogPages />} />
        <Route
          path="/Detailcatalog/:id"
          element={<CatalogDetailpages />}
        />{" "}
        {/* Update this line */}
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/PaymentOption" element={<PaymentOptionPage />} />
        <Route path="/Payment/:id" element={<Paymentpage />} />
        <Route path="/History" element={<HistoryPage />} />
        <Route path="/donePayment" element={<DonepaymentPage />} />
        <Route path="/CoursesDetail" element={<CoursesDetailPage />} />
        <Route path="/CoursesDetailMore" element={<CoursesDetailMorePages />} />
        <Route path="/Courselist" element={<CourselistPage />} />
        <Route path="/Courses" element={<CoursesPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/paymentcourse" element={<PaymentcoursePage />} />
      </Routes>
    </>
  );
}

export default App;
