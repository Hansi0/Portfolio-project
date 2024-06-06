
/*import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import "./contact.scss";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
      .then(
        (success) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div variants={variants} className="textcontainer">
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>himanshirajput@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Vijay Nagar, Ghaziabad</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>+91 1234567890</span>
        </motion.div>
      </motion.div>
      <form className="formcontainer" ref={formRef} onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="name"/><br />
        <input type="email" placeholder="Email" name="email"/><br />
        <textarea  placeholder="Message" name="message"/><br />
        <button type="submit">Submit</button>
      </form>
      {error && <div>Error sending email. Please try again later.</div>}
      {success && <div>Email sent successfully!</div>}
    </motion.div>
  );
}

export default Contact;*/

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import "./contact.scss";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
      .then(
        (response) => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div variants={variants} className="textcontainer">
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>himanshirajput@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Vijay Nagar, Ghaziabad</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>+91 1234567890</span>
        </motion.div>
      </motion.div>
      <form className="formcontainer" ref={formRef} onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="name" required /><br />
        <input type="email" placeholder="Email" name="email" required /><br />
        <textarea placeholder="Message" name="message" required /><br />
        <button type="submit">Submit</button>
      </form>
      {error && <div className="notification error">Error sending email. Please try again later.</div>}
      {success && <div className="notification success">Email sent successfully!</div>}
    </motion.div>
  );
}

export default Contact;

