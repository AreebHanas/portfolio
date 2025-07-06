/* eslint-disable */
import React, { useEffect, useRef } from 'react';
// import Topbar from "../../Components/Topbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './skill.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Skills() {
  const skillRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillRef.current,
          start: 'top 80%',
          end: 'bottom 80%',
          // markers: true,
          scrub: 1,
          toggleActions: 'play none none reverse',
        },
      });

      tl.from('.skill_heading', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .from(
          '.skill_block',
          {
            opacity: 0,
            y: 40,
            duration: 0.6,
            stagger: 0.3,
            ease: 'power2.out',
          },
          '-=0.6'
        )
        .from(
          '.block_heading',
          {
            opacity: 0,
            x: -20,
            duration: 0.5,
            stagger: 0.2,
          },
          '-=0.4'
        )
        .from(
          '.column_list div',
          {
            opacity: 0,
            y: 30,
            duration: 0.4,
            stagger: 0.1,
            ease: 'elastic.out(0.2)',
          },
          '-=0.4'
        );
    },
    { scope: skillRef }
  );

  return (
    <>
      <div id="skills" ref={skillRef}>
        <div className="skill_heading">
          <h4>Skills</h4>
          <p>My technical level</p>
        </div>
        <div className="skill_contants">
          <div className="skill_block">
            <h3 className="block_heading">Frontend Skills</h3>
            <div className="skill_list">
              <div className="column_list">
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">HTML</h4>
                  </div>
                  <p className="skill_level">Advance</p>
                </div>
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">CSS</h4>
                  </div>
                  <p className="skill_level">Advance</p>
                </div>
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">JavaScript</h4>
                  </div>
                  <p className="skill_level">Advance</p>
                </div>
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">Bootstrap</h4>
                  </div>
                  <p className="skill_level">Advance</p>
                </div>
              </div>
              <div className="column_list">
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">Git</h4>
                  </div>
                  <p className="skill_level">Advance</p>
                </div>
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">CI and CD</h4>
                  </div>
                  <p className="skill_level">Intermediate</p>
                </div>
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">React</h4>
                  </div>
                  <p className="skill_level">Advance</p>
                </div>
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">Redux</h4>
                  </div>
                  <p className="skill_level">Advance</p>
                </div>
              </div>
            </div>
          </div>
          <div className="skill_block">
            <h3 className="block_heading">Backend Skills</h3>
            <div className="skill_list">
              <div className="column_list">
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">Node JS</h4>
                  </div>
                  <p className="skill_level">Advance</p>
                </div>
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">Phython</h4>
                  </div>
                  <p className="skill_level">Intermediate</p>
                </div>
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">C</h4>
                  </div>
                  <p className="skill_level">Intermediate</p>
                </div>
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">Docker</h4>
                  </div>
                  <p className="skill_level">Intermediate</p>
                </div>
              </div>
              <div className="column_list">
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">My SQL</h4>
                  </div>
                  <p className="skill_level">Advance</p>
                </div>
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">SQL</h4>
                  </div>
                  <p className="skill_level">Intermediate</p>
                </div>
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">MongoDB</h4>
                  </div>
                  <p className="skill_level">advance</p>
                </div>
                <div>
                  <div className="skill_title">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <h4 className="skills">Deployment</h4>
                  </div>
                  <p className="skill_level">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
