import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import DataTable from "react-data-table-component";
import ConfirmationModal from "../component/Popup";

const PaymentCatalogpage = () => {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const columns = [
    {
      name: "ID courses",
      selector: (row) => row.id,
    },
    {
      name: "Courses",
      selector: (row) => row.courses,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Payment Code",
      selector: (row) => row.paymentCode,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Payment Method",
      selector: (row) => row.paymentMethod,
    },
    {
      name: "Transaction Date",
      selector: (row) => row.transactionDate,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => {
        let color = "";
        switch (row.status) {
          case "Done":
            color = "green";
            break;
          case "Pending":
            color = "#ffc107";
            break;
          case "Failed":
            color = "red";
            break;
          default:
            color = "black";
            break;
        }
        return (
          <p
            style={{
              backgroundColor: color,
              color: "white",
              fontWeight: "bold",
              paddingTop: "8px",
              width: "120px",
              textAlign: "center",
              paddingBottom: "8px",
              borderRadius: "5px",
              border: "none",
              cursor: "default",
              margin: "0",
            }}
          >
            {row.status}
          </p>
        );
      },
    },

    {
      name: "Actions",
      cell: (row) => (
        <>
          <button className="mx-1" onClick={() => handleEdit(row)}>
            Edit
          </button>
        </>
      ),
    },
  ];
  const data = [
    {
      id: "1",
      courses: "Big Data Scientist",
      name: "Tasya",
      email: "tasya@gmail.com",
      phone: "086594895463",
      paymentCode: "1341",
      price: "Rp.20.000",
      paymentMethod: "BCA",
      transactionDate: "02-10-2004",
      status: "Done",
    },
    {
      id: 2,
      courses: "Fiber Optic Design Engineer",
      name: "Raihan",
      email: "Raihan@gmail.com",
      password: "9999",
      phone: "086594895463",
      paymentCode: "1342",
      price: "Rp.20.000",
      paymentMethod: "Mandiri",
      transactionDate: "02-10-2004",
      status: "Failed",
    },
    {
      id: 3,
      courses: "Digital Marketing Manager",
      name: "ekal",
      email: "ekal@gmail.com",
      password: "9999",
      phone: "086594895463",
      paymentCode: "1343",
      price: "Rp.20.000",
      paymentMethod: "BCA",
      transactionDate: "02-10-2004",
      status: "Pending",
    },
    {
      id: 4,
      courses: "Perekayasaan Platform IOT",
      name: "nadia",
      email: "nadia@gmail.com",
      password: "9999",
      phone: "086594895463",
      paymentCode: "1344",
      price: "Rp.20.000",
      paymentMethod: "Mandiri",
      transactionDate: "02-10-2004",
      status: "Pending",
    },
    {
      id: 5,
      courses: "Teknisi K3 Bekerja Pada Ketinggian",
      name: "kevin",
      email: "kevin@gmail.com",
      password: "9999",
      phone: "086594895463",
      paymentCode: "1345",
      price: "Rp.20.000",
      paymentMethod: "BCA",
      transactionDate: "02-10-2004",
      status: "Failed",
    },
  ];
  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  function handleEdit(row) {
    // Here you can open a modal or navigate to an edit page
    console.log("Editing row:", row);
  }

  function handleRemove(row) {
    const newData = records.filter((record) => record.id !== row.id);
    setSelectedRecord(row);
    setShowConfirmation(true);
    console.log("Removing row:", row);
  }
  function handleConfirmDelete() {
    const newData = records.filter((record) => record.id !== selectedRecord.id);
    setRecords(newData);
    setSelectedRecord(null);
    setShowConfirmation(false); // Close the confirmation dialog
  }

  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      <div className="d-flex container justify-content-between align-items-start">
        <div>
          <Sidebar />
        </div>
        <div className="w-75">
          <div style={{ borderBottom: "2px solid black" }}>
            <h2 className="text-center mb-2 ">Payment Courses</h2>
          </div>
          <div className="mt-2">
            <div className="text-end">
              <input
                className="p-1 rounded"
                type="text"
                onChange={handleFilter}
                placeholder="Search"
              />
            </div>
            <DataTable
              columns={columns}
              data={records}
              customStyles={{
                rows: {
                  style: {
                    fontSize: "16px", // Adjust the font size here
                    padding: "5px", // Adjust the padding here
                    margin: "2px 0", // Adjust the margin here
                  },
                },
                headCells: {
                  style: {
                    fontSize: "16px", // Adjust the font size here
                  },
                },
                cells: {
                  style: {
                    fontSize: "16px", // Adjust the font size here
                  },
                },
              }}
              fixedHeader
              pagination
            ></DataTable>
          </div>
        </div>
      </div>
      <ConfirmationModal
        show={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default PaymentCatalogpage;
