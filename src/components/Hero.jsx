import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaPlug,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import profileImg from "../assets/profile.png";
import { profile } from "../data/portfolioData";

export default function Hero() {
  const reduced = useReducedMotion();

  const fadeUp = {
    initial: {
      opacity: 0,
      y: reduced ? 0 : 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-background-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <Container>
        <Row className="hero-row align-items-center">
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <Col lg={7} className="hero-copy">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeUp}
              transition={{ duration: 0.65 }}
            >
              <div className="hero-status">
                <span className="status-dot" />
                <span>Available for Work</span>
              </div>

              <p className="hero-eyebrow">
                REACT FRONTEND DEVELOPER
              </p>

              <h1>
                I build{" "}
                <span className="hero-highlight">modern web experiences</span>{" "}
                that work beautifully.
              </h1>

              <p className="hero-description">
                Hi, I'm <strong>Arooj Fatima</strong> — a React Frontend
                Developer with 2+ years of practical experience building
                responsive interfaces, reusable UI and API-connected web
                applications.
              </p>

              <div className="hero-proof">
                <div className="hero-proof-item">
                  <strong>2+</strong>
                  <span>Years Experience</span>
                </div>

                <div className="hero-proof-divider" />

                <div className="hero-proof-item">
                  <strong>React.js</strong>
                  <span>Primary Focus</span>
                </div>

                <div className="hero-proof-divider" />

                <div className="hero-proof-item">
                  <strong>API</strong>
                  <span>Integration</span>
                </div>
              </div>

              <div className="hero-actions">
                <Button href="#projects" className="hero-primary-btn">
                  View My Work
                  <FaArrowRight />
                </Button>

                <a href="#contact" className="hero-secondary-btn">
                  Let's Talk
                  <FaArrowUpRightFromSquare />
                </a>

                <a
                  href={profile.cvPath}
                  download
                  className="hero-cv-link"
                >
                  <FaDownload />
                  Download CV
                </a>
              </div>

              <div className="hero-social-row">
                <span>Connect with me</span>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          </Col>

          {/* =========================
              RIGHT VISUAL
          ========================== */}
          <Col lg={5} className="hero-visual-col">
            <motion.div
              className="hero-profile-area"
              initial={{
                opacity: 0,
                scale: reduced ? 1 : 0.94,
                y: reduced ? 0 : 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >
              <div className="hero-profile-backdrop" />

              <div className="hero-profile-ring ring-one" />
              <div className="hero-profile-ring ring-two" />

              <div className="hero-image-wrapper">
                <img
                  src={profileImg}
                  alt="Arooj Fatima - React Frontend Developer"
                />

                <div className="hero-image-overlay" />
              </div>

              {/* React floating card */}
              <motion.div
                className="hero-floating-card react-card"
                animate={
                  reduced
                    ? {}
                    : {
                        y: [0, -8, 0],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="floating-icon react-icon">
                  <FaReact />
                </div>

                <div>
                  <strong>React.js</strong>
                  <span>Frontend Development</span>
                </div>
              </motion.div>

              {/* API floating card */}
              <motion.div
                className="hero-floating-card api-card"
                animate={
                  reduced
                    ? {}
                    : {
                        y: [0, 8, 0],
                      }
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="floating-icon api-icon">
                  <FaPlug />
                </div>

                <div>
                  <strong>API Integration</strong>
                  <span>REST & Application Data</span>
                </div>
              </motion.div>

              {/* Experience badge */}
              <div className="hero-experience-badge">
                <strong>2+</strong>
                <span>Years of<br />Experience</span>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <a href="#about" className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <i />
      </a>
    </section>
  );
}