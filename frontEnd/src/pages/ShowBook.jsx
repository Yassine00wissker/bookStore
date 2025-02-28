import React, { useEffect, useState } from 'react'
import Spinner from "../components/Spinner"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import BackButtonn from '../components/BackButtonn'
function ShowBook() {

  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() =>
    axios.get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log('error in fetching data', error);
        setLoading(false)
      })
    , [])

  return (

    <div className='block m-3'>
      <BackButtonn />
      <h1 className='d-flex justify-content-center'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="d-flex justify-content-center">
          <div className='border border-success p-5 m-5' >
            <div>
              <span>Title</span>
              <span>{book.title}</span>
            </div>
            <div>
              <span>autor</span>
              <span>{book.autor}</span>
            </div>
            <div>
              <span>publish year</span>
              <span>{book.publishyear}</span>
            </div>
            <div>
              <span>Created Time</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div>
              <span>last update Time</span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        </div>
      )}
        
    </div>
  )
}

export default ShowBook