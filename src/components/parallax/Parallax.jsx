import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./parallax.scss";

const Parallax = ({ type }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "start end"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: type == "services"
          ? "linear-gradient(180deg,#111132, #0c0c1d)"
          : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1
        style={{
          y: yText,
        }}
      >
        {type === "services" ? "What I'll Do?" : "What I'll Do?"}

      </motion.h1>

      <motion.div style={{ y: yBg }} className="mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="planets"></motion.div>
      <motion.div style={{ y: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
