import React from 'react';
import './Brand.css';
import call from '../../Assets/icon-2446689_1280.png'

const Brand = () => {
  return (
    <div className="brand">
      <div className='brand-logo'>
        <img src={call} alt="Brand Image"  />
      </div>
      <div className="brand-name">Step</div>
    </div>
    

  )
}

export default Brand