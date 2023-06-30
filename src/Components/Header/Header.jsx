import React from 'react'
import Typewriter from "typewriter-effect";
import './Header.css'
import { CVComp } from './CVComp';
import Nafis from '../../resources/Nafis.jpeg'
import { HeaderSocials } from './HeaderSocials';

const Header = () => {
    return (
        <header id='home'>
            <div className='container header__container'>
                <div className='top-header' >
                <HeaderSocials />
                
                <div className='nafis'>
                    <img src={Nafis} alt='Nafis' />
                </div>
                <div className='typewriter' >
                <div id='user-detail-name' style={{ fontSize: "60px", marginTop:"50px" }}>
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

                <div style={{ fontSize: "50px",display:"flex",flexDirection:"column",gap:"20px",marginTop:"-20px"}}>
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
                    <div >
                    <div id='user-detail-intro' >
                <h1 style={{fontSize:"20px",width:"600px" }}>Highly passionate and user-focused Web-Developer👨‍💻 from INDIA adept in collaborating with teams or performing individually to plan the technical writing and execution of functional specifications for websites and applications.</h1>
                
                </div>
                </div>
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