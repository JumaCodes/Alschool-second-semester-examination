import React, {useState} from 'react'
import {questionAndAnswer} from '../data';

const QuestionandAnswer = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  };


  return (
    <section className='qa'>
      <h1 className='title'><span>Q & A</span></h1>

      <div className="qa__container">
        {questionAndAnswer.map((item, i) => (
          <div className="accordion__wrapper"  key={i}>
            <div className='question'  onClick={() => toggle(i)}>
              <h3>{item.question}</h3>
              {selected === i ? <span className='fa fa-minus'></span> : <span className='fa fa-plus'></span>}
            </div>

            <div className={selected === i ? 'answer show' : 'answer'}>
                {item.answer}
              </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default QuestionandAnswer