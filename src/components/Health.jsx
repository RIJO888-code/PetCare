import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Health.css';

const PetHealthGuidance = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    setShowForm(true); 
  };

  return (
    <section className="health-page-container">

      <motion.div
        className="health-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Your Pet's Health and Guidance</h1>
        <p>Providing the best care and love your furry friend deserves!</p>
      </motion.div>

      <div className="guidelines-container">
        <h2 id='bookappointment'>Guidelines for a Happy Pet Life</h2>
        <ul>
          <li>Ensure a balanced diet for your pet.</li>
          <li>Maintain regular exercise and playtime.</li>
          <li>Schedule periodic medical checkups.</li>
          <li>Keep up-to-date with vaccinations.</li>
          <li>Show love and care consistently!</li>
        </ul>
      </div>


      <div className="services-container">
        <motion.div
          className="service-card"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Health Checkups</h3>
          <p>Regular medical checkups to ensure your pet’s well-being.</p>
        </motion.div>
        <motion.div
          className="service-card"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Vaccinations</h3>
          <p>
            Done By specialized vetenarians.
          </p>
        </motion.div>
      </div>


      {!showForm && (
        <motion.div
          className="book-appointment-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a  href="#" onClick={handleLinkClick}>
            Book My Appointment
          </a>
        </motion.div>
      )}


      {showForm && (
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2>Book an Appointment</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Your Pet's Name" required />
          <input type="text" placeholder="Address" required />
          <input type="datetime-local" required />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </motion.form>
      )}

     
      {isSubmitted && (
        <motion.div
          className="confirmation-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Your appointment has been successfully booked. Our medical expert
            will contact you and reach your home at your specified time. Thank
            you for choosing our services!
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default PetHealthGuidance;
