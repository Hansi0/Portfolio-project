import { motion } from "framer-motion";
import "./hero.scss";

const textvariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slidervariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.div className="wrapper">
        <motion.div className="text-container" variants={textvariants} initial="initial" animate="animate">
          <motion.h2 variants={textvariants}>Himanshi Rajput</motion.h2>
          <motion.h1 variants={textvariants}>Web Developer</motion.h1>
          <motion.div variants={textvariants} className="buttons">
            <motion.button variants={textvariants}>See The Latest Works</motion.button>
            <motion.button variants={textvariants}>Contact Me</motion.button>
          </motion.div>
          <motion.div>
            <motion.img variants={textvariants} src="/scroll.png" alt="Scroll Indicator" />
          </motion.div>
        </motion.div>
        <motion.div className="slidingtextcontainer" variants={slidervariants} initial="initial" animate="animate">
          Writer Content Creator Influencer
        </motion.div>
      </motion.div>
      <div className="img-container">
        <img src="/avatarhero.png" alt="Hero" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
