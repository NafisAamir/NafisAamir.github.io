import React from "react";
import CV from '../../resources/MD_NAFIS_AAMIR.pdf'


const CVComp=()=>{
    return (
        <div className="cta" >
            <a href={CV} className="btn" target="_blank">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let us connect</a>

        </div>
    )
}
export {CVComp}