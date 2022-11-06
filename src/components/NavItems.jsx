import React from 'react'
import {NavLink} from 'react-router-dom'
import { navLinks } from './../data';

const NavItems = ({Toggle}) => {
  return (
    <ul className='navLink__container'>
      {navLinks.map((navItem, index) => (
        <li key={index} className='nav__link'>
          <NavLink onClick={Toggle} to={navItem.path}>
            <i className={navItem.icon}></i>
            <span className='nav__title'>{navItem.title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default NavItems