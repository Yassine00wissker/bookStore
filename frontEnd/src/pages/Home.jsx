import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5000/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='container mt-4'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <h1>Books List</h1>
                <Link to='/books/create' className='btn btn-primary'>
                    <MdOutlineAddBox size={24} className='me-2'/> Add Book
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <table className='table table-striped table-bordered'>
                    <thead className='table-dark'>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publish Year</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id}>
                                <td>{index + 1}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.publishYear}</td>
                                <td>
                                    <div className='d-flex gap-2'>
                                        <Link to={`/books/details/${book._id}`} className='btn btn-info btn-sm'>
                                            <BsInfoCircle size={16}/> Details
                                        </Link>
                                        <Link to={`/books/edit/${book._id}`} className='btn btn-warning btn-sm'>
                                            <AiOutlineEdit size={16}/> Edit
                                        </Link>
                                        <Link to={`/books/delete/${book._id}`} className='btn btn-danger btn-sm'>
                                            <MdOutlineDelete size={16}/> Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Home;
