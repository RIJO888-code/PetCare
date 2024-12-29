import React, { useState } from 'react';
import './Form.css';

const PetCareForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    pincode: '',
    service: '',
    duration: '',
    animalType: '',
    animalAge: '',
    vaccinated: false,
    fund: 0,
  });

  const [showFund, setShowFund] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setFormData({ ...formData, service: selectedService });
    if (selectedService === 'shelter' || selectedService === 'food') {
      setShowFund(true);
    } else {
      setShowFund(false);
    }
  };

  const calculateFund = () => {
    const { animalType, duration } = formData;
    let costPerDay = 0;
    switch (animalType) {
      case 'dog':
        costPerDay = 500;
        break;
      case 'cat':
        costPerDay = 400;
        break;
      case 'goat':
        costPerDay = 600;
        break;
      case 'rabbit':
        costPerDay = 400;
        break;
      case 'hamster':
        costPerDay = 400;
        break;
      case 'cow':
        costPerDay = 1000;
        break;
      case 'sheep':
        costPerDay = 800;
        break;
      case 'fish':
        costPerDay = 50;
        break;
      case 'bird':
        costPerDay = 400;
        break;
      case 'horse':
        costPerDay = 1200;
        break;
      default:
        costPerDay = 0;
    }
    return duration * costPerDay;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log('Form Submitted:', data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="pet-care-form">
        <h2 className="form-heading">Pet Care Registration Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Owner Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleInputChange}
          required
        />

        <select
          name="service"
          onChange={handleServiceChange}
          value={formData.service}
          required
        >
          <option value="">Select Service</option>
          <option value="shelter">Shelter for Pets</option>
          <option value="food">Food for Pets</option>
          <option value="training">Training</option>
        </select>

        {showFund && (
          <div className="fund-display">
            <input
              type="number"
              name="duration"
              placeholder="Duration (in days)"
              value={formData.duration}
              onChange={handleInputChange}
              required
            />
            <p>Fund Required: {calculateFund()}</p>
          </div>
        )}

        <select
          name="animalType"
          value={formData.animalType}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Animal Type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="goat">Goat</option>
          <option value="rabbit">Rabbit</option>
          <option value="hamster">Hamster</option>
          <option value="cow">Cow</option>
          <option value="sheep">Sheep</option>
          <option value="fish">Fish</option>
          <option value="bird">Bird</option>
          <option value="horse">Horse</option>
        </select>

        <input
          type="number"
          name="animalAge"
          placeholder="Animal Age"
          value={formData.animalAge}
          onChange={handleInputChange}
          required
        />

        <label>
          Vaccinated:
          <input
            type="checkbox"
            name="vaccinated"
            checked={formData.vaccinated}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit" className="submit-btn">
          Submit
        </button>

        <div className="info-box">
          <p>
            Our experts will contact you and collect your pet from your
            doorstep. No need to worry, 50% of total amount must be given as  advance  when picking up
            the pet, and the balance will be collected at the time of delivery.
            The pet will be delivered back to your doorstep.
          </p>
        </div>
      </form>
    </div>
  );
};

export default PetCareForm;
