import { useNavigate } from 'react-router-dom';
import {Helmet} from 'react-helmet-async'


function Contact(){
    const navigate = useNavigate()
    const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
    <Helmet>
      <title>Contact</title>
      <meta name='Description' content='Feel frww to contact us today.' />
      <link rel="Canonical" href="/contact" />
    </Helmet>
  <div>
      <div className='login__container'>
      <div className="login__wrapper">
        <div className="cio">
          <div className='form__container'>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="name">Name</label>
              <input name='name' id='name' type="text"  required />
              <label htmlFor="email">Email</label>
              <input name='email' id='email' type="email"  required />
              <label htmlFor="subject">Subject</label>
              <input name='subject' id='subject' type="text" />
              <label htmlFor="message">Message</label>
              <textarea name='message' id='message' className="contact__textarea" type="text"></textarea>
              <button className='login__btn' type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
     
  </div>
  </>
  )}

export default Contact;