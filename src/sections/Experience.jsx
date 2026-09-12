import { Container } from "react-bootstrap";
import {
  FaBriefcase,
  FaArrowUpRightFromSquare,
  FaCode,
  FaPeopleGroup,
  FaGraduationCap,
} from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import { experience } from "../data/portfolioData";

const icons = [FaGraduationCap, FaCode, FaPeopleGroup];

export default function Experience() {
  const reduced = useReducedMotion();

  return (
    <section className="experience-section" id="experience">
      <Container>
        {/* Header */}
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: reduced ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-eyebrow">
              <span>04</span>
              EXPERIENCE
            </div>

            <h2>
              Experience that
              <br />
              <span>shaped my work.</span>
            </h2>
          </div>

          <p>
            From gaining practical software-house experience to leading
            frontend work and training the next generation of developers,
            every role has strengthened how I approach real projects.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="experience-list">
          {experience.map((item, index) => {
            const Icon = icons[index] || FaBriefcase;

            return (
              <motion.article
                className={`experience-item ${
                  index === 1 ? "experience-featured" : ""
                }`}
                key={`${item.role}-${item.company}`}
                initial={{
                  opacity: 0,
                  x: reduced ? 0 : index % 2 === 0 ? -25 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                {/* Period */}
                <div className="experience-period">
                  <span>{item.period}</span>
                </div>

                {/* Marker */}
                <div className="experience-marker">
                  <Icon />
                </div>

                {/* Content */}
                <div className="experience-content">
                  <div className="experience-top">
                    <div>
                      <span className="experience-role-label">
                        {index === 0
                          ? "CURRENT ROLE"
                          : index === 1
                          ? "FRONTEND EXPERIENCE"
                          : "EARLY EXPERIENCE"}
                      </span>

                      <h3>{item.role}</h3>

                      <h4>{item.company}</h4>
                    </div>

                    <span className="experience-index">
                      0{index + 1}
                    </span>
                  </div>

                  <p>{item.text}</p>

                  <div className="experience-tags">
                    {index === 0 && (
                      <>
                        <span>Web Development</span>
                        <span>Training</span>
                        <span>Frontend</span>
                      </>
                    )}

                    {index === 1 && (
                      <>
                        <span>React.js</span>
                        <span>Responsive UI</span>
                        <span>API Integration</span>
                      </>
                    )}

                    {index === 2 && (
                      <>
                        <span>Web Development</span>
                        <span>Practical Projects</span>
                        <span>Software House</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Career Summary */}
        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="experience-summary-icon">
            <FaBriefcase />
          </div>

          <div className="experience-summary-text">
            <span>WHAT THIS EXPERIENCE MEANS</span>

            <p>
              I understand frontend development from both sides — building
              real applications and explaining development concepts to
              others. That combination has made me more comfortable with
              requirements, problem-solving, communication and practical
              project work.
            </p>
          </div>

          <a href="#projects" className="experience-project-link">
            See my projects
            <FaArrowUpRightFromSquare />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

