/* eslint-disable */
import React, { useRef, useState } from 'react';
import glove from '../../assets/projects/glove.png';
import ckProject from '../../assets/projects/CK-Project.jpg';
import aes01 from '../../assets/AES01.png';
import aes02 from '../../assets/AES02.png';
import aes03 from '../../assets/AES03.png';
import aes04 from '../../assets/AES04.png';
import aes05 from '../../assets/AES05.png';
import aes06 from '../../assets/AES06.png';
import aes07 from '../../assets/AES07.png';
import portfolio01 from '../../assets/ptflio01.png';
import portfolio02 from '../../assets/ptflio02.png';
import portfolio03 from '../../assets/ptflio03.png';
import portfolio04 from '../../assets/ptflio04.png';
import portfolio05 from '../../assets/ptflio05.png';
import taskTracker01 from '../../assets/TaskTrackr01.png';
import taskTracker02 from '../../assets/TaskTrackr02.png';
import taskTracker03 from '../../assets/TaskTrackr03.png';
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
            <img src={glove} loading='lazy' alt="Portfolio Item 1" />
            <h5>AES-Glove(On going)</h5>
            <button
              className="portfolio_button"
              onClick={() =>
                modalDetails(
                  'AES-Glove',
                  "The AES Glove is a real-time motion-tracking system designed to monitor and evaluate physical exercises for patients. It bridges the gap between healthcare professionals and patients by providing live feedback, performance analysis, and progress tracking through an intelligent web dashboard. Using sensors embedded in a glove and ESP32 microcontroller, the data is streamed live to a web platform where both patients and doctors can view exercise movements, compare results, and track improvements over time. This project combines IoT, real-time data streaming, and web development to enhance physical therapy sessions with smart tech.",
                  ' Real-time Sensor Data Tracking,  Live Graphs & Monitoring, Dual User Interface,  Smart Analytics & Feedback',
                  [aes01, aes02, aes03, aes04, aes05, aes06, aes07],
                )
              }
            >
              <p>More about the project</p>
            </button>
          </div>
          <div className="portfolio_item">
            <img src={ckProject} loading='lazy' alt="" />
            <h5>Online Quiz System(On going)</h5>
            <button
              onClick={() =>
                modalDetails(
                  'Online Quiz System',
                  'This is a full-stack quiz platform where teachers can create quizzes, define multiple choice questions, and mark the correct answers. Students can then attempt these quizzes, and upon submission, the system automatically evaluates their answers, displays corrections, and generates scores in real-time. Built for educational institutions or training platforms, this app provides detailed performance analytics, tracks high scores, and separates teacher and student dashboards for clarity and security.',
                  ' Teacher Dashboard for Quiz Creation,  Student Dashboard for Quiz Attempting,  Real-time Answer Evaluation,  Performance Analytics & High Score Tracking',
                  [],
                )
              }
              className="portfolio_button"
            >
              <p>More about the project</p>
            </button>
          </div>

          <div className="portfolio_item">
            <img src={portfolio01} loading='lazy' alt="" />
            <h5>Personol Portfolio</h5>
            <button
              onClick={() =>
                modalDetails(
                  'Responsive Portfolio Website – Dockerized & Deployed on Azure with SSL',
                  'My personal portfolio is a responsive React-based web application that showcases my skills, experience, and projects. This project wasn’t just about frontend design — I used it as a hands-on lab to explore real-world DevOps tools and deployment strategies. I implemented smooth scrolling animations using GSAP, made the site fully responsive, and learned how to take a personal project from local dev to live production using Docker, NGINX, CI/CD pipelines, and SSL integration.',
                  'Responsive Design with GSAP Animations,  Dockerized for Consistent Environments,  Deployed on Azure with SSL,  CI/CD Pipeline for Automated Deployments',
                  [portfolio01, portfolio02, portfolio03, portfolio04, portfolio05],
                  'https://areebhanas.studio'
                )
              }
              className="portfolio_button"
            >
              <p>More about the project</p>
            </button>
          </div>

          <div className="portfolio_item">
            <img src={taskTracker01} loading='lazy' alt="" />
            <h5>Landing Page For TaskTrakr</h5>
            <button
              onClick={() =>
                modalDetails(
                  'Landing Page For TaskTrakr',
                  'TaskTrackr is a modern, responsive landing page UI/UX design built using pure HTML and CSS. The goal of this project was to practice clean design principles, mobile-first responsiveness, and semantic HTML layout without any frameworks. It serves as the homepage concept for a task management startup, showcasing product features, benefits, and a call-to-action section. This project allowed me to focus on pure UI/UX fundamentals like layout, spacing, typography, and color contrast.',
                  ' Responsive Design with HTML & CSS,  Clean UI/UX Principles,  Mobile-First Approach,  Semantic HTML Layout',
                  [taskTracker01, taskTracker02, taskTracker03],
                  'https://blue-forest-011f4e010.2.azurestaticapps.net'
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
