import React, {useState, useEffect} from 'react'
import userContext from './userAuthContext';

const UserState = (props) => {
  const [user,setUser] = useState('Guest');

 
useEffect(() => {
    if (!localStorage.getItem('user')) {
      setUser('Guest')
    } else {
      const getUser = JSON.parse(localStorage.getItem('user'));
      const {username} = getUser
      setUser(username);
    }
}, [user]);

const contextProps={
  user:user,
  isAuth: (user!=="Guest") ,
  setUser:setUser
};

  return (
    <userContext.Provider value={contextProps}>
      {props.children}
    </userContext.Provider>
  )
}

export default UserState