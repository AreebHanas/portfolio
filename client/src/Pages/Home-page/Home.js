/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import profilePicture from '../../assets/IMG_7795.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './home.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MouseAnimation from '../../Components/ScrollingMouseCSS/MouseAnimation.js';

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top center',
          toggleActions: 'play none none reset',
        },
      });

      tl.from('.social_media_icones a', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
      })
        .from(
          '.intro .heading',
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(1.7)',
          },
          '-=0.3'
        )
        .from(
          '.intro .subheading',
          {
            x: -40,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .from(
          '.intro .pera p',
          {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .from(
          '.say_hello',
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.6)',
          },
          '-=0.3'
        )
        .from(
          '.intro_pic img',
          {
            y: 200,
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: 'expo.out',
          },
          '-=0.6'
        );
    },
    { scope: container }
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 825);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home" ref={container}>
      <div className="home_container" id="home">
        <div className="social_media_icones">
          <a href="https://www.instagram.com/areeb_hanas?igsh=MWJ0bnM1OTc2enhsMw==">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com/">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
          <a href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {!isMobile ? (
            <div className="scroll">
              <MouseAnimation />
            </div>
          ) : null}
        </div>
        <div className="intro">
          <div className="heading">Areeb Hanas 👋</div>
          <div className="subheading">Fullstack Developer</div>
          <div className="pera">
            <p>
              I am a full stack developer and I am very passionate and dedicated
              to my work
            </p>
          </div>
          <div className="say_hello">
            <button className="hello_btn" href="#contact">
              Say Hello &nbsp;&nbsp;
              <FontAwesomeIcon icon={faPaperPlane} fill="true" />
            </button>
          </div>
        </div>
        <div className="intro_pic">
          <img className="image" src={profilePicture} loading='lazy' alt="Profile pic" />
        </div>
      </div>
    </div>
  );
}

export default Home;
