import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from '../components/Spinner';
import BackButtonn from '../components/BackButtonn';

function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log('Delete error:', error);
      });
  };

  return (
    <div className="container mt-4">
      <BackButtonn />
      <h1 className="text-danger text-center">Delete Book</h1>
      {loading && <Spinner />}
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-danger me-2" onClick={handleDeleteBook}>
          Yes, Delete it
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteBook;
