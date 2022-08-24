import React from 'react';
import SocialMedia from '../Social Media/SocialMedia';
import './Footer.css';

const Footer = () => {
  return (
    <div className = 'footer-container gradient-background' id='Footer'>
      <div className="footer-brand">
        Footer Brand
      </div>
      <div className="footer-container-items">
        <div className="brand-grid"></div>
        <div className="footer-item">
          <h1 className='footer-title gradientText'>Item1</h1>
          <ul>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
          </ul>
        </div>
        <div className="footer-item">
          <h1 className='gradientText'>Item2</h1>
          <ul>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
          </ul>
        </div>
        <div className="footer-item">
          <h1 className='gradientText'>Item3</h1>
          <ul>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
          </ul>
        </div>
        <div className="footer-item">
          <h1 className='gradientText'>Item4</h1>
          <ul>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
          </ul>
        </div>
        <div className="footer-item">
          <h1 className='gradientText'>Item5</h1>
          <ul>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
          </ul>
        </div>
      </div>
      <div className="footer-social-media">
        <SocialMedia />
      </div>
    </div>
  )
}

export default Footer