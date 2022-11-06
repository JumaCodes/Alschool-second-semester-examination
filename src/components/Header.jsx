import React, { useState, useContext,useEffect } from 'react'
import NavItems from './NavItems'
import userContext from '../context/userAuthContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(true);
  const { isAuth,user } = useContext(userContext);
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear();
    window.location.replace("/")
    setOpen(false)
  }


  const login = () => {
    navigate('/login')
    setOpen(false)
  }

  const Toggle=()=>{
    setOpenNav(!openNav);
    let element=document.querySelector("#header");
    if(openNav){
      element.style.height="unset";
    }else{
      element.style.height="70px";
    }
  }

  const Button = () => {
    if(isAuth) {
      return <button onClick={logout}>Logout</button>
    } else {
      return <button onClick={login}>Login</button>
    }
  }
  


  return (
    <>
        <header className='header' id="header" style={{height:"70px",overflow:"hidden"}}>
      <nav className='nav'>
        <div className='logo'>
          <h1><span>D</span>eco<span>R</span></h1>
        </div>

        <NavItems Toggle={Toggle}  />

        <div className="user" onClick={() => setOpen(!open)}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&usqp=CAU' alt="guest" />
          <div className="dropDown__arrow">
            <i className={open ? "fa fa-chevron-down" : "fa fa-chevron-up"}></i>
          </div>
        </div>

        <div className="menu"  style={{position:"absolute",top:"10px",right:"10px",zIndex:"1000",color:"white", padding:"5px",borderRadius:'50%',cursor:"pointer"}} onClick={()=>Toggle()}>
            <h3>
              <i className='fa fa-bars'></i>
            </h3>
        </div>
      </nav>
    </header>

        <div className={open ? 'open' : 'closed'}>
          <p>Current User is {user}</p>
          <Button  />
        </div>
    </>
  )
}

export default Navbar