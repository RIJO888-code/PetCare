import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const servicesData = [
    { title: 'Shelter for Pets', description: 'We offer safe and comfortable shelters for pets for any period of time as per the owner\'s choice.' },
    { title: 'Quality Food', description: 'We provide the best quality food tailored to meet the dietary needs of each pet.' },
    { title: 'Health Checkups', description: 'Regular health checkups to ensure your pets stay healthy and happy.' },
    { title: 'Vaccinations', description: 'We provide essential vaccinations to protect your pets from harmful diseases.' },
    { title: 'Baths and Grooming', description: 'We offer professional grooming services including baths, brushing, and cleaning.' },
    { title: 'Training', description: 'We provide training for your pets to help them learn basic commands and good behavior.' },
    { title: 'Pet Insurance', description: 'We offer various insurance plans to cover any medical expenses for your pets.' },
    { title: 'Emergency Care', description: 'Emergency services available to address any health issues your pet may face.' },
    { title: 'Pet Acquisition at Lower Budget', description: 'Looking for a specific pet? We help you acquire your desired pet at an affordable price.' },
  ];
  

const Services = () => {
  return (
    <div className="services-container">
    
      <motion.div
        className="services-heading"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, type: 'spring', stiffness: 50 }}
      >
        <h2 id='services'>Our Services</h2>
      </motion.div>

   
      <div className="services-list">
        {servicesData.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
