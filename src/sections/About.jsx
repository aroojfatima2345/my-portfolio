
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCode,
  FaLayerGroup,
  FaPlug,
  FaArrowRight,
  FaCircleCheck,
} from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";

import profileImg from "../assets/profile.png";
import { profile } from "../data/portfolioData";

export default function About() {
  const reduced = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduced ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="about-section" id="about">
      <Container>
        {/* Section Intro */}
        <motion.div
          className="about-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <span>01</span>
            ABOUT ME
          </div>

          <div className="about-heading-line" />

          <p>
            A frontend developer focused on building interfaces that are
            practical, polished and ready for real-world use.
          </p>
        </motion.div>

        <Row className="about-main align-items-center">
          {/* Image */}
          <Col lg={5} className="about-visual-col">
            <motion.div
              className="about-visual"
              initial={{
                opacity: 0,
                x: reduced ? 0 : -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-image-frame">
                <img
                  src={profileImg}
                  alt="Arooj Fatima - React Frontend Developer"
                />

                <div className="about-image-overlay" />
              </div>

              <div className="about-image-label">
                <span>REACT</span>
                <strong>FRONTEND</strong>
              </div>

              <div className="about-experience-card">
                <strong>2+</strong>
                <span>
                  Years of
                  <br />
                  Experience
                </span>
              </div>

              <div className="about-decoration about-decoration-one" />
              <div className="about-decoration about-decoration-two" />
            </motion.div>
          </Col>

          {/* Content */}
          <Col lg={7}>
            <motion.div
              className="about-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <span className="about-small-title">
                WHO I AM
              </span>

              <h2>
                I turn ideas and requirements into{" "}
                <span>clean React experiences.</span>
              </h2>

              <p className="about-lead">
                I'm <strong>Arooj Fatima</strong>, a React Frontend Developer
                with 2+ years of practical experience building responsive
                websites and application interfaces.
              </p>

              <p>
                My core work revolves around React.js, JavaScript, reusable
                components, responsive UI and API integration. I enjoy taking
                a design, reference or business requirement and turning it
                into something that actually works—not just something that
                looks good in a screenshot.
              </p>

              <p>
                I've worked in a software-house environment, contributed to
                real web projects and currently work as a Web Trainer. These
                experiences have strengthened the way I approach
                communication, problem-solving and project requirements.
              </p>

              <div className="about-check-list">
                <div>
                  <FaCircleCheck />
                  <span>Component-based React development</span>
                </div>

                <div>
                  <FaCircleCheck />
                  <span>Responsive and mobile-friendly interfaces</span>
                </div>

                <div>
                  <FaCircleCheck />
                  <span>REST API and application integration</span>
                </div>

                <div>
                  <FaCircleCheck />
                  <span>Clean, maintainable frontend structure</span>
                </div>
              </div>

              <div className="about-bottom">
                <div className="about-location">
                  <span>Based in</span>
                  <strong>{profile.location}</strong>
                </div>

                <a href="#contact" className="about-link">
                  Let's work together
                  <FaArrowRight />
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Principles */}
        <motion.div
          className="about-principles"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="about-principle">
            <div className="principle-icon">
              <FaCode />
            </div>

            <div>
              <strong>Clean Development</strong>
              <span>Reusable components & structured code</span>
            </div>
          </div>

          <div className="about-principle">
            <div className="principle-icon">
              <FaLayerGroup />
            </div>

            <div>
              <strong>Responsive by Default</strong>
              <span>Interfaces built for every screen size</span>
            </div>
          </div>

          <div className="about-principle">
            <div className="principle-icon">
              <FaPlug />
            </div>

            <div>
              <strong>API-Connected</strong>
              <span>Real application data & frontend flows</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

