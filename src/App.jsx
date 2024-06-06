import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Parallax1 from "./components/parallax2/Parallax1";
import Portfolio from "./components/portfolio/Portfolio";

import Services from "./components/services/Services";
const App = () => {
  return (
    <div>
     
      <section id="Homepage">
        <Navbar />
        <Hero />
        
      </section>
      
      <section id="Services"><Parallax type="service" /></section>
      <section><Services /></section>
      
      <section id="Portfolio"><Parallax1 type="Portfolio" /></section>
      <section><Portfolio /></section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default App;
