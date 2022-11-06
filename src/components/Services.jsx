import React from 'react'
import Office from '../images/office4.jpg'
import Bedroom from '../images/room1.jpg'
import Kitchen from '../images/kitchen1.jpg'
import Sitting from '../images/sitting8.jpg'
import Studio from '../images/studio1.jpg'
import Library from '../images/mini-libary1.jpg'

const Services = () => {
  return (
    <div className='services'>
      <h1 className='title'><span>Services</span></h1>
      <div className='mini__services'>
        <h3>Our Services, Our Pride</h3>

        <div className='wrap'>
          <div className='card'>
            <div className='card__title'>
              <h4>Kitchen Decor</h4>
            </div>
            <div className='card__image'>
              <img src={Kitchen} alt="hero" />
            </div>
            <div className='card__info'>
              <p>ipsum dolor, sit amet elit. at qui Sunt ipsum dolor, sit amet elit, ipsum dolor.</p>
            </div>
          </div>
          
          <div className='card'>
            <div className='card__title'>
              <h4>Sitting Decor</h4>
            </div>
            <div className='card__image'>
              <img src={Sitting} alt="hero" />
            </div>
            <div className='card__info'>
              <p>ipsum dolor, sit amet elit. at qui Sunt ipsum dolor, sit amet elit, ipsum dolor.</p>
            </div>
          </div>
          
          <div className='card'>
            <div className='card__title'>
              <h4>Office Decor</h4>
            </div>
            <div className='card__image'>
              <img src={Office} alt="hero" />
            </div>
            <div className='card__info'>
              <p>ipsum dolor, sit amet elit. at qui Sunt ipsum dolor, sit amet elit, ipsum dolor.</p>
            </div>
          </div>
          
          <div className='card'>
            <div className='card__title'>
              <h4>Bedroom Decor</h4>
            </div>
            <div className='card__image'>
              <img src={Bedroom} alt="hero" />
            </div>
            <div className='card__info'>
              <p>ipsum dolor, sit amet elit. at qui Sunt ipsum dolor, sit amet elit, ipsum dolor.</p>
            </div>
          </div>
          
          <div className='card'>
            <div className='card__title'>
              <h4>Studio Decor</h4>
            </div>
            <div className='card__image'>
              <img src={Studio} alt="hero" />
            </div>
            <div className='card__info'>
              <p>ipsum dolor, sit amet elit. at qui Sunt ipsum dolor, sit amet elit, ipsum dolor.</p>
            </div>
          </div>
          
          <div className='card'>
            <div className='card__title'>
              <h4>Library Decor</h4>
            </div>
            <div className='card__image'>
              <img src={Library} alt="hero" />
            </div>
            <div className='card__info'>
              <p>ipsum dolor, sit amet elit. at qui Sunt ipsum dolor, sit amet elit, ipsum dolor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services