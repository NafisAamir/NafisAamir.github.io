import React from "react";
import CV from '../../resources/MD_NAFIS_AAMIR.pdf'


const CVComp=()=>{
    const handleDownload = () => {
        window.open("https://drive.google.com/file/d/1PuZcBPR99U0LXYEYhTPW1HEq2WBoyHqE/view?usp=sharing", '_blank');
      };
    return (
        <div className="cta" >
            <a href={CV} id="resume-button-2" className="btn" target="_blank">Download CV</a>
            <a onClick={handleDownload} download={CV} href="#contact" className="btn btn-primary">Let us connect</a>

        </div>
    )
}
export {CVComp}