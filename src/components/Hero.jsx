import React, {useContext} from 'react'
import Hero1 from '../images/hero1.jpg'
import Hero2 from '../images/hero2.jpg'
import Hero3 from '../images/hero3.jpg'
import Hero4 from '../images/hero4.jpg'
import userContext from '../context/userAuthContext'

const Hero = () => {
  const {user} = useContext(userContext);

  return (
    <section className='hero'>
      <div className="hero__top">
          <div className="hero__image">
            <img className='hero__img1' src={Hero1} alt="hero" />
            <img className='hero__img2' src={Hero4} alt="hero" />
            <img className='hero__img3' src={Hero3} alt="hero" />
            <img className='hero__img4' src={Hero2} alt="hero" />
          </div>

          <div className="hero__title">
            <h1>Welcome <span>{user}</span></h1>
            <h1>Let Us Decorate For You.</h1>

            <div className="info">
        <p><span>Decor</span>ipsum dolor, sit amet elit. at qui Sunt ipsum dolor, sit amet elit, ipsum. </p>
      </div>
          </div>
      </div>
    </section>
  )
}

export default Hero