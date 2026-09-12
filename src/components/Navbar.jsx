import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUpRightFromSquare,
  FaPaperPlane,
} from "react-icons/fa6";
import { profile } from "../data/portfolioData";

const links = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Services",
  "Contact",
];

export default function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 30);

      const sections = links
        .map((link) => document.getElementById(link.toLowerCase()))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        if (scrollY + 220 >= section.offsetTop) {
          current = section.id;
        }
      });

      setActive(
        current === "home"
          ? "Home"
          : current.charAt(0).toUpperCase() + current.slice(1)
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#home" className="brand-mark">
          <span className="brand-symbol">
            <span />
          </span>

          <span className="brand-name">
            Arooj <strong>Fatima</strong>
          </span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="main-nav">
          <span className="navbar-toggle-lines">
            <i />
            <i />
            <i />
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav">
          {/* Navigation */}
          <Nav className="main-navigation mx-auto">
            {links.map((link) => {
              const isActive = active === link;

              return (
                <Nav.Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={isActive ? "active" : ""}
                >
                  <span>{link}</span>
                </Nav.Link>
              );
            })}
          </Nav>

          {/* Actions */}
          <div className="nav-actions">
            <div className="nav-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="nav-social"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="nav-social"
              >
                <FaLinkedin />
              </a>
            </div>

            <a href="#contact" className="nav-talk-btn">
              <span>Let's Talk</span>
              <FaPaperPlane />
            </a>

            <a
              href={profile.cvPath}
              download
              className="nav-cv-link"
              aria-label="Download CV"
            >
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}