import React from 'react';
import posibility from '../../assets/posibility.png';
import'./posibility.css';

const Posibiliy = () => {
  return (
    <div className='gpt3__posibility section__padding' id='posibility'>
      <div className='gpt3__posibility-image'>
        <img src={posibility} alt="posibility" />
      </div>
      <div className='gpt3__posibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Posibiliy