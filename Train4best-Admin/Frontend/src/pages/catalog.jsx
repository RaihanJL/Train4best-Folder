import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import DataTable from "react-data-table-component";
import ConfirmationModal from "../component/Popup";

const Catalogpage = () => {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Image",
      cell: (row) => (
        <img src={row.image} style={{ width: "50px", height: "50px" }} />
      ),
    },
    {
      name: "Nama",
      selector: (row) => row.nama,
      sortable: true,
    },
    {
      name: "Kategori",
      selector: (row) => row.kategori,
      sortable: true,
    },
    {
      name: "Tahun",
      selector: (row) => row.tahun,
      sortable: true,
    },
    {
      name: "Desc",
      selector: (row) => row.desc,
      cell: (row) => {
        return (
          <p
            style={{
              fontSize: "12px",
              textAlign: "justify",
              width: "750px",
              paddingTop: "20px",
            }}
          >
            {row.desc}
          </p>
        );
      },
    },
    {
      name: "Harga",
      selector: (row) => row.harga,
      cell: (row) => {
        return (
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            {row.harga}
          </p>
        );
      },
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <button
            style={{ width: "90px" }}
            className="mx-1"
            onClick={() => handleEdit(row)}
          >
            Edit
          </button>
          <button style={{ width: "90px" }} onClick={() => handleRemove(row)}>
            Delete
          </button>
        </>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      image: "/assets/mini1.png",
      nama: "Good to Great",
      kategori: "Nonfiction | Book | Adult",
      tahun: "Published in 2001",
      desc: "Good to Great, published in 2001, serves as both a follow-up and thematic prequel to author Jim Collins’s 1994 best seller, Built to Last. Comprehensive in the scope of its research, Good to Great is an examination of the defining qualities of greatness in companies that have made a pivotal transition from “good” (performing relatively consistently) to “great” (performing exceptionally). In making his arguments, Collins brings his expertise as a faculty member at the Stanford University Graduate School of Business, as well as his time at the helm of his own research laboratory in Boulder, Colorado.",
      harga: "$27",
    },
    {
      id: 2,
      image: "/assets/mini1.png",
      nama: "Handsome",
      kategori: "Nonfiction | Book | Adult",
      tahun: "Published in 2001",
      desc: "Good to Great, published in 2001, serves as both a follow-up and thematic prequel to author Jim Collins’s 1994 best seller, Built to Last. Comprehensive in the scope of its research, Good to Great is an examination of the defining qualities of greatness in companies that have made a pivotal transition from “good” (performing relatively consistently) to “great” (performing exceptionally). In making his arguments, Collins brings his expertise as a faculty member at the Stanford University Graduate School of Business, as well as his time at the helm of his own research laboratory in Boulder, Colorado.",
      harga: "$27",
    },
  ];
  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.nama.toLowerCase().includes(event.target.value.toLowerCase());
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
            <h2 className="text-center mb-2 ">CATALOG</h2>
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
                    fontSize: "16px",
                  },
                },
                headCells: {
                  style: {
                    fontSize: "16px",
                    maxWidth: "40% !important", // Align head cells to center
                    fontWeight: "bold",
                  },
                },
                cells: {
                  style: {
                    fontSize: "16px",

                    textAlign: "center", // Align cell data to center
                  },
                },
              }}
              fixedHeader
              pagination
              onRowSelected={setSelectedRecord}
            />
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
export default Catalogpage;
