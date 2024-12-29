import React from 'react';
import { motion } from 'framer-motion';
import './Animals.css'; 

const animalData = [
  { name: 'Dog', image: '/image/Dog.jpg' },
  { name: 'Cat', image: '/image/Cat.avif' },
  { name: 'Cow', image: '/image/Cow.webp' },
  { name: 'Goat', image: '/image/Goat.jpg' },
  { name: 'Sheep', image: '/image/Sheep.jpg' },
  { name: 'Birds (Any)', image: '/image/bird.jpg' },
  { name: 'Horse', image: '/image/horse.jpg' },
  { name: 'Rabbit', image: '/image/Rabbit.jpg' },
  { name: 'Hamster', image: '/image/Hamster.jpg' },
  { name: 'Fish', image: '/image/Fish.jpg' },
];

const Animals = () => {
  return (
    <div className="animals-container">
 
      <motion.div
        className="animals-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <h2>Animals We Care For</h2>

   
        <div className="animals-cards-container">
          {animalData.map((animal, index) => (
            <motion.div
              key={index}
              className="animal-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="animal-image"
                style={{ backgroundImage: `url(${animal.image})` }}
              ></div>
              <h3>{animal.name}</h3>
            </motion.div>
          ))}
        </div>

      
        <div className="contact-info">
          <p>
            If you have any other animals that need care, feel free to contact us.
          </p>
          <motion.a
            href="mailto:contact@petcareapp.com"
            className="email-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Email Us
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Animals;
