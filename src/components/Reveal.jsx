import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, delay = 0, className = "", direction = "up" }) {
  const reduced = useReducedMotion();
  const offset = direction === "left" ? { x: -28 } : direction === "right" ? { x: 28 } : { y: 28 };
  return <motion.div className={className} initial={{ opacity: 0, ...(reduced ? {} : offset) }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduced ? 0.2 : 0.55, delay }}>{children}</motion.div>;
}
