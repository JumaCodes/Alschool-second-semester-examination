import React from 'react'
import { testimonials } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const Teestimony = () => {
  return (
    <div className='testimony'>
      <h1 className='title'><span>Testimony</span></h1>

      <div className="testimonial__body">
        <div className="testimonial__container">
          <div className='testimonial__content'>
            <Swiper
              modules={[ Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
              autoplay={{ delay: 1000}}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <div className='testimony__wrapper'>
                {testimonials.map((item) => (
                  <SwiperSlide  key={item.id} className="testimony__card">
                    {/* <div key={item.id} className="testimony__card"> */}
                      <div className="testimony__imageContent">
                        <span className='overlay'></span>

                        <div className="testimonial__cardImage">
                          <img className='testimony__image' src={item.image} alt="" />
                        </div>
                      </div>

                      <div className="testimonial__cardContent">
                        <h3 className='testimony__name'>{item.firstName} {item.lastName}</h3>
                        <h6 className="profession">{item.profession}</h6>
                        <p className='testimony__description'>{item.info}</p>
                        <button className='btn'>View More</button>
                      </div>
                    {/* </div> */}
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teestimony