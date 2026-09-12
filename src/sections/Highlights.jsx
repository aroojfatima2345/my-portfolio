import { Container } from "react-bootstrap";
import {
  FaReact,
  FaPlug,
  FaMobileScreen,
  FaWandMagicSparkles,
  FaUsers,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";

const highlights = [
  {
    number: "01",
    icon: FaReact,
    title: "React.js",
    text: "Primary frontend focus with component-based development.",
  },
  {
    number: "02",
    icon: FaPlug,
    title: "API Integration",
    text: "Connecting frontend interfaces with real application data.",
  },
  {
    number: "03",
    icon: FaMobileScreen,
    title: "Responsive UI",
    text: "Interfaces built to work smoothly across different screens.",
  },
  {
    number: "04",
    icon: FaWandMagicSparkles,
    title: "AI-Assisted Development",
    text: "Using modern AI tools to research, debug and improve development workflows.",
  },
  {
    number: "05",
    icon: FaUsers,
    title: "Real Project Experience",
    text: "Practical experience building and working on real web applications.",
  },
];

export default function Highlights() {
  const reduced = useReducedMotion();

  return (
    <section className="highlights-section" id="highlights">
      <Container>
        {/* HEADER */}
        <motion.div
          className="highlights-header"
          initial={{ opacity: 0, y: reduced ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-eyebrow">
              <span>08</span>
              AT A GLANCE
            </div>

            <h2>
              The skills I bring
              <br />
              <span>to the table.</span>
            </h2>
          </div>

          <p>
            A quick look at the areas where I can contribute most effectively
            to a frontend project or development team.
          </p>
        </motion.div>

        {/* HIGHLIGHTS */}
        <div className="highlights-grid">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`highlight-card ${
                  index === 0 ? "highlight-featured" : ""
                }`}
                key={item.number}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                <div className="highlight-top">
                  <span>{item.number}</span>

                  <div className="highlight-icon">
                    <Icon />
                  </div>
                </div>

                <div className="highlight-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <div className="highlight-line" />
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          className="highlights-bottom"
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
          <div className="highlights-bottom-text">
            <span>CORE APPROACH</span>

            <p>
              Learn quickly. Build carefully. Keep improving.
            </p>
          </div>

          <div className="highlights-stack">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
            <span>REST APIs</span>
            <span>Framer Motion</span>
          </div>

          <a href="#contact">
            Work with me
            <FaArrowUpRightFromSquare />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

