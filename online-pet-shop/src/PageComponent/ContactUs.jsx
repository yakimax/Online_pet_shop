import React from 'react';
import { FaEnvelope, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { InputGroup, FormControl } from 'react-bootstrap';
import Footer from '../NavbarComponent/Footer';
const ContactUs = () => {
  return (
    <div className="text-color ms-5 me-5 mr-5 mt-3">
      <h4 className="mb-3">Contact Us</h4>
      <b>
        We value your feedback, questions, and inquiries. Whether you need
        assistance with an order, have a suggestion, or simply want to connect,
        our team is here to help. Feel free to reach out through the provided
        contact form, email, or phone number, and we'll respond promptly to
        ensure your experience with us is nothing short of exceptional. Your
        satisfaction is our priority, and we look forward to hearing from you.
      </b>

      {/* Contact Details */}
      <div className="contact-details">
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FaEnvelope />
          </InputGroup.Text>
          <FormControl placeholder="petshop@xyz.com" readOnly />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FaPhone />
          </InputGroup.Text>
          <FormControl placeholder="+123 456 7890" readOnly />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FaPhoneAlt />
          </InputGroup.Text>
          <FormControl placeholder="1-800-123-4567" readOnly />
        </InputGroup>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;