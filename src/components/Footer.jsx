import {
  FaArrowUp,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa6";
import { profile } from "../data/portfolioData";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              A<span>F</span>
            </a>

            <div>
              <h3>Arooj Fatima</h3>
              <p>React Frontend Developer</p>
            </div>
          </div>

          <p className="footer-intro">
            Building modern interfaces with React.js, thoughtful UI and
            practical frontend development.
          </p>

          <button
            className="footer-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>

        <div className="footer-middle">
          <div>
            <span className="footer-label">NAVIGATE</span>

            <nav className="footer-links">
              {links.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-social">
            <span className="footer-label">CONNECT</span>

            <div className="footer-social-links">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Arooj Fatima. All rights reserved.
          </span>

          <span>REACT · UI · API INTEGRATION</span>
        </div>
      </div>
    </footer>
  );
}