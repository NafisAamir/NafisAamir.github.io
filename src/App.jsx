import React from 'react'
import {Header} from './Components/Header/Header.jsx'
import {Nav} from './Components/Nav/Nav.jsx'
import {About} from './Components/About/About.jsx'
import {Projects} from './Components/Projects/Projects.jsx'
import {Experience} from './Components/Experience/Experience.jsx'
import {Testimonial} from './Components/Testimonials/Testimonial.jsx'
import {Contact} from './Components/Contact/Contact.jsx'
import {Footer} from './Components/Footer/Footer.jsx'

const App=()=>{
    return (
        <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Projects/>
        {/* <Testimonial/> */}
        <Contact/>
        {/* <Footer/> */}
        </>
    )
}
export default App