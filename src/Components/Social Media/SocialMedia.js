import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='social-media-icons'>
        <i>
          <a href="#">
            <FaFacebookSquare fill='#fff'/>
          </a>
        </i>
        <i>
          <a href="#">
            <FaTwitterSquare fill='#fff'/>
          </a>
        </i>
        <i>
          <a href="#">
            <FaInstagramSquare fill='#fff'/>
          </a>
        </i>
        <i>
          <a href="#">
            <FaGithubSquare fill='#fff'/>
          </a>
        </i>
        <i>
          <a href="#">
            <FaLinkedin fill='#fff'/>
          </a>
        </i>
    </div>
  )
}

export default SocialMedia