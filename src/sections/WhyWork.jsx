import { Container } from "react-bootstrap";
import {
  FaReact,
  FaCode,
  FaPuzzlePiece,
  FaComments,
  FaArrowsRotate,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";

const reasons = [
  {
    number: "01",
    icon: FaReact,
    title: "React-first development",
    text:
      "React.js is my primary frontend focus. I build component-based interfaces that are structured, reusable and easier to maintain.",
  },
  {
    number: "02",
    icon: FaPuzzlePiece,
    title: "I understand the full flow",
    text:
      "I don't only focus on the visual layer. I understand how frontend screens connect with APIs, authentication, data and real application flows.",
  },
  {
    number: "03",
    icon: FaCode,
    title: "Clean, practical code",
    text:
      "I prefer clear component structures and practical solutions that make a project easier to understand, update and extend later.",
  },
  {
    number: "04",
    icon: FaArrowsRotate,
    title: "Responsive by default",
    text:
      "A website should feel right on every screen. I pay attention to spacing, layout, interaction and usability across devices.",
  },
  {
    number: "05",
    icon: FaComments,
    title: "Clear communication",
    text:
      "Good development also means understanding requirements, discussing problems clearly and keeping the work aligned with the actual goal.",
  },
];

export default function WhyWork() {
  const reduced = useReducedMotion();

  return (
    <section className="why-section" id="why-work">
      <Container>
        {/* HEADER */}
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: reduced ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-eyebrow">
              <span>07</span>
              WHY WORK WITH ME
            </div>

            <h2>
              More than just
              <br />
              <span>writing frontend code.</span>
            </h2>
          </div>

          <p>
            I bring together frontend development, API integration, practical
            project experience and an understanding of how a finished product
            should feel to the person using it.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="why-layout">
          {/* LEFT FEATURE */}
          <motion.div
            className="why-feature"
            initial={{
              opacity: 0,
              x: reduced ? 0 : -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="why-feature-top">
              <span>THE DIFFERENCE</span>

              <div className="why-feature-icon">
                <FaReact />
              </div>
            </div>

            <div className="why-feature-content">
              <h3>
                I think about the
                <br />
                <em>product,</em> not just
                <br />
                the page.
              </h3>

              <p>
                Whether I'm building a new interface or working inside an
                existing application, I look at how the pieces work together —
                from the user interface and responsive behavior to API data
                and real application states.
              </p>
            </div>

            <div className="why-feature-bottom">
              <div>
                <strong>React.js</strong>
                <span>Primary focus</span>
              </div>

              <div>
                <strong>API</strong>
                <span>Integration</span>
              </div>

              <div>
                <strong>2+</strong>
                <span>Years experience</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT REASONS */}
          <div className="why-list">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  className="why-item"
                  key={reason.number}
                  initial={{
                    opacity: 0,
                    x: reduced ? 0 : 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                >
                  <span className="why-number">
                    {reason.number}
                  </span>

                  <div className="why-item-icon">
                    <Icon />
                  </div>

                  <div className="why-item-content">
                    <h3>{reason.title}</h3>
                    <p>{reason.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="why-cta"
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
          <div>
            <span>READY TO BUILD?</span>

            <h3>
              Have a project in mind?
              <br />
              <em>Let's talk about it.</em>
            </h3>
          </div>

          <a href="#contact">
            Get in touch
            <FaArrowUpRightFromSquare />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

