import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Rating.css';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      name,
      rating,
      feedback,
    };

   
    console.log(feedbackData);
  };

  return (
    <div className="rating-container">
      <motion.div
        className="rating-box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="rating-heading"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 120 }}
        >
          Rate Our Company
        </motion.h2>

        <div className="rating-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              className={`star ${rating >= star ? 'filled' : ''}`}
              onClick={() => setRating(star)}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              ★
            </motion.div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="feedback-form">
          <motion.input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            whileFocus={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.textarea
            placeholder="Your Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            whileFocus={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>


      <footer className="footer">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="footer-column">
            <h4>Activities</h4>
            <ul>
              <li>Pet Shelter</li>
              <li>Vaccination Services</li>
              <li>Pet Training</li>
              <li>Pet Grooming</li>
              <li>Adoption Assistance</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/complaints">Register Complaints</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul id='contact'>
              <li>Email: contact@HappyPaws.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: Adoor, Kerala, India</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
  className="copyright-footer"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <p>© 2024 Happy Paws. All Rights Reserved.</p>
</motion.div>
      </footer>



    </div>
  );
 
};

export default Rating;
