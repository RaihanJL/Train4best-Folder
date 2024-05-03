import React from "react";

const History = [
  {
    id: 1,
    title: "Good To Great",
    price: "$27",
    date: "Sunday, 03 March 2024",
    code: "B1297",
    status: "Successful",
  },
  {
    id: 2,
    title: "Big Data Scientist",
    price: "$250",
    date: "Sunday, 03 March 2024",
    code: "C2309",
    status: "Successful",
  },
  {
    id: 3,
    title: "Begin Again",
    price: "$11.99",
    date: "Sunday, 03 March 2024",
    code: "B2302",
    status: "Processing",
  },
  {
    id: 4,
    title: "Digital Marketing Manager",
    price: "$250",
    date: "Sunday, 03 March 2024",
    code: "C2456",
    status: "Failed",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Successful":
      return "success";
    case "Processing":
      return "warning";
    case "Failed":
      return "danger";
    default:
      return "light"; // default background color
  }
};

const Historylines = () => {
  return (
    <div className="container">
      {History.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div className="d-flex align-items-center justify-content-between mt-5">
              <div>
                <div className="d-flex first-text justify-content-between align-items-center">
                  <p className="fw-bold">{item.title}</p>
                  <p>{item.price}</p>
                </div>
                <div className="d-flex">
                  <p style={{ fontSize: "32px" }}>
                    {item.date} | {item.code}
                  </p>
                  <p></p>
                </div>
              </div>
              <div>
                <button
                  className={`btn btn-${getStatusColor(item.status)} fw-bold`}
                  style={{ padding: "15px 30px", fontSize: "24px" }}
                >
                  {item.status}
                </button>
              </div>
            </div>
            <hr></hr>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Historylines;
