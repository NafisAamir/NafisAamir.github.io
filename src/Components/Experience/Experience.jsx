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
                        <h2 className='skills-card-name'>JavaScript</h2>
                        <IoLogoJavascript className='skills-card-img'/>
                    </article>
                    <article className='skills-card'>
                        <h2 className='skills-card-name'>React</h2>
                        <DiReact className='skills-card-img'/>
                    </article>
                    <article className='skills-card'>
                        <h2 className='skills-card-name'>Redux</h2>
                        <SiRedux className='skills-card-img'/>
                    </article>
                    <article className='skills-card'>
                        <h2 className='skills-card-name'>Express</h2>
                        <SiExpress className='skills-card-img'/>
                    </article>
                    <article className='skills-card'>
                        <h2 className='skills-card-name'>Node.js</h2>
                        <SiNodedotjs className='skills-card-img'/>
                    </article>
                    <article className='skills-card'>
                        <h2 className='skills-card-name'>MongoDb</h2>
                        <SiMongodb className='skills-card-img'/>
                    </article>
                    <article className='skills-card'>
                        <h2 className='skills-card-name'>HTML</h2>
                        <SiHtml5 className='skills-card-img'/>
                    </article>
                    <article className='skills-card'>
                        <h2 className='skills-card-name'>CSS</h2>
                        <SiCss3 className='skills-card-img'/>
                    </article>
                    <article className='skills-card'>
                        <h2 className='skills-card-name'>Tailwind</h2>
                        <SiTailwindcss className='skills-card-img'/>
                    </article>
                    <article className='skills-card'>
                        <h2 className='skills-card-name'>Chakra UI</h2>
                        <SiChakraui className='skills-card-img'/>
                    </article>
                    <article className='skills-card'>
                        <h2 className='skills-card-name'>Java</h2>
                        <FaJava className='skills-card-img'/>
                    </article>
                    <article className='skills-card'>
                        <h2 className='skills-card-name'>C</h2>
                        <SiCoursera className='skills-card-img'/>
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