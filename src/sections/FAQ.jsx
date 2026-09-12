import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa6";

const faqs = [
  {
    question: "What kind of projects do you work on?",
    answer:
      "I mainly work on React.js frontend projects including business websites, real estate platforms, travel and visa websites, product-focused interfaces and responsive web applications.",
  },
  {
    question: "Can you work with an existing React project?",
    answer:
      "Yes. I can work with existing React applications, understand the current structure, fix frontend issues, improve UI, add new features and integrate or update APIs without unnecessarily rebuilding the entire project.",
  },
  {
    question: "Do you handle API integration?",
    answer:
      "Yes. API integration is one of my core frontend skills. I work with REST APIs, authentication flows, JSON data, Axios and frontend states to connect React interfaces with real application data.",
  },
  {
    question: "Can you build responsive websites?",
    answer:
      "Yes. I develop responsive interfaces that are designed to work across desktop, tablet and mobile screens, with attention to layout, usability and consistent visual presentation.",
  },
  {
    question: "What technologies do you mainly use?",
    answer:
      "My primary stack includes React.js, JavaScript, HTML5, CSS3, Bootstrap, React-Bootstrap, Redux, Framer Motion, REST APIs, Axios, Git and Vite.",
  },
  {
    question: "Do you use AI tools during development?",
    answer:
      "Yes, as development assistants. I use tools such as ChatGPT, Claude, Cursor and GitHub Copilot for research, debugging, code exploration, refactoring and productivity. I still review, understand and implement the final code myself.",
  },
  {
    question: "Are you available for freelance or project-based work?",
    answer:
      "Yes. I am open to suitable freelance, project-based and frontend development opportunities where I can contribute to a real product or business requirement.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">FAQ</span>

          <h2>
            A few things you
            <span> might want to know.</span>
          </h2>

          <p>
            Some quick answers about how I work, what I build and where I can
            contribute.
          </p>
        </motion.div>

        <div className="faq-wrapper">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                className={`faq-item ${isOpen ? "active" : ""}`}
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>
                    <small>0{index + 1}</small>
                    {faq.question}
                  </span>

                  <span className="faq-icon">
                    <FaPlus />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="faq-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span>STILL HAVE A QUESTION?</span>
            <h3>Let’s talk about your project.</h3>
          </div>

          <a href="#contact" className="faq-contact-btn">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}