import { motion } from "framer-motion";

const Test = () => {
  return (
    <div className="framer-course">
        <motion.div className="box" animate={{opacity:0}} transition={{duration:2}}></motion.div>
      
    </div>
  );
}

export default Test;
