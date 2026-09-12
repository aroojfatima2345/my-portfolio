import { Container } from "react-bootstrap";
import {
  FaMagnifyingGlass,
  FaListCheck,
  FaCode,
  FaPlug,
  FaCircleCheck,
  FaArrowRight,
} from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import { process } from "../data/portfolioData";

const icons = [
  FaMagnifyingGlass,
  FaListCheck,
  FaCode,
  FaPlug,
  FaCircleCheck,
];

export default function Process() {
  const reduced = useReducedMotion();

  return (
    <section className="process-section" id="process">
      <Container>
        {/* HEADER */}
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: reduced ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-eyebrow">
              <span>06</span>
              HOW I WORK
            </div>

            <h2>
              A clear process.
              <br />
              <span>Better results.</span>
            </h2>
          </div>

          <p>
            Good frontend work is not only about writing code. I focus on
            understanding the requirement, building with structure and
            refining the details before delivery.
          </p>
        </motion.div>

        {/* PROCESS */}
        <div className="process-timeline">
          {process.map((item, index) => {
            const Icon = icons[index] || FaCode;

            return (
              <motion.article
                className={`process-item ${
                  index === process.length - 1 ? "process-last" : ""
                }`}
                key={item[0]}
                initial={{
                  opacity: 0,
                  y: reduced ? 0 : 30,
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
                  duration: 0.55,
                  delay: index * 0.1,
                }}
              >
                <div className="process-number">
                  {item[0]}
                </div>

                <div className="process-line">
                  <div className="process-icon">
                    <Icon />
                  </div>

                  {index !== process.length - 1 && (
                    <span className="process-connector" />
                  )}
                </div>

                <div className="process-content">
                  <span className="process-step">
                    STEP {item[0]}
                  </span>

                  <h3>{item[1]}</h3>

                  <p>{item[2]}</p>
                </div>

                {index !== process.length - 1 && (
                  <FaArrowRight className="process-arrow" />
                )}
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM */}
        <motion.div
          className="process-bottom"
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
          <div className="process-bottom-left">
            <div className="process-bottom-icon">
              <FaCircleCheck />
            </div>

            <div>
              <span>THE GOAL</span>
              <p>
                Build something that works well, looks intentional and is
                easy to maintain.
              </p>
            </div>
          </div>

          <div className="process-bottom-tag">
            <span>React.js</span>
            <span>Responsive UI</span>
            <span>API Integration</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

