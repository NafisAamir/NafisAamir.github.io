import React, { useState } from "react";
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects=()=>{
    const [projects,setprojects]=useState([
        {
          img:"",
          id: 1,
          image:'MwendoAfrica.png',
          projectTitle: "Mwendo Africa",
          projectInfo:
           "This is a travel booking website, MwendoAfrica which is a vehicle booking site which charges as per the time the vehicle has been used. This was a collaborative project of three members which was completed in 7 days of time.",
          techUsed: ["ReactJs", "Redux","Chakra UI", "HTML", "CSS"],
          projectLinkHosted: "https://mwendoafricatravel.netlify.app/",
          projectLinkGithub: "https://github.com/ARahimLaskar/MwendoAfrica",
        },
        {
          img:"",
          id: 2,
          image:'KFC.png',
          projectTitle: "KFC",
          projectInfo:
           "KFC (Kentucky Fried Chicken) is an American fast food restaurant chain. It also provides services online. This website is a clone of the original KFC Website. This project is also a collaborative project of three members which was completed in 6 days of time.",
          techUsed: ["JavaScript", "HTML", "CSS"],
          projectLinkHosted: "https://creative-praline-bb6624.netlify.app/",
          projectLinkGithub: "https://github.com/NafisAamir/kfc-clone",
        },
        {
          id: 3,
          projectTitle: "Portfolio",
          image:"portfolio.png",
          projectInfo:
            "It's a Portfolio App anyone can see all my projects, skills, contact details, etc.",
          techUsed: ["React","JavaScript", "HTML", "CSS"],
          projectLinkHosted: "",
          projectLinkGithub: "",
        }
      ])
    return (
        <section className="projects-continer sections" id="projects">
             <h2 className="heading">
        <span className="sauce">Projects</span>
      </h2>
      <div className="container projects__container">
        <div className="project-cards">
          {projects?.map((project, index) => (
            <div  key={project.id} className="project-card">
              <div className="project-img">
                <img
                  src={require(`../../resources/${project.image}`)}
                  alt=""
                />
              </div>
              <div className="project-info">
                <a target="_blank" rel="noreferrer" href={project.projectLinkHosted}>
                  <div className="project-title"><h2>{project.projectTitle}</h2></div>
                </a>
                <div className="project-description">{project.projectInfo}</div>
                <ul className="tech-used project-tech-stack">
                    <h2>Tech Stack Used</h2>
                  {project.techUsed.map((tech, index) => (
                    <li  key={index}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                    <h5>Deployed Links</h5>
                  <a className="project-github-link" rel="noreferrer" target="_blank" href={project.projectLinkGithub}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a className="project-deployed-link"  rel="noreferrer" target="_blank" href={project.projectLinkHosted}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                  <br />
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
        </section>
    )
}
export {Projects}