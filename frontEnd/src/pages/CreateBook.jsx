import React, { useState } from "react";
import BackButtonn from "../components/BackButtonn";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSaveBook = (e) => {
    e.preventDefault(); // Prevent page reload

    if (!title || !author || !publishYear) {
      setError("All fields are required!");
      return;
    }

    const data = { title, author, publishYear };
    setLoading(true);
    setError(null);

    axios
      .post("http://localhost:5000/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error in book creation", error);
        setError("Failed to create book. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="container mt-4">
      <BackButtonn />
      <h2 className="text-center mb-4">Create Book</h2>

      {loading && <Spinner />}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="card p-4 shadow-sm">
        <form onSubmit={handleSaveBook}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter book title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter author's name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Publish Year</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter publish year"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Save Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBook;
