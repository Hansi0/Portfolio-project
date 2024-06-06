import { motion } from "framer-motion";
import "./services.scss";

const Services = () => {
  return (
    <motion.div className="services">
        <motion.div className="textcontainer">
            <p> I focus on Helping your Brand grow
            and move forward</p>
            
        </motion.div>
        <motion.div className="titlecontainer">
            <div className="title">
                <img src="/people.webp" alt="People"/>
                <h1><b>Unique</b> Ideas</h1>
            </div>
            <div className="title">
                <h1><b>For Your</b> Business</h1>
                <button>What We Do?</button>
            </div>
        </motion.div>
        <motion.div className="listcontainer">
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}} >
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
     );
    }
    
    export default Services;
