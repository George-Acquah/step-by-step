import React from 'react';
import {CgMenu} from 'react-icons/cg'
import headerImageTwo from '../../Assets/pexels-egor-komarov-13003485.jpg'
import './Header.css'

const Header = () => {
  return (
    <div className='main-header section-padding' id='Home'>
      <div className='header-contents'>
        <div className="text-group1">
          <h1 className='gradientText'>
            Lorem ipsum dolor sit consectetur adipisicing elit.
          </h1>
        </div>
        <div className="text-group2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ratione delectus enim natus ad consequatur numquam, atque commodi vero quae corporis porro unde.
        </p>
        </div>
      </div>
      <div className="header-image">
        <img src={headerImageTwo} alt="header-image" />
      </div>
     
    </div>
  )
}

export default Header