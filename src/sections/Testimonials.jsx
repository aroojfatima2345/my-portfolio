import { motion } from "framer-motion";
import {
  FaReact,
  FaCode,
  FaPlug,
  FaMobileScreenButton,
  FaWandMagicSparkles,
  FaCheck,
} from "react-icons/fa6";

const points = [
  {
    icon: <FaReact />,
    title: "React-first mindset",
    text: "I focus on building interfaces with reusable components, clear structure and maintainable React code.",
  },
  {
    icon: <FaPlug />,
    title: "Real API integration",
    text: "I work with real application data, API responses, authentication flows and frontend states.",
  },
  {
    icon: <FaMobileScreenButton />,
    title: "Responsive by default",
    text: "Every interface is developed with different screen sizes and real-world usability in mind.",
  },
  {
    icon: <FaCode />,
    title: "Practical development",
    text: "I prefer clean and understandable solutions that are easier to maintain, improve and scale.",
  },
];

const strengths = [
  "React.js development",
  "Responsive UI",
  "REST API integration",
  "Reusable components",
  "Frontend problem solving",
  "AI-assisted development",
];

export default function Testimonials() {
  return (
    <section className="snapshot-section" id="snapshot">
      <div className="container">
        <motion.div
          className="snapshot-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">PROFESSIONAL SNAPSHOT</span>

          <h2>
            Built for real projects,
            <span> not just portfolio pieces.</span>
          </h2>

          <p>
            I bring a practical frontend mindset to every project — from
            understanding requirements to building the interface, integrating
            APIs and refining the final experience.
          </p>
        </motion.div>

        <div className="snapshot-layout">
          <motion.div
            className="snapshot-main"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="snapshot-icon">
              <FaWandMagicSparkles />
            </div>

            <span className="snapshot-label">HOW I WORK</span>

            <h3>
              I care about how the final product actually works.
            </h3>

            <p>
              Good frontend development is more than making a page look good.
              It is about creating a clear experience, handling real data,
              thinking through different states and making sure the interface
              works properly across devices.
            </p>

            <p>
              That is the approach I bring to React projects — combining
              clean UI development with practical problem solving and
              continuous improvement.
            </p>

            <div className="snapshot-signature">
              <span></span>
              <strong>Arooj Fatima</strong>
              <small>React Frontend Developer</small>
            </div>
          </motion.div>

          <div className="snapshot-side">
            {points.map((item, index) => (
              <motion.div
                className="snapshot-point"
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="snapshot-point-icon">{item.icon}</div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="snapshot-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="snapshot-bottom-title">
            <span>WHAT I BRING</span>
            <p>Skills that translate into real frontend work.</p>
          </div>

          <div className="snapshot-tags">
            {strengths.map((item) => (
              <span key={item}>
                <FaCheck />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}