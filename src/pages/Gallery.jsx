import React,{useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {rooms,sittingRoom,kitchen,office} from "../data";
import userContext from '../context/userAuthContext'
import { Helmet } from 'react-helmet-async';


const UseNavigator = ({navigate}) => {
  try {
  window.location.replace('/login')
} catch (error) {
  window.location.replace('/error')
}
}

const Gallery = () => {
  const {isAuth}=useContext(userContext);
  const navigate=useNavigate();
  return (
    <>
    <Helmet>
      <title>Gallery</title>
      <meta name='Description' content='We have the best gallery for you' />
      <link rel="Canonical" href="/gallery" />
    </Helmet>

      {isAuth?
      <div className='gallery'>
     
      <h1 className='title'><span>Gallery</span></h1>
      <div>
        <div className='mini__services'>
          <h3>Room</h3>
        </div>
        <div className='wrap'>
          {rooms.map((data)=>   
            <div className='card' key={data.id}>
              <div className='card__image'>
                <img src={data.image} alt="hero" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <div className='mini__services'>
          <h3>Sitting Room</h3>
        </div>
        <div className='wrap'>
          {sittingRoom.map((data)=>   
            <div className='card' key={data.id}>
              <div className='card__image'>
                <img src={data.image} alt="hero" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <div className='mini__services'>
          <h3>Kitchen</h3>
        </div>
        <div className='wrap'>
          {kitchen.map((data)=>   
            <div className='card' key={data.id}>
              <div className='card__image'>
                <img src={data.image} alt="hero" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
          <div className='mini__services'>
            <h3>Office</h3>
          </div>
          <div className='wrap'>
            {office.map((data)=>   
              <div className='card' key={data.id}>
                <div className='card__image'>
                  <img src={data.image} alt="hero" />
                </div>
              </div>
            )}
          </div>
      </div>
    </div>  
    : <UseNavigator navigate={navigate} /> }
    </>
    
  )
}

export default Gallery