import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials=()=>{
    return (
        <div className="header__socials">
            <a id="contact-github" href="https://github.com/NafisAamir" target="blank"><BsGithub/></a>
            <a href="https://linkedin.com/in/md-nafis-aamir-18155914b" target="blank"><BsLinkedin/></a>
            
        </div>
    )
}
export {HeaderSocials}