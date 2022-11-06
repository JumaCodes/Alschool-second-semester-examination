import React from 'react'
import { Link } from 'react-router-dom'

const Error = ({error, errorInfo}) => {
  return (
    <div className='newError'>
      <h3>{error}</h3>
      <p>{errorInfo}</p>
      <Link to='/'>Go Back Home</Link>
    </div>
  )
}

export default Error