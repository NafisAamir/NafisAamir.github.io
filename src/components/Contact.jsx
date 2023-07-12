import React, { useEffect } from "react";
import AOS from "aos";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { SiWhatsapp } from 'react-icons/si'
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai'

export default function Contact() {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tcct3zo', 'template_komf4er', form.current, 'wj6-_GYDfHBzVBfGZ')
    e.target.reset()
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="contact-continer sections" id="contact">
      <h1 className="heading">
        <span className="sauce">Contact Me</span>
      </h1>
      <div data-aos="fade-up" className="flex-center">
        <h1 className="title">Get In Touch</h1>
        <p style={{ textAlign: "center", "": 700 }}>
          Send an Email. I would love to talk more to you.
        </p>
        <div className="button-container">
          <a
            className="contact-button"
            href="mailto: aamirnafis82@gmail.com"
          >
            Send an email
          </a>
        </div>
        <div id="contact-phone" className="button-container">
          <a
            className="contact-button"
            href="tel:+918553136431"
          >
            Give a Ring
          </a>
        </div>
        <div className="button-container">
          <a className="contact-button" href="https://api.whatsapp.com/send?phone=+918553136431"><SiWhatsapp />Whatsapp</a>
        </div>
        <div className="button-container">
          <a className="contact-button" id="contact-linkedin" href="https://www.linkedin.com/in/md-nafis-aamir-18155914b"><AiOutlineLinkedin />Visit LinkedIn</a>
        </div>
        <div className='button-container'>
          <a className="contact-button" href="https://github.com/NafisAamir"> <AiOutlineGithub />Visit GitHub</a>
        </div>

        <div className="button-container" style={{ width: "400px" }}>
          <form className="contact-button" ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "1.2rem", borderRadius: "0.5 rem", padding: "20px", backgroundColor: "black" }}>
            <input style={{ padding: "10px" }} type="text" name='name' placeholder='Enter Your Full Name' />
            <input style={{ padding: "10px" }} type="email" name='email' placeholder='Enter Your Email' />
            <input style={{ height: "150px", padding: "10px" }} type="text" name='message' placeholder='Enter Your Message' />
            <button style={{ padding: "10px" }} type='submit' className='btn btn__primary'>Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}
