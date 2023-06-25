import React from 'react'
import Typewriter from "typewriter-effect";
import './Header.css'
import { CVComp } from './CVComp';
import Nafis from '../../resources/Nafis.jpeg'
import { HeaderSocials } from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <div className='top-header' >
                <HeaderSocials />
                
                <div className='nafis'>
                    <img src={Nafis} alt='Nafis' />
                </div>
                <div className='typewriter' >
                <div style={{ fontSize: "60px", marginTop:"50px" }}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("MD NAFIS AAMIR")
                                // .pauseFor(1000)
                                // .deleteAll()
                                .start();
                        }}
                    />
                </div>

                <div style={{ fontSize: "60px" }}>
                    <Typewriter

                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Front End Developer")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Back End Developer")
                                .deleteAll()
                                .typeString("FULL STACK MERN DEVELOPER")
                                .start();
                        }}
                    />
                </div>
                </div>
                </div>
                
                <CVComp />
                
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}
export { Header }