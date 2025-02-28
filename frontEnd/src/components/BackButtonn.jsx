import React from 'react'
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function BackButtonn({ destination = '/'}) {
  return (
    <div className='flex'>
      <Link className="text-decoration-none text-danger "
      to={destination}
      >
        <FaCircleArrowLeft  size={30} className="me-2" />
      </Link>
    </div>
  )
}

export default BackButtonn;