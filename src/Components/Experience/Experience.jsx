import React from 'react';
import './Experience.css'
import {IoLogoJavascript} from 'react-icons/io'
import {DiReact} from 'react-icons/di'
import {SiRedux} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {SiNodedotjs} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiChakraui} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import { SiCoursera } from 'react-icons/si';
import {SiPostman} from 'react-icons/si'
import {TbBrandVscode} from 'react-icons/tb'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiNetlify} from 'react-icons/si'


const Experience=()=>{
    return (
        <section className="sections" id='skills'>
            <h2>Skills</h2>
            <h5>The technologies i have been working with recently</h5>
            <div className='container skills__container'>
            <article className='skills-card'>
                        <h2 className='skills-card-img'>JavaScript</h2>
                        <IoLogoJavascript/>
                    </article>
                    <article className='skills-card'>
                        <h2 className='skills-card-name'>React</h2>
                        <DiReact/>
                    </article>
                    <article className='skills-card'>
                        <h2>Redux</h2>
                        <SiRedux/>
                    </article>
                    <article className='skills-card'>
                        <h2>Express</h2>
                        <SiExpress/>
                    </article>
                    <article className='skills-card'>
                        <h2>Node.js</h2>
                        <SiNodedotjs/>
                    </article>
                    <article className='skills-card'>
                        <h2>MongoDb</h2>
                        <SiMongodb/>
                    </article>
                    <article className='skills-card'>
                        <h2>HTML</h2>
                        <SiHtml5/>
                    </article>
                    <article className='skills-card'>
                        <h2>CSS</h2>
                        <SiCss3/>
                    </article>
                    <article className='skills-card'>
                        <h2>Tailwind</h2>
                        <SiTailwindcss/>
                    </article>
                    <article className='skills-card'>
                        <h2>Chakra UI</h2>
                        <SiChakraui/>
                    </article>
                    <article className='skills-card'>
                        <h2>Java</h2>
                        <FaJava/>
                    </article>
                    <article className='skills-card'>
                        <h2>C</h2>
                        <SiCoursera/>
                    </article>
            </div>
            <h5>Tools i have been working with recently</h5>
            <div className='container tools__container'>
            <article className='skills-card'>
                        <h2>Postman</h2>
                        <SiPostman/>
                    </article>
                    <article className='skills-card'>
                        <h2>Vs Code</h2>
                        <TbBrandVscode/>
                    </article>
                    <article className='skills-card'>
                        <h2>Git</h2>
                        <AiOutlineGithub/>
                    </article>
                    <article className='skills-card'>
                        <h2>Netlify</h2>
                        <SiNetlify/>
                    </article>
            </div>
        </section>
    )
}
export {Experience}