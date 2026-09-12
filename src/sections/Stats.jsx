import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaLayerGroup,
  FaReact,
  FaPlug,
  FaMobileScreen,
} from "react-icons/fa6";
import { stats } from "../data/portfolioData";

const icons = [
  FaBriefcase,
  FaLayerGroup,
  FaReact,
  FaPlug,
  FaMobileScreen,
];

export default function Stats() {
  return (
    <section className="stats-strip">
      <Container>
        <div className="stats-header">
          <span>AT A GLANCE</span>
          <i />
        </div>

        <div className="stats-grid">
          {stats.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                className="stat-item"
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
              >
                <div className="stat-icon">
                  <Icon />
                </div>

                <div className="stat-content">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}