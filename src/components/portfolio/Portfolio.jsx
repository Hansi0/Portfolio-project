import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./portfolio.scss";

const items=[
    {
        id:1,
        title:"Bank Churn Model",
        img: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "lorfeklfcmdklmckldmnjcnskjddhchjdvmbfsj"
        
    },
    {
        id:2,
        title:"Virtual Sketch",
        img: "https://images.pexels.com/photos/225011/pexels-photo-225011.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "lorfeklfcmdklmckldmnjcnskjddhchjdvmbfsj"
        
    },
    {
        id:3,
        title:"Book Recommendation App",
        img:"https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "lorfeklfcmdklmckldmnjcnskjddhchjdvmbfsj"
        
    }
]

const Single=({item}) =>{
    const ref=useRef();
    
    const {scrollYProgress} = useScroll({
        target:ref,
        
    });
    const y=useTransform(scrollYProgress, [0,1] ,["0%" ,"300%"]);
    return(
    <section ref={ref}>
        <div className="container">
           
          
            <div className="wrapper">
            <div className="imgcontainer">
            <img src={item.img}></img>
            </div>
            <motion.div className="textcontainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
            </div>
            </section>
            );

};

const Portfolio = () => {
    const ref=useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end", "start start"]
        
    });

    const  scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });
    
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
        </div>
        <motion.div  style={{scaleX:scaleX}}className="progressbar"></motion.div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
       
      
    </div>
  );
};

export default Portfolio;
