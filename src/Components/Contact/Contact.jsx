import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {SiWhatsapp} from 'react-icons/si'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
 

const Contact=()=>{

    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tcct3zo', 'template_komf4er', form.current, 'wj6-_GYDfHBzVBfGZ')
            e.target.reset()
      };
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <AiOutlineMail className='contact__option-icon'/>
                        <h4>Email</h4>
                        
                        <a href="mailto:aamirnafis82@gmail.com">Send a mail</a>
                    </article>

                    <article className='contact__option'>
                        <SiWhatsapp className='contact__option-icon'/>
                        <h4>Whatsapp</h4>
                        
                        <a href="https://api.whatsapp.com/send?phone+918553136431">Send a message on Whatsapp</a>
                    </article>

                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Enter Your Full Name'/>
                    <input type="email" name='email' placeholder='Enter Your Email' />
                    <input style={{height:"150px"}} type="text" name='message'  placeholder='Enter Your Message' />
                    <button type='submit' className='btn btn__primary'>Send Message</button>
                </form>

            </div>
            
            <div className="copyright" style={{display:"flex", justifyContent:"center",marginTop:"150px"}}>
          <a href="https://github.com/NafisAamir">
            <h1>Designed and built by Md Nafis Aamir{" "}</h1>
          </a>
        </div>
            
        </section>
    )
}
export {Contact}