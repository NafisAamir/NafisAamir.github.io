import React from "react";
import {IoIosHome} from 'react-icons/io'
import {FaUser} from 'react-icons/fa'
import {BsFiles} from 'react-icons/bs'
import {GiSkills} from 'react-icons/gi'
import {FcBusinessContact} from 'react-icons/fc'
import {HiDocument} from 'react-icons/hi'
import { useState } from "react";
import CV from '../../resources/MD_NAFIS_AAMIR.pdf'
import './Nav.css'

const Nav=()=>{
    const [activeNav,setactiveNav]=useState('#home')

    const handleDownload = () => {
        window.open("https://drive.google.com/file/d/1PuZcBPR99U0LXYEYhTPW1HEq2WBoyHqE/view?usp=sharing", '_blank');
        
        setactiveNav('#resume')
      };
    return (
        <div id="nav-menu">
            <a href="#home" onClick={() => { setactiveNav('#home') }} className={activeNav === '#home' ? 'nav-link home active' : 'nav-link home'}>
  <IoIosHome />
</a>

            <a href="#about"onClick={()=>{setactiveNav('#about')}} className={activeNav==='#about'?'nav-link about active':'nav-link about'}><FaUser/></a>
            <a href="#skills" onClick={()=>{setactiveNav('#skills')}} className={activeNav==='#skills'?'nav-link skills active':'nav-link skills'}><GiSkills/></a>
            <a href="#projects" onClick={()=>{setactiveNav('#projects')}} className={activeNav==='#projects'?'nav-link projects active':'nav-link projects'}><BsFiles/></a>
            <a href="#contact" onClick={()=>{setactiveNav('#contact')}} className={activeNav==='#contact'?'nav-link contact active':'nav-link contact'}><FcBusinessContact/></a>
            <a href={CV} download={CV} target="_blank" id='resume-button-1' onClick={handleDownload} className={activeNav==='#resume'?'nav-link resume active':'nav-link resume'}><HiDocument/></a>
        </div>
    )
}
export {Nav}
