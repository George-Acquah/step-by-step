import React from 'react';
import './AboutMessages.css'

const AboutMessages = ({title, text}) => {
  return (
    <div className='about-messages-container'>
        <div className="about-messages-title">
            <div />
            <h1>{title}</h1>
        </div>
        <div className="about-messages-text">
          <p>{text}</p>
        </div>
    </div>
  )
}

export default AboutMessages