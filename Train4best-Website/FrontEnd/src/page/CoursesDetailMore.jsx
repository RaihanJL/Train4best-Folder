import back from "../../public/assets/Back-button.png";
import { Link } from "react-router-dom";
import Footer from "/src/Component/Footer";
import Navbar from "/src/Component/Navbar";

const CoursesDetailMorePages = () => {
  return (
    <>
      <Navbar />

      <div className="back-container">
        <div className="">
          <Link to={"/CoursesDetail"}>
            <img src={back}></img>
          </Link>
        </div>
      </div>

      <div>
        <div className="detail-videos">
          <video width="600" height="350" controls>
            <source src="/assets/contohvideo.mp4" type="video/mp4" />
            <source src="mov_bbb.ogg" type="video/ogg" />
            Your browser does not support HTML video.
          </video>
        </div>

        <div className="detail-videos-text">
          <p>Create a Data Warehouse (Membuat sebuah Gudang Data)</p>
          <p
            style={{
              borderBottom: "2px solid #000",
              marginBottom: "30px",
              lineHeight: "200%",
            }}
          >
            ICADBS503B
          </p>
        </div>
      </div>

      <div>
        <div className="video-list">
          <p style={{ color: "black", marginLeft: "175px", fontSize: "20px" }}>
            2.
          </p>
          <img className="img-list" src="/public/assets/thumbnail1.png"></img>
          <div className="video-description">
            <p
              style={{
                color: "black",
                fontSize: "20px",
                marginBottom: 0,
                marginRight: "175px",
              }}
            >
              ICADBS602A
            </p>
            <p
              style={{ color: "black", fontSize: "20px", marginRight: "175px" }}
            >
              Develop a Knowledge Management Strategy (Mengembangkan Strategi
              Manajemen Pengetahuan)
            </p>
          </div>
        </div>
        <br />

        <div className="video-list">
          <p style={{ color: "black", marginLeft: "175px", fontSize: "20px" }}>
            3.
          </p>
          <img className="img-list" src="/public/assets/thumbnail1.png"></img>
          <div className="video-description">
            <p
              style={{
                color: "black",
                fontSize: "20px",
                marginBottom: 0,
                marginRight: "175px",
              }}
            >
              ICADMT401A
            </p>
            <p
              style={{ color: "black", fontSize: "20px", marginRight: "175px" }}
            >
              Create Visual Design Components for Digital Media (Membuat
              Komponen Desain Visual Untuk Media Digital)
            </p>
          </div>
        </div>
        <br />

        <div className="video-list">
          <p style={{ color: "black", marginLeft: "175px", fontSize: "20px" }}>
            4.
          </p>
          <img className="img-list" src="/public/assets/thumbnail1.png"></img>
          <div className="video-description">
            <p
              style={{
                color: "black",
                fontSize: "20px",
                marginBottom: 0,
                marginRight: "175px",
              }}
            >
              ICTTEN5204A
            </p>
            <p
              style={{ color: "black", fontSize: "20px", marginRight: "175px" }}
            >
              Membuat solusi teknis dari spesifikasi bisnis
            </p>
          </div>
        </div>
        <br />

        <div className="video-list">
          <p style={{ color: "black", marginLeft: "175px", fontSize: "20px" }}>
            5.
          </p>
          <img className="img-list" src="/public/assets/thumbnail1.png"></img>
          <div className="video-description">
            <p
              style={{
                color: "black",
                fontSize: "20px",
                marginBottom: 0,
                marginRight: "175px",
              }}
            >
              ICAICT509A
            </p>
            <p
              style={{ color: "black", fontSize: "20px", marginRight: "175px" }}
            >
              Mengumpulkan data untuk mengidentifikasi kebutuhan bisnis
            </p>
          </div>
        </div>
        <br />
      </div>

      <Footer />
    </>
  );
};

export default CoursesDetailMorePages;
