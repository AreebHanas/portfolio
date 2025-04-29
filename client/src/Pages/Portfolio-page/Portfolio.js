/* eslint-disable */
import React, { useRef, useState } from 'react';
import glove from '../../assets/projects/glove.png';
import img7795 from '../../assets/IMG_7795.jpg';
import './portfolio.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectModal from '../../Components/Modal/Modal.js';

function Portfolio() {
  const portfolioRef = useRef();
  const [toggleModal, setToggleModal] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    title: '',
    about: '',
    features: '',
    snaps: [],
    url: '',
  });

  const openModal = () => {
    setToggleModal(!toggleModal);
  };

  const modalDetails = (title, about, features, snaps, url) => {
    setProjectDetails({
      title,
      about,
      features,
      snaps,
      url,
    });
    openModal();
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: 1,
        },
      });

      tl.from('.portfolio_header', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }).from(
        '.portfolio_item',
        {
          opacity: 0,
          y: 0,
          startAt: { y: 50 },
          duration: 0.8,
          stagger: 0.3,
          ease: 'back.out(1.7)',
        },
        '-=0.8'
      );
    },
    { scope: portfolioRef }
  );

  return (
    <div id="portfolio" ref={portfolioRef}>
      <div className="portfolio_container">
        <div className="portfolio_header">
          <h4>Portfolio</h4>
          <p>My works</p>
        </div>
        <div className="portfolio_content">
          <div className="portfolio_item">
            <img src={glove} alt="Portfolio Item 1" />
            <h5>AES-Glove</h5>
            <button
              className="portfolio_button"
              onClick={() =>
                modalDetails(
                  'AES-Glove',
                  'Building a smart glove that can track patient hand movement and read heartbeats.',
                  'Real-time communication',
                  [glove, img7795, img7795],
                  'https://example.com'
                )
              }
            >
              <p>More about the project</p>
            </button>
          </div>
          <div className="portfolio_item">
            <img src={glove} alt="Portfolio Item 2" />
            <h5>Project Title 2</h5>
            <button
              onClick={() =>
                modalDetails(
                  'Project Title 2',
                  'Description for project 2.',
                  'Feature 1, Feature 2',
                  [glove], // Add at least one image
                  'https://example.com'
                )
              }
              className="portfolio_button"
            >
              <p>More about the project</p>
            </button>
          </div>
        </div>
        {toggleModal && (
          <ProjectModal
            toggleModal={toggleModal}
            openModal={openModal}
            projectDetails={projectDetails}
          />
        )}
      </div>
    </div>
  );
}

export default Portfolio;
