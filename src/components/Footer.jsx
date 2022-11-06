import React from 'react'
import {Link} from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className='footer__top'>
          <span className='newsletterText'>Subscribe to Our Newsletter</span>
          <form>
            <div className='footer__inputcontainer'>
              <input type="email" placeholder="Enter your email address" />
              <div className='footer__icon'>
                <i className='fa fa-chevron-right'></i>
              </div>
            </div>
          </form>
        </div>

        <div className="footer__center">
          <div className='logo' style={{marginRight: '40px'}}>
            <h1 style={{marginRight: '60px'}}><span>D</span>eco<span>R</span></h1>
           </div>
          <div className="footer__links">
            <div className='footer__linkContainer'>
              <div className='footer__ourcontact'>
                <h3>Contact Us</h3>
                <p className="footer__detail">+234 802 788 9657</p>
                <p className="footer__detail">info@revicit.ng</p>
              </div>

              <div className='footer__ourcontact'>
                <h3>Address</h3>
                <p className="footer__detail">Address 12, Moleye street,</p>
                <p className="footer__detail">Alagomeji, Yaba, Lagos</p>
              </div>
            </div>
            
            <div className='footer__linkContainer'>
              <h3>Products</h3>
              <Link className='footer__link'>Motivate</Link>
              <Link className='footer__link'>Inform</Link>
              <Link className='footer__link'>Utility Services</Link>
              <Link className='footer__link'>Expression</Link>
              <Link className='footer__link'>Connect</Link>
            </div>

            <div className='footer__linkContainer'>
              <h3>Legal</h3>
              <Link className='footer__link'>Invest in use</Link>
              <Link className='footer__link'>Terms of use</Link>
            </div>

            <div className='footer__linkContainer'>
              <h3>Social</h3>
              <Link className='footer__link'>Twitter</Link>
              <Link className='footer__link'>Facebook</Link>
              <Link className='footer__link'>Instagram</Link>
              <Link className='footer__link'>LinkedIn</Link>
            </div>
          </div>
        </div>
        <div className='footer__bottom'>
          <p>Copyright &copy;2022 AltSchool Africa Examination. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer