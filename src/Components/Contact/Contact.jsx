import React from 'react'
import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { SiWhatsapp } from 'react-icons/si'
import { AiOutlineGithub } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineLinkedin, AiOutlineFilePdf } from 'react-icons/ai';
import CV from '../../resources/MD_NAFIS_AAMIR.pdf'


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tcct3zo', 'template_komf4er', form.current, 'wj6-_GYDfHBzVBfGZ')
        e.target.reset()
    };

    const handleDownload = () => {
        window.open("https://drive.google.com/file/d/1PuZcBPR99U0LXYEYhTPW1HEq2WBoyHqE/view?usp=sharing", '_blank');
      };
    return (
        <section className="contact-continer sections" id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <AiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <a id="contact-email" href="mailto:aamirnafis82@gmail.com">Send a mail</a>
                    </article>
                    <article className='contact__option'>
                        <AiOutlineGithub className='contact__option-icon' />
                        <h4>GitHub</h4>
                        <a id="contact-github" href="https://github.com/NafisAamir">Visit GitHub</a>
                    </article>


                    <article className='contact__option'>
                        <SiWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>

                        <a href="https://api.whatsapp.com/send?phone+918553136431">Send a message on Whatsapp</a>
                    </article>

                    <article className="contact__option">
                        <AiOutlineLinkedin className="contact__option-icon" />
                        <h4>LinkedIn</h4>
                        <a id="contact-linkedin" href="https://www.linkedin.com/in/md-nafis-aamir-18155914b">Visit LinkedIn</a>
                    </article>

                    <article className="contact__option">
                        <AiOutlineFilePdf className="resume__option-icon" />
                        <h4>Resume</h4>
                        <a onClick={handleDownload} href={CV} download={CV} id='resume-button-1' className="btn" target="_blank">Download CV</a>
                    </article>


                    <article id='contact-phone' className='contact__option'>
                        <h2>My Contact Number</h2>
                        <h2>+91 8553136431</h2>
                    </article>

                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Enter Your Full Name' />
                    <input type="email" name='email' placeholder='Enter Your Email' />
                    <input style={{ height: "150px" }} type="text" name='message' placeholder='Enter Your Message' />
                    <button type='submit' className='btn btn__primary'>Send Message</button>
                </form>

            </div>

            <div className="copyright" style={{ display: "flex", justifyContent: "center", marginTop: "650px" }}>
                <a href="https://github.com/NafisAamir">
                    <h1>Designed and built by Md Nafis Aamir{" "}</h1>
                </a>
            </div>

        </section>
    )
}
export { Contact }