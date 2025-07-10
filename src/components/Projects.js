import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import 'animate.css';

export const Projects = () => {
  const projects = [
    {
      title: "AstroWind",
      description: "Stellar Wind Density Modeler for protoplanetary disks. Used for visualizing early star formation.",
      Tags: "Python, NumPy, SciPy, Matplotlib",
      imgUrl: projImg3,
      githubUrl: "https://github.com/K1zum1/AstroWind"
    },
    {
      title: "Compromise Vault",
      description: "A collection website for known copromised SSH keys and to generate a revocation list for security purposes. ",
      Tags: "React, Javascript, Python, PostgreSQL",
      imgUrl: projImg1,
      githubUrl: "https://github.com/K1zum1/Compromise-Vault"
    },
    {
      title: "Notion Reminder Bot",
      description: "Discord bot that sends reminders from Notion to Discord. Uses Notion API to fetch data. ",
      Tags: "Discord JS, Javascript, Notion API",
      imgUrl: projImg5,
      githubUrl: "https://github.com/pluffpenguin/Notion-Deadline-Reminder-Bot"
    },
    {
      title: "VReader",
      description: "VR book reader for the Oculus Quest 2. Launched using Roblox Games",
      Tags: "Lua, Roblox Studios",
      imgUrl: projImg2,
      githubUrl: "https://github.com/Kizum1/VReader"
    },
    {
      title: "Worldview Wanderer",
      description: "Basically a powerpoint built from scratch with some extra features like music and animations. ",
      Tags: "Python, Pygame",
      imgUrl: projImg4,
      githubUrl: "https://github.com/TeachMeTW/WorldView-Wanderer"
    },
    {
      title: "Virus Totality",
      description: "An application that will scrape up any copied IP address/URL/domain/file hash from your system and automatically run it through Virus Total",
      Tags: "Python, PySimpleGUI, VirusTotal API, Tkinter",
      imgUrl: projImg6,
      githubUrl: "https://github.com/K1zum1/Virus-Totality"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="animate__animated animate__fadeIn">
              <h2>Projects</h2>
                <Row>
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};
