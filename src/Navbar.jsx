import React, { Component, useState } from "react";
import "./styles/navbar.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import {
  DiBootstrap,
  DiHtml5,
  DiJsBadge,
  DiCss3,
  DiSass,
  DiReact,
  DiNpm,
  DiNodejs,
  DiPython,
  DiPostgresql,
  DiMongodb,
} from "react-icons/di";
import { Link } from "react-scroll";
import { CgDarkMode } from "react-icons/cg";
import styled, { ThemeProvider } from "styled-components";
import kp from "./components/IMG_4782.jpg";
import project1 from "./components/project1.png";
import Typed from "react-typed";
import { darkTheme, GlobalStyles, lightTheme } from "./styles/theme";
import Particles from "react-particles-js";

const Styled = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.body};
  border-color: ${(props) => props.theme.fontColor};
`;
const Anchor = styled.a`
  color: ${(props) => props.theme.fontColor};
  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
  &:active {
    text-decoration: underline;
  }
`;
const Stylednav = styled.nav`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bodyColor};
`;
const Imagestyle = styled.img`
  border-color: ${(props) => props.theme.fontColor};
  border: 5px solid;
  justify-content: center;
  z-index: 10;
  zoom: 80%;
  width: 30%;
  height: 500px;
  border-radius: 50%;
`;

function Navbar() {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 600,
              },
            },
          },
        }}
      />

      {/* <GlobalStyles/>  */}
      <Styled>
        <div className="main-container">
          <Stylednav
            id="navbar-example2"
            className="header navbar navbar-default fixed-top"
          >
            <div className="container-fluid">
              <div className="header-left">
                <div className="myname">krutarth patel</div>
                <div className="email">krutarth852000@gmail.com</div>
              </div>

              <div className="header-mid">
                <div>
                  <Link activeClass="active" to="home" spy={true}>
                    <Anchor className="anchor">home</Anchor>
                  </Link>
                </div>
                <div>
                  <Link to="about" spy={true}>
                    <Anchor className="anchor">about me</Anchor>
                  </Link>
                </div>
                <div>
                  <Link to="skills" spy={true}>
                    <Anchor className="anchor">skills</Anchor>
                  </Link>
                </div>
                <div>
                  <Link to="project" spy={true}>
                    <Anchor className="anchor">Project</Anchor>
                  </Link>
                </div>
              </div>

              <div className="header-right">
                <div>
                  <Anchor
                    className="anchor"
                    href="https://www.linkedin.com/in/krutarth-patel-9908761a2/"
                    target="_blank"
                  >
                    <AiFillLinkedin />
                  </Anchor>
                </div>
                <div>
                  <Anchor
                    className="anchor"
                    href="https://github.com/Krutarth852000"
                    target="_blank"
                  >
                    <AiFillGithub />
                  </Anchor>
                </div>
                <div>
                  <Anchor
                    className="anchor"
                    href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=krutarth852000@gmail.com&tf=1"
                    target="_blank"
                  >
                    <SiGmail />
                  </Anchor>
                </div>
                <div>
                  <Anchor className="anchor" onClick={themeToggler}>
                    <CgDarkMode />
                  </Anchor>
                </div>
              </div>
            </div>
          </Stylednav>
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-offset="0"
            className="scrollspy-example scrollbar"
            tabindex="0"
          >
            <div className="section1" id="home">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div style={{ font: "20px" }}>
                <h2>hello there 🖐</h2>
                <h2>i am </h2>
                <h1>Krutarth Patel</h1>
                <p className="paragraph">
                  I am a final year{" "}
                  <b style={{ color: "#FF7F51" }}>Computer Science</b> student
                  graduating in may 2022.
                </p>
                <p className="para2">
                  I am currently looking for full-time opportunities as a
                  frontend developer.
                </p>

                <Typed
                  className="typed-class"
                  strings={[
                    "HTML-5",
                    "CSS",
                    "SCSS",
                    "JavaScript",
                    "React.Js",
                    "Node.Js",
                    "Postgres",
                    "MongoDB",
                  ]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop
                />
              </div>
            </div>

            <div className="section1" id="about">
              <Imagestyle src={kp} alt="kp" />
              <div className="my-info">
                <p className="para2">
                  Myself <b style={{ color: "#FF7F51" }}>Krutarth Patel</b>
                </p>
                <ul>
                  <li>
                    <p className="paragraph" style={{ text: "20px" }}>
                      I am an International student from <b>INDIA 🇮🇳 </b>
                    </p>
                  </li>
                  <li>
                    <p className="paragraph">
                      Pursuing Specialised Honours in computer science at
                      <br></br>
                      <b style={{ color: "red" }}>York Univeristy</b> as a final
                      year student.
                    </p>
                  </li>
                  <li>
                    <p className="paragraph">
                      As for my future, I am seeking to work as a Frontend
                      Developer / Backend Developer with a diverse team.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="section1 section3" id="skills">
              <h1 className="sec3">SKILLS</h1>
              <div className="subsec3">
                <DiBootstrap />
                <DiHtml5 />
                <DiJsBadge />
                <DiCss3 />
                <DiSass />
                <DiReact />
                <DiNpm />
                <DiNodejs />
                <DiPython />
                <DiPostgresql />
                <DiMongodb />
              </div>
            </div>

            <div className="section1 section3" id="project">
              <h1 className="sec3">PROJECTS</h1>
              <div className="projects">
                <h2 className="projecttitle">
                  1. only REACT e-commerce website.
                </h2>
                <Anchor
                  className="anchor"
                  href="https://nb-mobile-store.netlify.app/"
                  target="_blank"
                >
                  <span>
                    <img className="examples" src={project1} alt="project1" />
                  </span>
                </Anchor>
                <span>
                  <u>Description</u>
                  <ul>
                    <li>
                      Project
                      <span className="email">-Mobile store.</span>
                    </li>
                    <li>
                      Duration <span className="email">-one week.</span>
                    </li>
                    <li>
                      Technologies Used
                      <span className="email">
                        -react, css, scss, styled-components, netlify.
                      </span>
                    </li>
                    <li>
                      basic funtionalities
                      <ul>
                        
                        <li className="email">
                          A reactive user interface to allow customers to surf
                          through mobiles online.
                        </li>
                        <li className="email">Add to cart functionality.</li>
                        <li className="email">
                          Add or subtract quantity required directly in the
                          cart.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Styled>
    </ThemeProvider>
  );
}

export default Navbar;
