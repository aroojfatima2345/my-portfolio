import { Container } from "react-bootstrap";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCode,
  FaLayerGroup,
  FaCheck,
  FaCircle,
} from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const reduced = useReducedMotion();

  return (
    <section className="projects-section" id="projects">
      <Container>
        {/* HEADER */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: reduced ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-eyebrow">
              <span>05</span>
              SELECTED WORK
            </div>

            <h2>
              Projects that show
              <br />
              <span>how I build.</span>
            </h2>
          </div>

          <p>
            A selection of frontend projects where I worked with React,
            responsive interfaces, reusable components and real application
            flows.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <div className="projects-showcase">
          {projects.map((project, index) => {
            const featured = index === 0;

            return (
              <motion.article
                className={`project-case ${
                  featured ? "project-featured" : ""
                }`}
                key={project.title}
                initial={{
                  opacity: 0,
                  y: reduced ? 0 : 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
              >
                {/* IMAGE */}
                <div className="project-visual">
                  <div className="project-image-wrap">
                    <img
                      src={project.image}
                      alt={`${project.title} project`}
                    />
                  </div>

                  <div className="project-number">
                    <span>0{index + 1}</span>
                  </div>

                  <div className="project-category">
                    <FaCircle />
                    {project.category}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="project-details">
                  <div className="project-heading">
                    <div>
                      <span className="project-label">
                        {featured ? "FEATURED PROJECT" : "PROJECT"}
                      </span>

                      <h3>{project.title}</h3>
                    </div>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-external"
                        aria-label={`Open ${project.title}`}
                      >
                        <FaArrowUpRightFromSquare />
                      </a>
                    )}
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-case-grid">
                    <div>
                      <span>MY CONTRIBUTION</span>
                      <p>{project.contribution}</p>
                    </div>

                    <div>
                      <span>APPROACH</span>
                      <p>{project.solution}</p>
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div className="project-features">
                    <div className="project-feature-title">
                      <FaLayerGroup />
                      <span>KEY FEATURES</span>
                    </div>

                    <div className="project-feature-list">
                      {project.features?.map((feature) => (
                        <span key={feature}>
                          <FaCheck />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* TECH */}
                  <div className="project-footer">
                    <div className="project-tech">
                      <FaCode />

                      {project.tech?.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Project
                          <FaArrowUpRightFromSquare />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          className="projects-bottom"
          initial={{
            opacity: 0,
            y: reduced ? 0 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="projects-bottom-icon">
            <FaCode />
          </div>

          <div>
            <span>LOOKING FOR SOMETHING SPECIFIC?</span>
            <p>
              I’m open to building new React applications, improving existing
              interfaces and working on frontend projects that solve real
              business needs.
            </p>
          </div>

          <a href="#contact">
            Start a conversation
            <FaArrowUpRightFromSquare />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

