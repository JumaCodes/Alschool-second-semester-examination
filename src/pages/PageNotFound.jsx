import React from 'react'
import {Link} from "react-router-dom"
import pageNotfound from '../images/pagenotfound.png'

const PageNotFound = () => {
  return (
    <div className='page404'>
        <div className='inner__404'>
            <h1 className='title'><span>404</span></h1>
            <h3 className='error'>Opps! Page Not Found</h3>
            <div className='go__back'>
              <i className='fa fa-chevron-left goback__icon'></i>
              <Link to="/">Go back Home</Link>
            </div>
            <img src={pageNotfound} alt="Error" />
        </div>
    </div>
  )
}

export default PageNotFound