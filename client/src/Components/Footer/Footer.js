// eslint-disable-next-line no-unused-vars
import React from 'react';
import './footer.css';
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_socials">
          <a
            href="https://www.instagram.com/areeb_hanas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arbofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=94714841954"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
          <a
            href="mailto:arbofficial02@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </div>
        <p className="footer_text">© 2025 Areeb Hanas. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
