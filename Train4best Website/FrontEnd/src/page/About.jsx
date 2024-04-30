import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import AboutCard from "../Component/About-card";

const AboutPages = () => {
  return (
    <>
      <Navbar />
      {/* About Us Section */}
      <div className="container-about-us">
        <div className="container-text">
          <div className="text-about-us">
            <h1>
              <u>About Us</u>
            </h1>
            <p>Provide Professional Standardized Trainings,</p>
            <p>Consulting's and Assessments for you and your company!</p>
          </div>
          <div className="text-explanation">
            <p>
              Train4best established its operations in September 2017 to address
              the education and training needs and assistance to Indonesian
              people and organizations in improving their operations, processes
              and profitability as well as for the young generations to lead
              them to success. Our mission is to take part in educating people
              in our country, Indonesia. Train4best provides you with high
              quality trainings, workshops, seminars, consulting and
              assessments. In line with the government goal to certify our
              resources in Indonesia according to the approved SKKNI (Standard
              Kompetensi Kerja Nasional Indonesia).
            </p>
          </div>
        </div>
        <img
          className="img-white-t4best"
          src="/assets/Train4best-putih-logo 1.png"
          alt="Train4best Logo"
        />
        <img
          className="img-ellipse-1"
          src="/assets/Ellipse3.png"
          alt="Ellipse"
        />
        <img
          className="img-ellipse-2"
          src="/assets/Ellipse2.png"
          alt="Ellipse"
        />
      </div>
      {/* About Us Section */}

      {/* Our Service Section */}
      <div className="container-services">
        <div className="container-text-services">
          <h1>
            <u>Our Services</u>
          </h1>
        </div>
        <div className="container-box-services">
          <div className="class-1">
            <div className="section-consulting">
              <p>Consulting</p>
            </div>
            <div className="img-consulting">
              <img src="/assets/consulting.png" alt="Consulting" />
            </div>
            <div className="text-consulting">
              <p>
                Get Competitive and <br></br>Affordable Solutions
              </p>
            </div>
          </div>
          <div className="class-1">
            <div className="section-consulting">
              <p>Certifications</p>
            </div>
            <div className="img-consulting">
              <img src="/assets/certifications.png" alt="Certifications" />
            </div>
            <div className="text-consulting">
              <p>
                Get a Professional <br></br>Certification from a <br></br>
                Certification Body
              </p>
            </div>
          </div>
          <div className="class-1">
            <div className="section-consulting">
              <p>Trainings</p>
            </div>
            <div className="img-consulting">
              <img src="/assets/trainings.png" alt="Trainings" />
            </div>
            <div className="text-consulting">
              <p>
                Get training from <br></br>professional tutors
              </p>
            </div>
          </div>
          <div className="class-1">
            <div className="section-consulting">
              <p>Global Business</p>
            </div>
            <div className="img-consulting">
              <img src="/assets/globalbussiness.png" alt="Global Business" />
            </div>
            <div className="text-consulting">
              <p>
                Open for Collaborations<br></br> Internationally
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Service Section */}
      <AboutCard />
      <Footer />
    </>
  );
};

export default AboutPages;
