import React from "react";
import { Link } from "react-router-dom";

const Courses = [
  {
    id: 1,
    images: "/assets/viewed1.png",
    title: "Big Data Scientist",
    institution: "LSP Teknologi Digital",
    price: "$27",
    links: "/CoursesDetail",
  },
  {
    id: 2,
    images: "/assets/viewed1.png",
    title: "Fiber Optic Design Engineer",
    institution: "LSP Teknologi Digital",
    price: "$27",
  },
  {
    id: 3,
    images: "/assets/viewed1.png",
    title: "Digital Marketing Manager",
    institution: "LSP Teknologi Digital",
    price: "$27",
  },
  {
    id: 4,
    images: "/assets/viewed1.png",
    title: "Teknisi K3 Bekerja pada Ketinggian",
    institution: "LSP Teknologi Digital",
    price: "$27",
  },
  {
    id: 5,
    images: "/assets/viewed1.png",
    title: "Perekayasaan Platform IOT",
    institution: "LSP Teknologi Digital",
    price: "$27",
  },
  {
    id: 6,
    images: "/assets/viewed1.png",
    title: "Perekayasaan Platform IOT",
    institution: "LSP Teknologi Digital",
    price: "$27",
  },
];

const Coursecard = () => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-evenly align-items-center">
        {Courses.map((course, index) => {
          return (
            <React.Fragment key={course.id}>
              <div className="container-courses">
                <div className="box-card-courses">
                  <div>
                    <img
                      className="photo-courses"
                      src="/assets/Detailcourse1.png"
                      alt="Course"
                    />
                  </div>
                  <div className="text-box-C">
                    <h5>
                      <b className="fs-6">{course.title}</b>
                    </h5>
                    <p>{course.institution}</p>
                    <span className="heading me-2">5.0</span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <h5 className="mt-3">
                      <b>{course.price}</b>
                    </h5>

                    <Link
                      style={{
                        color: "white",
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "end",
                      }}
                      to={course.links}
                    >
                      <b>See More &gt;</b>
                    </Link>
                  </div>
                </div>
              </div>
              {(index + 1) % 2 === 0 && <div className="w-100"></div>}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Coursecard;
