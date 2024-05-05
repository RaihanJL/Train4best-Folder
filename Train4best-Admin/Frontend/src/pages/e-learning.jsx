import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import DataTable from "react-data-table-component";
import ConfirmationModal from "../component/Popup";
import { Link } from "react-router-dom";

const Elearningpage = () => {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const data = [
    {
      id: 1,
      name: "SKEMA LSP ELEKTRONIKA INDONESIA",
      image: "/assets/logo-LSP-1.png",
      links: "/catalog",
    },
    {
      id: 2,
      name: "SKEMA LSP TENAGA TEKNIK INDONESIA",
      image: "/assets/logo-LSP-2.png",
      links: "/user",
    },
    {
      id: 3,
      name: "SKEMA LSP TEKNOLOGI DIGITAL",
      image: "/assets/logo-LSP-3.png",
      links: "/e-learning",
    },
    {
      id: 4,
      name: "SKEMA LSP P3 TEKNOLOGI DIGITAL",
      image: "/assets/logo-LSP-4.png",
      links: "/catalog",
    },
    {
      id: 5,
      name: "SKEMA LSP TELEKOMUNIKASI",
      image: "/assets/logo-LSP-5.png",
      links: "/catalog",
    },
    {
      id: 6,
      name: "SKEMA LSP TELEKOMUNIKASI INDONESIA",
      image: "/assets/logo-LSP-6.png",
      links: "/catalog",
    },
  ];

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Image",
      cell: (row) => (
        <img
          src={row.image}
          alt={row.name}
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <button
            style={{ padding: "5px 10px", fontSize: "0.8em" }}
            onClick={() => handleEdit(row)}
            className="me-1"
          >
            Edit
          </button>
          <button
            style={{ padding: "5px 10px", fontSize: "0.8em" }}
            onClick={() => handleRemove(row)}
            className="m-1"
          >
            Delete
          </button>
          <Link to={row.links}>
            <button style={{ padding: "5px 10px", fontSize: "0.8em" }}>
              Select
            </button>
          </Link>
        </>
      ),
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
            <h2 className="text-center mb-2 ">E-Learning</h2>
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

export default Elearningpage;
