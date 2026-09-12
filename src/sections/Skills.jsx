import { Container } from "react-bootstrap";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaPhp,
  FaWordpress,
  FaBolt,
  FaRobot,
  FaCode,
  FaPlug,
  FaLayerGroup,
} from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import { skillGroups, stack, aiTools } from "../data/portfolioData";

const icons = {
  "React.js": FaReact,
  JavaScript: FaJs,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  Bootstrap: FaBootstrap,
  Redux: FaLayerGroup,
  "Framer Motion": FaBolt,
  Axios: FaPlug,
  "REST APIs": FaPlug,
  Vite: FaBolt,
  Git: FaGitAlt,
  GitHub: FaGithub,
  MySQL: FaDatabase,
  PHP: FaPhp,
  WordPress: FaWordpress,
};

const groupIcons = {
  Frontend: FaReact,
  "State & UI": FaLayerGroup,
  "API & Integration": FaPlug,
  "Supporting Tools": FaCode,
};

const aiIcons = {
  ChatGPT: FaRobot,
  Claude: FaRobot,
  "GitHub Copilot": FaCode,
  Cursor: FaCode,
  "Google Gemini": FaRobot,
  v0: FaLayerGroup,
};

export default function Skills() {
  const reduced = useReducedMotion();

  return (
    <section className="skills-section" id="skills">
      <Container>

        {/* Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: reduced ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-eyebrow">
              <span>03</span>
              SKILLS & TECHNOLOGY
            </div>

            <h2>
              The tools behind
              <br />
              <span>the work.</span>
            </h2>
          </div>

          <p>
            My development stack combines React-focused frontend engineering,
            API integration, responsive UI and modern AI-assisted development
            workflows.
          </p>
        </motion.div>

        {/* Main Skills */}
        <div className="skills-main">

          {/* Skill Groups */}
          <div className="skill-groups">
            {skillGroups.map((group, index) => {
              const GroupIcon = groupIcons[group.title];

              return (
                <motion.div
                  className="skill-group"
                  key={group.title}
                  initial={{
                    opacity: 0,
                    y: reduced ? 0 : 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <div className="skill-group-heading">
                    <div className="skill-group-icon">
                      <GroupIcon />
                    </div>

                    <div>
                      <span>0{index + 1}</span>
                      <h3>{group.title}</h3>
                    </div>
                  </div>

                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Primary Stack */}
          <motion.div
            className="primary-stack"
            initial={{ opacity: 0, x: reduced ? 0 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="stack-heading">
              <span>CORE STACK</span>
              <i />
            </div>

            <div className="stack-list">
              {stack.map(([name, iconName]) => {
                const Icon = icons[name];

                return (
                  <div className="stack-item" key={name}>
                    <div className={`stack-icon stack-${iconName}`}>
                      {Icon && <Icon />}
                    </div>

                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* AI Section */}
        <motion.div
          className="ai-development"
          initial={{ opacity: 0, y: reduced ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="ai-heading">
            <div className="ai-heading-icon">
              <FaRobot />
            </div>

            <div>
              <div className="ai-label">
                MODERN DEVELOPMENT WORKFLOW
              </div>

              <h3>
                AI-Assisted <span>Development</span>
              </h3>
            </div>
          </div>

          <p className="ai-description">
            I use modern AI tools as development assistants to speed up
            problem solving, explore solutions, debug code, improve
            workflows and accelerate UI ideation — while keeping the
            architecture, logic and final implementation developer-led.
          </p>

          <div className="ai-tools-grid">
            {aiTools.map((tool, index) => {
              const Icon = aiIcons[tool.name];

              return (
                <motion.div
                  className="ai-tool"
                  key={tool.name}
                  initial={{
                    opacity: 0,
                    y: reduced ? 0 : 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                >
                  <div className="ai-tool-icon">
                    {Icon && <Icon />}
                  </div>

                  <div className="ai-tool-content">
                    <strong>{tool.name}</strong>
                    <span>{tool.category}</span>
                    <p>{tool.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          className="skills-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>MY APPROACH</span>

          <p>
            Technology changes quickly. I focus on understanding the
            fundamentals, learning new tools and using the right technology
            for the problem—not simply following trends.
          </p>
        </motion.div>

      </Container>
    </section>
  );
}

