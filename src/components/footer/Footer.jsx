import React from 'react'
import {BsFacebook} from'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'

import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"> Aabiskar</a>
      <ul className='permalink'>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="experience">Experience</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#testimoinials">Testimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"> <BsFacebook/> </a>
        <a href="https://instagram.com"> <AiOutlineInstagram /></a>
        <a href="https://twitter.com"> < FiTwitter/> </a>

      </div>
      <div className="footer__copyright">
        <small>&copy; Aabiskar 2022</small>
      </div>
    </footer>
  )
}

export default Footer