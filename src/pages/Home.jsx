import React from 'react'
import Teestimony from '../components/Testimony';
import Hero from './../components/Hero';
import Services from './../components/Services';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
    <Helmet>
      <title>About</title>
      <meta name='Description' content='Welcome to your No1 Decorating Company.' />
      <link rel="Canonical" href="/" />
    </Helmet>
    
    <div className='home'>
      <Hero />
      <Services />
      <Teestimony />
    </div>
    </>
  )
}

export default Home