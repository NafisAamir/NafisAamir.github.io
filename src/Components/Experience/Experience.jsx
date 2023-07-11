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
                        <div className='skills-card-name'><IoLogoJavascript className='skills-card-img'/>JavaScript</div>
                        
                    </article>
                    <div className='skills-card'>
                        <div className='skills-card-name'><DiReact className='skills-card-img'/>React</div>
                        
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-name'><SiRedux className='skills-card-img'/>Redux</div>
                        
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-name'><SiExpress className='skills-card-img'/>Express</div>
                        
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-name'><SiNodedotjs className='skills-card-img'/>Node.js</div>
                        
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-name'><SiMongodb className='skills-card-img'/>MongoDb</div>
                        
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-name'><SiHtml5 className='skills-card-img'/>HTML</div>
                        
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-name'><SiCss3 className='skills-card-img'/>CSS</div>
                        
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-name'><SiTailwindcss className='skills-card-img'/>Tailwind</div>
                        
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-name'><SiChakraui className='skills-card-img'/>Chakra UI</div>
                        
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-name'><FaJava className='skills-card-img'/>Java</div>
                        
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-name'><SiCoursera className='skills-card-img'/>C</div>
                        
                    </div>
            </div>
            <h5>Tools i have been working with recently</h5>
            <div className='container tools__container'>
            <div className='skills-card'>
                        <div className='skills-card-name'><SiPostman/>Postman</div>
                        
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-name'><TbBrandVscode/>Vs Code</div>
                        
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-name'><AiOutlineGithub/>Git</div>
                        
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-name'><SiNetlify/>Netlify</div>
                        
                    </div>
            </div>
        </section>
    )
}
export {Experience}