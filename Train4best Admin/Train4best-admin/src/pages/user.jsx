import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import DataTable from "react-data-table-component";
import ConfirmationModal from "../component/Popup";

const Userpage = () => {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const columns = [
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
      name: "Password",
      selector: (row) => (showPassword ? row.password : "********"),
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <button className="mx-1" onClick={() => handleEdit(row)}>
            Edit
          </button>
          <button onClick={() => handleRemove(row)}>Delete</button>
        </>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      name: "Tasya",
      email: "tasya@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 2,
      name: "Raihan",
      email: "Raihan@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 3,
      name: "ekal",
      email: "ekal@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 4,
      name: "nadia",
      email: "nadia@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 5,
      name: "kevin",
      email: "kevin@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 6,
      name: "fathir",
      email: "fathir@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 7,
      name: "bilqis",
      email: "bilqis@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 8,
      name: "revan",
      email: "revan@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 9,
      name: "kevin",
      email: "kevin@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 10,
      name: "fathir",
      email: "fathir@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 11,
      name: "bilqis",
      email: "bilqis@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 12,
      name: "revan",
      email: "revan@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 13,
      name: "kevin",
      email: "kevin@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 14,
      name: "fathir",
      email: "fathir@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 15,
      name: "bilqis",
      email: "bilqis@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 16,
      name: "revan",
      email: "revan@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 17,
      name: "revan",
      email: "revan@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 18,
      name: "revan",
      email: "revan@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 19,
      name: "revan",
      email: "revan@gmail.com",
      password: "9999",
      phone: "086594895463",
    },
    {
      id: 20,
      name: "revan",
      email: "revan@gmail.com",
      password: "9999",
      phone: "086594895463",
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
      <Navbar />
      <div className="d-flex container justify-content-between align-items-start">
        <div>
          <Sidebar />
        </div>
        <div className="w-75">
          <div style={{ borderBottom: "2px solid black" }}>
            <h2 className="text-center mb-2 ">USER</h2>
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
              onRowSelected={setSelectedRecord}
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

export default Userpage;
