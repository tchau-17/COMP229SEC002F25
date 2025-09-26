/*Assignment1 - Thai Chau Dao - 301420688 - Sept 23, 2025 */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    alert(
      `Submitted Data:\n\n` +
      `Name: ${data.firstName} ${data.lastName}\n` +
      `Phone: ${data.contactNumber}\n` +
      `Email: ${data.email}\n` +
      `Message: ${data.message}`
    );
    navigate('/');
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>

      <div className="contact-panel">
        <h3>My Contact Information</h3>
        <p><strong>Email:</strong> thaichdao@gmail.com</p>
        <p><strong>Phone:</strong> (437) 984 - 9988</p>
        <p><strong>Address:</strong> Toronto, ON</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <h3>Send Me a Message</h3>
        
        <div className="form-row">
          <label htmlFor="firstName">First Name: </label>
          <input {...register("firstName")} id="firstName" type="text" />
        </div>

        <div className="form-row">
          <label htmlFor="lastName">Last Name:</label>
          <input {...register("lastName")} id="lastName" type="text" />
        </div>

        <div className="form-row">
          <label htmlFor="contactNumber">Phone Number:</label>
          <input {...register("contactNumber")} id="contactNumber" type="tel" />
        </div>
        
        <div className="form-row">
          <label htmlFor="email">Email:</label>
          <input {...register("email")} id="email" type="email" />
        </div>

        <div className="form-row message-row">
          <label htmlFor="message">Message:</label>
          <textarea {...register("message")} id="message" rows="5"></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;