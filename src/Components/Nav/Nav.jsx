import React from "react";
import {IoIosHome} from 'react-icons/io'
import {FaUser} from 'react-icons/fa'
import {BsFiles} from 'react-icons/bs'
import {GiSkills} from 'react-icons/gi'
import {FcBusinessContact} from 'react-icons/fc'
import { useState } from "react";
import './Nav.css'

const Nav=()=>{
    const [activeNav,setactiveNav]=useState('#')
    return (
        <div id="nav-menu">
            <a href="#home" onClick={()=>{setactiveNav('#home')}} className={activeNav==='#home'?'active':''}><IoIosHome/></a>
            <a href="#about"onClick={()=>{setactiveNav('#about')}} className={activeNav==='#about'?'active':''}><FaUser/></a>
            <a href="#skills" onClick={()=>{setactiveNav('#skills')}} className={activeNav==='#skills'?'active':''}><GiSkills/></a>
            <a href="#projects" onClick={()=>{setactiveNav('#projects')}} className={activeNav==='#projects'?'active':''}><BsFiles/></a>
            <a href="#contact" onClick={()=>{setactiveNav('#contact')}} className={activeNav==='#contact'?'active':''}><FcBusinessContact/></a>
        </div>
    )
}
export {Nav}
