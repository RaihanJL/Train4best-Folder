import React, { useState } from "react";
import axios from "axios";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const ContactPages = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const Contacts = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contacts", {
        name,
        email,
        phone,
        subject,
        message,
      });
      setSuccess(true); // Set success to true on successful submission
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setMsg("");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        setSuccess(false); // Set success to false on error
      }
    }
  };

  const handleCloseAlert = () => {
    setSuccess(false);
  };

  const openLinkInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="C-head">
          <h1>Contact Us</h1>
        </div>
        <div className="d-flex justify-content-evenly mb-5">
          <div className="C-form">
            <form
              className="d-flex flex-column gap-3 align-items-center"
              onSubmit={Contacts}
            >
              <input
                className="m-0"
                type="text"
                id="Name"
                name="Name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                id="Email"
                name="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                id="Phone"
                name="Phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                className="m-0"
                type="text"
                id="Subject"
                name="Subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                id="Message"
                name="Message"
                placeholder="Message"
                className="msg-box"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="C-button">
                Send Message
              </button>
            </form>
            {msg && <p className="error-message">{msg}</p>}
          </div>
          <div className="C-info">
            <h2>Get in Touch</h2>
            <div className="d-flex flex-column gap-3 mb-4">
              <div className="d-flex align-items-center gap-3">
                <img
                  className="C-plogo"
                  src="../assets/image 24.png"
                  alt="Phone"
                />
                <p>
                  +62-896-5220-8914, +62-813-1789-8399,
                  <br />
                  +62-811-8041-230
                </p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img
                  className="C-plogo"
                  src="../assets/image 25.png"
                  alt="Email"
                />
                <p>Admin@train4best.com</p>
              </div>
            </div>
            <h2>Follow Us</h2>
            <div className="C-followus d-flex gap-4 justify-content-center align-items-center mb-4">
              <div
                className="clickable"
                onClick={() =>
                  openLinkInNewTab(
                    "https://www.linkedin.com/company/train4best-indonesia/"
                  )
                }
              >
                <img src="../assets/image 21.png" alt="LinkedIn" />
              </div>
              <div
                className="clickable"
                onClick={() =>
                  openLinkInNewTab("https://www.facebook.com/Train4best")
                }
              >
                <img
                  style={{ height: "11vh" }}
                  src="../assets/image 22.png"
                  alt="Facebook"
                />
              </div>
              <div
                className="clickable"
                onClick={() =>
                  openLinkInNewTab("https://www.instagram.com/train4best/")
                }
              >
                <img
                  style={{ height: "12vh" }}
                  src="../assets/image 23.png"
                  alt="Instagram"
                />
              </div>
            </div>
            <div>
              <h2>Opening Hours</h2>
              <p>Monday - Friday: 10.00 a.m. - 5.00 p.m.</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="C-location">
            <h3 className="mb-4">Our Location</h3>
            <div className="d-flex align-items-center gap-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3811.1457974227324!2d106.8312219!3d-6.2544525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f395013fb1f9%3A0x881406d54190ea56!2sTrain4best%20Testing%20Center!5e1!3m2!1sid!2sid!4v1709865136227!5m2!1sid!2sid"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="C-maps"
              ></iframe>
              <p style={{ color: "white", fontSize: "20px" }}>
                Kindo Building, Block C2, Jl. Duren Tiga Raya 101,
                <br />
                Jakarta 12760
                <br />
                <br />
                RumahLab Train4best Jl. Laboratorium No.1 Duren <br />
                Tiga, Jakarta Selatan, DKI Jakarta 12760
              </p>
            </div>
            <img
              src="../assets/Train4best-putih-logo 1.png"
              alt="Train4best Logo"
            />
          </div>
        </div>
      </div>
      <Footer />
      {success && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Message Sent Successfully!</h2>
            <button onClick={handleCloseAlert}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPages;
