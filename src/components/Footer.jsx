import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
      
        <div className="socials">
          <ul id="social-icons">
            <li id="contact-github">
              <a target="_blank" rel="noreferrer" href="https://github.com/NafisAamir">
              <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li id="contact-linkedin">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/md-nafis-aamir-18155914b">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <a href="https://github.com/NafisAamir">
            Designed and built by Md Nafis Aamir{" "}
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
          <a href="mailto: aamirnafis82@gmail.com" id="contact-email">aamirnafis82@gmail.com<hr /></a>
      </div>
    </footer>
  );
}
