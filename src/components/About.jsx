import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const images = [
    '/images/About1.jpg', 
    '/images/About2.jpg', 
    '/images/About3.jpg', 
    '/images/About4.jpg',
    '/images/About5.jpg',
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="about-container">
    
      <motion.div
        className="image-slider"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <button className="arrow left" onClick={handlePrev}>
          &#8592;
        </button>
        <motion.div
          className="slider-image"
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        ></motion.div>
        <button className="arrow right" onClick={handleNext}>
          &#8594;
        </button>
      </motion.div>

    
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }} 
        transition={{ duration: 1.5 }}
      >
        <h1 id='about'>About Us</h1>
        <p>
          Welcome to our Pet Care App! We specialize in offering personalized care tips,
          health tracking, and the best products for your furry friends. Our platform is 
          designed to ensure your pets stay happy, healthy, and well taken care of!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="explore-btn"
        >
          Explore More
        </motion.button>
      </motion.div>

      {/* Vision and Mission Sections */}
      <div className="vision-mission-container">
        <motion.div
          className="vision-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Re-trigger animation every time it enters the view
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2>Our Vision</h2>
          <p>
            To become the leading platform in pet care, providing expert advice, 
            personalized health management, and a caring community for pet owners worldwide.
          </p>
        </motion.div>

        <motion.div
          className="mission-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Re-trigger animation every time it enters the view
          transition={{ duration: 1, delay: 1 }}
        >
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower pet owners with the tools and knowledge they need
            to keep their pets healthy and happy, while fostering a supportive environment 
            for pet lovers to connect, share, and learn.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
