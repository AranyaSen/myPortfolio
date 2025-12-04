import React, { useRef, useState } from "react";
import "./LandingPage.css";
import myImage from "../images/myImage.jpg";

const LandingPage = () => {
  const [navVisible, setNavVisible] = useState(false);

  // REF DECLARATIONS
  const introRef = useRef(null);
  const expRef = useRef(null);
  const skillRef = useRef(null);
  const connectionRef = useRef(null);
  // FUNCTION FOR HANDLING THE WINDOW SCROLL BEHAVIOR
  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleMenu = () => {
    setNavVisible((prev) => !prev);
  };
  return (
    <div className="landing-page-wrapper">
      <div className="ham-menu" onClick={handleMenu}>
        {navVisible ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#79ffff"
            >
              <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
            </svg>
          </>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#79ffff"
          >
            <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
          </svg>
        )}
        {navVisible && (
          <div className="quick-links">
            <ul>
              <li onClick={() => scrollToRef(introRef)}>Home</li>
              <li onClick={() => scrollToRef(expRef)}>About me</li>
              <li onClick={() => scrollToRef(skillRef)}>Skills</li>
              <li onClick={() => scrollToRef(connectionRef)}>
                Connection links
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className={navVisible ? "left-section overlay" : "left-section"}>
        <section className="intro-section" ref={introRef}>
          <div className="bio">
            <div className="img-section">
              <img className="my-image" src={myImage} alt="myImage" />
            </div>
            <div className="name-titles">
              <h1 className="name">Aranya Sen</h1>
              <span className="title">
                Software Developer
              </span>

              <span className="info">
                <span>Scroll down to know more!</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#79ffff"
                  onClick={() => scrollToRef(expRef)}
                >
                  <path d="M480-353 240-593l46.67-46.67 193.33 193 193.33-193L720-593 480-353Z" />
                </svg>
              </span>
            </div>
          </div>
        </section>
        <section className="about-me" ref={expRef}>
          <div className="main-content">
            <div className="experience-section">
              <h2>Professional Experience</h2>
              <h3>
                Frontend Developer with 2+ years of experience building
                scalable, high-performance web applications using React.js, Next.js,
                JavaScript, Node.js, Express and HTML, CSS. Skilled in collaborating with
                cross-functional teams to deliver elegant user interfaces, responsive UI and full-stack applications.
              </h3>
            </div>
          </div>
        </section>
        <section className="skills-section" ref={skillRef}>
          <div className="main-content">
            <div className="skills">
              <h2>Skills</h2>
              <div className="skills-list">
                <ul className="skills-ul">
                  <span>Frontend</span>
                  <li>React.js, Context API / Redux</li>
                  <li>JavaScript</li>
                  <li>HTML, CSS, Tailwind CSS</li>
                  <li>API Integration</li>
                  <li>Figma to responsive UI</li>
                </ul>
                <ul className="skills-ul">
                  <span>Backend</span>
                  <li>Node.js, Express.js</li>
                  <li>REST APIs, CRUD operations</li>
                  <li>JWT Authentication</li>
                </ul>
                <ul className="skills-ul">
                  <span>Database</span>
                  <li>MongoDB, mongoose</li>
                </ul>
                <ul className="skills-ul">
                  <span>Tools</span>
                  <li>Git, Postman</li>
                  <li>Jest (Unit Testing for React.js) </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="connection-section" ref={connectionRef}>
          <div className="main-content">
            <div className="connection-links">
              <h2>Connection Links</h2>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aranyasen62/"
                    target="blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AranyaSen?tab=repositories"
                    target="blank"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="right-section">
        <div className="quick-links">
          <ul>
            <li onClick={() => scrollToRef(introRef)}>Home</li>
            <li onClick={() => scrollToRef(expRef)}>About me</li>
            <li onClick={() => scrollToRef(skillRef)}>Skills</li>
            <li onClick={() => scrollToRef(connectionRef)}>Connection links</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
