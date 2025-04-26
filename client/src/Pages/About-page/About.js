import React, { useRef, useState } from "react";
import profilePicture from "../../assets/IMG_7795.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faLightbulb,
  faSuitcase,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import "./about.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function About() {
  const containerRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
  
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/my-CV.pdf";
      link.download = "Areeb-CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
      setIsLoading(false);
    }, 2000);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".about_heading", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".about_img",
          {
            x: -200,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "<"
        )
        .from(
          ".about_details",
          {
            x: 37,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "<"
        )
        .from(
          ".about_block",
          {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "<"
        )
        .from(
          ".aboutMe p",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "<"
        )
        .from(
          ".download_btn",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)",
          },
          "<"
        );
    },
    { scope: containerRef }
  );

  return (
    <div id="about" ref={containerRef}>
      <div className="about_heading">
        <h4>About Me</h4>
        <p>My introdection</p>
      </div>
      <div className="about_contants">
        <img className="about_img" src={profilePicture} alt="Profile pic"></img>
        <div className="about_details">
          <div className="about_blocks">
            <div className="about_block">
              <FontAwesomeIcon icon={faLightbulb} className="about_icon" />
              <h5>Expirience</h5>
              <p className="about_pera">1 year</p>
            </div>
            <div className="about_block">
              <FontAwesomeIcon icon={faSuitcase} className="about_icon" />
              <h5>Completed</h5>
              <p className="about_pera">10 + projects</p>
            </div>
            <div className="about_block">
              <FontAwesomeIcon icon={faHeadphones} className="about_icon" />
              <h5>Support</h5>
              <p className="about_pera">Online 24/7</p>
            </div>
          </div>
          <div className="discription">
            <div className="aboutMe">
              <p>
                Fullstack developer. I create web pages dinamically. I complete
                my internship at Vinnovate technologies
              </p>
            </div>
            <div className="download">
              <button
                className="download_btn"
                onClick={handleDownload}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="loader_container">
                    <div className="loader"></div>
                    <div className="loader"></div>
                    <div className="loader"></div>
                  </div>
                ) : (
                  <>
                      Download CV &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faFile} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

// S_ID: service_vmf9s4k  service_i7kphfo
