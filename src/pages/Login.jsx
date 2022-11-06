import React, {useState,useContext} from 'react';
import LoginImage from '../images/user.png';
import { useNavigate } from 'react-router-dom';
import userContext from '../context/userAuthContext';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const contextProps=useContext(userContext);
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    const user = {fullName, username, password};
    localStorage.setItem('user', JSON.stringify(user));
    setUsername('');
    setPassword('')
    setFullName('')
    contextProps.setUser(user.username);
    navigate('/')
  }

  
  return (
    <>
    <Helmet>
      <title>Login</title>
      <meta name='Description' content='Be a User now' />
      <link rel="Canonical" href="/login" />
    </Helmet>
    
    <div className='login__container'>
      <div className="login__wrapper">
        <div className="cio">
          <div className="imgs">
            <div className="img__container">
              <img src={LoginImage} alt="user" className='profile' />
            </div>
          </div>

          <div className='form__container'>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="name">FullName</label>
              <input name='name' onChange={(e) => setFullName(e.target.value)} value={fullName} id='name' type="text"  required />
              <label htmlFor="username">Username</label>
              <input name='username' onChange={(e) => setUsername(e.target.value)} value={username} id='username' type="text"  required />
              <label htmlFor="password">Password</label>
              <input name='password' onChange={(e) => setPassword(e.target.value)} value={password} id='password' type="password" required />
              <button className='login__btn' type='submit'>Login</button>
            </form>
            <p>Forget Password?</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login