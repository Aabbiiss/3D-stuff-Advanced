import React from "react";
import "./contact.css";
import { AiFillMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Portfolio Contact', 'template_sskuixt', form.current, '_SFdJ_gJWSplcbM97')
    e.target.reset();
    
  };
  return(
  <section id="contact">
    <h5>Get in Touch</h5>
    <h2>Contact form</h2>
    <div className="container contact__container">
  
  {/* Left hand side contact Options */}

      <div className="contact__options">
        <article className="contact__option">
          <AiFillMail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>aaaabiskar@gmail.com</h5>
          <a href="mailto:aaaabiskar@gmail.com" target="_blank">
            Send a message
          </a>
        </article>

        <article className="contact__option">
          <FiLinkedin className="contact__option-icon"/>
          <h4>Linkedin</h4>
          {/* <h5>Send a message</h5> */}
          <a href="" target="_blank">
            Send a Message
          </a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className="contact__option-icon"/>
          <h4>WhatsApp</h4>
          <h5>0405867880</h5>
          <a href="https://wa.me/+610405867880" target="_blank">
            Send a Message
          </a>
        </article>
      </div>

      {/* Right Hand side content */}




      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name ="name" placeholder="Your Full Name" required />
        <input type='email' name="email" placeholder="Enter your email" required />
        <textarea name="message" rows="7" placeholder="Your Message" required />
        <input type="submit" className='btn btn-primary' />

      </form>
      
    </div>
  </section>
  )};

export default Contact;
