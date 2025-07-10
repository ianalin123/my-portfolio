import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import emailIcon from "../assets/img/nav-icon3.svg"; 

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const toRotate = [
    "EECS Junior at UC Berkeley",
    "Neuroscience Enthusiast",
    "Avid Walker"

  ];
  const period = 1000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(prevDelta => period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(prevLoopNum => prevLoopNum + 1);
        setDelta(prevDelta => 100);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, isDeleting, loopNum]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7} className="align-self-center">
            <div className="animate__animated animate__fadeIn">
              <h1>
                {`Hi! I'm Iana`}
                <br />
                <span className="txt-rotate" dataPeriod="1000" data-rotate='["", "", ""]'>
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <div className="social-icon mt-4">
                <a href="https://github.com/ianalin123" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="Github Icon" />
                </a>
                <a href="https://www.linkedin.com/in/ianalin/" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="LinkedIn Icon" />
                </a>
                <a href="mailto:ianalin123@berkeley.edu">
                  <img src={emailIcon} alt="Email Icon" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
