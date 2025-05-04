import { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../styles/Container';
import Button from '../styles/Button';
import emailjs from '@emailjs/browser';

// Import custom icons
import emailIcon from '../assets/icons/email.png';
import locationIcon from '../assets/icons/location.png';
import bookingIcon from '../assets/icons/booking.png';

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  padding-top: 100px;
  
  h1 {
    margin-bottom: var(--spacing-sm);
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const ContactInfo = styled.div`
  h2 {
    margin-bottom: var(--spacing-md);
  }
  
  p {
    margin-bottom: var(--spacing-md);
  }
`;

const ContactOptions = styled.div`
  margin-top: var(--spacing-lg);
`;

const ContactOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--spacing-md);
  
  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    filter: brightness(0) invert(1); /* Convert icons to white */
  }
`;

const ContactText = styled.div`
  h4 {
    margin-bottom: var(--spacing-xs);
  }
  
  a {
    color: var(--text);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--secondary);
    }
  }
`;

const ContactForm = styled.form`
  background-color: var(--white);
  padding: var(--spacing-lg);
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormTitle = styled.h3`
  margin-bottom: var(--spacing-md);
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-md);
`;

const Label = styled.label`
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: var(--fs-md);
  transition: border-color 0.3s ease;
  background-color: white;
  color: var(--text);
  
  &:focus {
    outline: none;
    border-color: var(--secondary);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: var(--fs-md);
  resize: vertical;
  min-height: 150px;
  font-family: inherit;
  transition: border-color 0.3s ease;
  background-color: white;
  color: var(--text);
  
  &:focus {
    outline: none;
    border-color: var(--secondary);
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xs);
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
`;

const RadioInput = styled.input`
  cursor: pointer;
`;

const RadioLabel = styled.label`
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: var(--spacing-lg);
  background-color: #e6f7e8;
  border-radius: 8px;
  margin-top: var(--spacing-md);
  
  h3 {
    margin-bottom: var(--spacing-sm);
    color: #2e7d32;
  }
`;

const ErrorMessage = styled(motion.div)`
  text-align: center;
  padding: var(--spacing-lg);
  background-color: #fee8e8;
  border-radius: 8px;
  margin-top: var(--spacing-md);
  
  h3 {
    margin-bottom: var(--spacing-sm);
    color: #d32f2f;
  }
`;

const LoadingOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  z-index: 10;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  });
  
  const form = useRef();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitted: false, loading: true, error: null });
    
    // EmailJS service configuration
    // You need to replace these with your actual EmailJS credentials
    const serviceId = 'default_service'; // Replace with your EmailJS service ID
    const templateId = 'template_contact_form'; // Replace with your EmailJS template ID
    const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStatus({ submitted: true, loading: false, error: null });
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setStatus({ submitted: false, loading: false, error: error.text });
      });
  };
  
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setStatus({ submitted: false, loading: false, error: null });
  };
  
  return (
    <Container>
      <PageHeader>
        <h1>Contact Us</h1>
        <p>Get in touch with Anu & Ash for bookings, collaborations, or just to say hello!</p>
      </PageHeader>
      
      <ContactGrid>
        <ContactInfo>
          <h2>Let's Connect</h2>
          <p>
            We'd love to hear from you! Whether you're interested in booking us for a show,
            collaborating on a project, or just want to share your thoughts about our music,
            we're here to listen.
          </p>
          <p>
            Fill out the form and we'll get back to you as soon as possible. You can also
            reach out to us directly using the contact information below.
          </p>
          
          <ContactOptions>
            <ContactOption>
              <ContactIcon>
                <img src={emailIcon} alt="Email" />
              </ContactIcon>
              <ContactText>
                <h4>Email</h4>
                <a href="mailto:anuandash.music@gmail.com">anuandash.music@gmail.com</a>
              </ContactText>
            </ContactOption>
            
            <ContactOption>
              <ContactIcon>
                <img src={locationIcon} alt="Location" />
              </ContactIcon>
              <ContactText>
                <h4>Location</h4>
                <p>Atlanta, GA</p>
              </ContactText>
            </ContactOption>
            
            <ContactOption>
              <ContactIcon>
                <img src={bookingIcon} alt="Bookings" />
              </ContactIcon>
              <ContactText>
                <h4>Bookings</h4>
                <p>Contact us directly for booking inquiries</p>
              </ContactText>
            </ContactOption>
          </ContactOptions>
        </ContactInfo>
        
        <div>
          {status.submitted ? (
            <SuccessMessage
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
              <Button 
                onClick={resetForm} 
                style={{ marginTop: '1rem' }}
              >
                Send Another Message
              </Button>
            </SuccessMessage>
          ) : status.error ? (
            <ErrorMessage
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>Oops! Something went wrong</h3>
              <p>We couldn't send your message. Please try again or email us directly.</p>
              <Button 
                onClick={resetForm} 
                style={{ marginTop: '1rem' }}
              >
                Try Again
              </Button>
            </ErrorMessage>
          ) : (
            <div style={{ position: 'relative' }}>
              {status.loading && (
                <LoadingOverlay
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p>Sending message...</p>
                </LoadingOverlay>
              )}
              
              <ContactForm ref={form} onSubmit={handleSubmit}>
                <FormTitle>Send Us a Message</FormTitle>
                
                <FormGroup>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="message">Your Message *</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                {/* Hidden field for recipient email */}
                <input type="hidden" name="to_email" value="anuandash.music@gmail.com" />
                
                <SubmitButton type="submit" disabled={status.loading}>
                  {status.loading ? 'Sending...' : 'Send Message'}
                </SubmitButton>
              </ContactForm>
            </div>
          )}
        </div>
      </ContactGrid>
    </Container>
  );
};

export default Contact; 