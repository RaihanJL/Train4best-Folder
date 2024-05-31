import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AddCourse = ({ show, handleClose, handleSubmit }) => {
  const [namaSkema, setNamaSkema] = useState('');
  const [imgSkema, setImgSkema] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newItem = { nama_skema: namaSkema, img_skema: imgSkema };
    handleSubmit(newItem);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Skema</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Nama Skema</label>
            <input
              type="text"
              className="form-control"
              value={namaSkema}
              onChange={(e) => setNamaSkema(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Gambar Skema</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setImgSkema(e.target.files[0])}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Add Skema</button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddCourse;
