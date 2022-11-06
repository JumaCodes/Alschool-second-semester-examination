import Services from './../components/Services';
import QuestionandAnswer from './../components/QuestionandAnswer';
import { Helmet } from 'react-helmet-async';

function Service(){
  return (
    <>
    <Helmet>
      <title>Services</title>
      <meta name='Description' content='We have the highest services' />
      <link rel="Canonical" href="/services" />
    </Helmet>
    
      <div>
          <Services />
        <QuestionandAnswer />
      </div>
      </>
  );
}

export default Service;