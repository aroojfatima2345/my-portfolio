import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaLinkedinIn,
  FaArrowUpRightFromSquare,
  FaPaperPlane,
} from "react-icons/fa6";
import { profile } from "../data/portfolioData";

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "EMAIL",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <FaPhone />,
    label: "PHONE",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <FaLocationDot />,
    label: "LOCATION",
    value: profile.location,
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-content">
            <span className="section-eyebrow">LET'S WORK TOGETHER</span>

            <h2>
              Have a project
              <span> in mind?</span>
            </h2>

            <p>
              Whether you need a React frontend, an existing interface
              improved, or a frontend connected with APIs, I’d be happy to
              discuss what you’re building.
            </p>

            <div className="contact-actions">
              <a
                href={`mailto:${profile.email}?subject=Project Inquiry`}
                className="contact-primary"
              >
                <FaPaperPlane />
                Start a conversation
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-secondary"
              >
                <FaLinkedinIn />
                LinkedIn
                <FaArrowUpRightFromSquare />
              </a>
            </div>
          </div>

          <div className="contact-details">
            <span className="contact-details-label">GET IN TOUCH</span>

            {contactItems.map((item) => (
              <div className="contact-detail" key={item.label}>
                <div className="contact-detail-icon">{item.icon}</div>

                <div>
                  <small>{item.label}</small>

                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            <div className="contact-availability">
              <span className="availability-dot"></span>

              <div>
                <strong>Open to opportunities</strong>
                <p>
                  React frontend, freelance and project-based work.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span>REACT FRONTEND DEVELOPER</span>

          <p>
            Let's build something useful, thoughtful and well-made.
          </p>

          <span>MULTAN · PAKISTAN</span>
        </motion.div>
      </div>
    </section>
  );
}