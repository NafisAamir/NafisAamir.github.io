import React from 'react'
import './About.css'
import Nafis from '../../resources/Nafis.jpeg'

const About=()=>{
    return (
        <section  id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="about section sections">

            </div>
            <div className='container about'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={Nafis} alt="NAFIS" />

                    </div>

                </div>
            <div className="about__content">
                <div className='about__cards'>
                    <article className='about__card'>
                        <h2>Step into my coding realm, where I harness the power of caffeine to transform it into elegant lines of code. I'm Nafis, a skilled and dedicated Full Stack Web Developer. I possess expertise in HTML5, CSS3, JavaScript, ReactJS, NodeJS, Express, and have a solid grasp of database technologies like MongoDB. My true passion lies in crafting captivating websites that seamlessly blend aesthetics and functionality. With an unwavering commitment to excellence and an eye for detail, I thrive on conquering intricate coding challenges. Beyond coding, I am a tech enthusiast, constantly exploring the latest trends and pushing the boundaries of what's possible in the digital realm.</h2>
                    </article>

                </div>
            </div>
            </div>
        </section>
    )
}
export {About}