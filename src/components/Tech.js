import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJava , DiPython } from "react-icons/di";
import { FaRProject } from "react-icons/fa";
import { SiCss3, SiHtml5, SiTensorflow, SiGnubash, SiPowershell, SiScikitlearn, SiNumpy, SiPandas, SiPytorch, SiRiscv
} from "react-icons/si";
import matlabLogo from '../assets/img/mathworks-logo.png';


export const Techstack = () => {
  return (
    <Row id="techstack" style={{ justifyContent: "center", paddingBottom: "1vh" }}>
      <section className="techstackHeader">
        <h2>Languages & Frameworks</h2>
      </section>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRProject />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={matlabLogo} alt="MATLAB" style={{ width: "60%", height: "auto" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRiscv />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
    </Row>
  );
};
