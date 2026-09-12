import { Container } from "react-bootstrap";
import {
  FaReact,
  FaPlug,
  FaMobileScreen,
  FaLayerGroup,
  FaWandMagicSparkles,
  FaBug,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "../data/portfolioData";

const icons = {
  react: FaReact,
  responsive: FaMobileScreen,
  api: FaPlug,
  landing: FaWandMagicSparkles,
  ui: FaLayerGroup,
  fix: FaBug,
};

export default function WhatIDo() {
  const reduced = useReducedMotion();

  return (
    <section className="services-section" id="services">
      <Container>
        {/* Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: reduced ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-eyebrow services-eyebrow">
              <span>02</span>
              WHAT I DO
            </div>

            <h2>
              Frontend development
              <br />
              <span>with purpose.</span>
            </h2>
          </div>

          <div className="services-intro">
            <p>
              I build more than visually appealing pages. I focus on
              interfaces that are responsive, reusable, connected to real
              data and easy to maintain.
            </p>

            <a href="#contact" className="services-header-link">
              Start a project
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = icons[service.icon];

            return (
              <motion.article
                className={`service-card ${
                  index === 0 ? "service-card-featured" : ""
                }`}
                key={service.title}
                initial={{
                  opacity: 0,
                  y: reduced ? 0 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <div className="service-card-top">
                  <span className="service-number">
                    0{index + 1}
                  </span>

                  <div className="service-icon">
                    <Icon />
                  </div>
                </div>

                <div className="service-card-content">
                  <h3>{service.title}</h3>

                  <p>{service.text}</p>
                </div>

                <div className="service-card-footer">
                  <span>
                    {index === 0
                      ? "Core specialization"
                      : "Frontend service"}
                  </span>

                  <FaArrowUpRightFromSquare />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          className="services-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="services-bottom-line" />

          <p>
            <strong>Need something specific?</strong>{" "}
            I can work from a design, existing website, reference or
            business requirement and turn it into a functional React
            frontend.
          </p>

          <a href="#contact">
            Discuss your project
            <FaArrowUpRightFromSquare />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

