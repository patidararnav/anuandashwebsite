import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../styles/Container';
import { useState, useEffect } from 'react';

// Images
import bioImage from '../assets/landings/landing3.jpg';

// Dynamic style override for navigation on About page
const AboutPageStyle = createGlobalStyle`
  header, nav {
    background-color: ${props => props.isScrolled ? 'var(--primary)' : 'white'} !important;
    color: ${props => props.isScrolled ? 'var(--white)' : 'var(--text)'} !important;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  header a, nav a {
    color: ${props => props.isScrolled ? 'var(--white)' : 'var(--text)'} !important;
    transition: color 0.3s ease;
  }
`;

// Create a wrapper with a solid color background
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #151c2c 0%, #1f2b45 100%);
  position: relative;
  
  /* Only apply these styles to direct children within the Container */
  & > div > * {
    position: relative;
    color: var(--white);
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  padding: 120px 0 80px;
  position: relative;
  
  h1 {
    margin-bottom: var(--spacing-sm);
    font-size: 3.5rem;
    position: relative;
    display: inline-block;
    color: var(--white);
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    
    &:after {
      content: '';
      position: absolute;
      width: 80px;
      height: 3px;
      background-color: #d4af37; /* Gold accent */
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  p {
    font-size: 1.3rem;
    opacity: 0.9;
    color: #e0e0e0;
  }
`;

const SectionTitle = styled.h2`
  position: relative;
  margin-bottom: var(--spacing-xl);
  display: inline-block;
  color: var(--white);
  font-size: 2.2rem;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: #d4af37; /* Gold accent */
    bottom: -10px;
    left: 0;
  }
`;

const AboutSection = styled.section`
  margin: var(--spacing-xl) 0;
  padding: var(--spacing-xl) 0;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 8px;
  }
`;

const BioContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xxl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BioContent = styled.div`
  p {
    margin-bottom: var(--spacing-md);
    line-height: 1.8;
    font-size: 1.1rem;
    color: #e0e0e0;
  }
  
  @media (max-width: 768px) {
    order: 2;
  }
`;

const BioImage = styled.div`
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
  background: url(${bioImage}) center 20% / cover no-repeat;
  position: relative;
  transform: perspective(1000px) rotateY(-5deg);
  transition: all 0.7s ease;
  border: 1px solid rgba(212, 175, 55, 0.2); /* Subtle gold border */
  
  &:hover {
    transform: perspective(1000px) rotateY(0deg) translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
  }
  
  @media (max-width: 768px) {
    height: 400px;
    order: 1;
  }
`;

const ArtistsSection = styled.section`
  margin: var(--spacing-xxl) 0;
  padding: var(--spacing-xl) 0;
  background: linear-gradient(to bottom, rgba(31, 43, 69, 0.5), rgba(21, 28, 44, 0.5));
  border-radius: 16px;
  
  h2 {
    text-align: center;
    margin-bottom: var(--spacing-xl);
    position: relative;
    color: var(--white);
    font-size: 2.2rem;
    
    &:after {
      content: '';
      position: absolute;
      width: 80px;
      height: 3px;
      background-color: #d4af37; /* Gold accent */
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const ArtistCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  margin-bottom: var(--spacing-xxl);
  padding: var(--spacing-xl);
  background: rgba(15, 20, 35, 0.5);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(212, 175, 55, 0.1); /* Subtle gold border */
  backdrop-filter: blur(10px);
  
  &:nth-child(even) {
    direction: rtl;
    background: rgba(15, 20, 35, 0.6);
    
    > div {
      direction: ltr;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    direction: ltr !important;
  }
`;

const ArtistContent = styled.div`
  h3 {
    margin-bottom: var(--spacing-sm);
    color: #d4af37; /* Gold accent */
    font-size: 1.8rem;
  }
  
  p {
    margin-bottom: var(--spacing-md);
    line-height: 1.8;
    font-size: 1.1rem;
    color: #e0e0e0;
  }
`;

const ArtistImage = styled(motion.div)`
  height: 450px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  background: url(${bioImage}) center / cover no-repeat;
  position: relative;
  border: 1px solid rgba(212, 175, 55, 0.2); /* Subtle gold border */
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
  }
  
  @media (max-width: 768px) {
    height: 400px;
    margin-bottom: var(--spacing-md);
  }
`;

const StorySection = styled.section`
  margin: var(--spacing-xxl) 0;
  text-align: center;
  padding: var(--spacing-xxl) var(--spacing-xl);
  background: linear-gradient(135deg, rgba(15, 20, 35, 0.7) 0%, rgba(31, 43, 69, 0.7) 100%);
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(212, 175, 55, 0.1); /* Subtle gold border */
  
  h2 {
    margin-bottom: var(--spacing-lg);
    position: relative;
    display: inline-block;
    color: var(--white);
    font-size: 2.2rem;
    
    &:after {
      content: '';
      position: absolute;
      width: 80px;
      height: 3px;
      background-color: #d4af37; /* Gold accent */
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  p {
    max-width: 800px;
    margin: 0 auto var(--spacing-md);
    line-height: 1.8;
    font-size: 1.1rem;
    color: #e0e0e0;
  }
`;

const TimelineSection = styled.section`
  margin: var(--spacing-xxl) 0;
  padding: var(--spacing-xxl) var(--spacing-xl);
  
  h2 {
    text-align: center;
    margin-bottom: var(--spacing-xxl);
    position: relative;
    color: var(--white);
    font-size: 2.2rem;
    
    &:after {
      content: '';
      position: absolute;
      width: 80px;
      height: 3px;
      background-color: #d4af37; /* Gold accent */
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    background: #d4af37; /* Gold timeline */
    transform: translateX(-50%);
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
  }
  
  @media (max-width: 768px) {
    &:before {
      left: 30px;
    }
  }
`;

const TimelineEvent = styled(motion.div)`
  position: relative;
  width: 45%;
  margin-bottom: var(--spacing-xl);
  
  &:nth-child(odd) {
    margin-left: auto;
    
    &:before {
      left: -12px;
    }
  }
  
  &:nth-child(even) {
    &:before {
      right: -12px;
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #d4af37; /* Gold accent */
    z-index: 1;
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.8);
  }
  
  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin-left: 60px !important;
    
    &:before {
      left: -40px !important;
      right: auto !important;
    }
  }
`;

const TimelineContent = styled.div`
  padding: var(--spacing-lg);
  background: rgba(15, 20, 35, 0.7);
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  }
`;

const TimelineYear = styled.div`
  font-weight: 700;
  color: #d4af37; /* Gold accent */
  margin-bottom: var(--spacing-xs);
  font-size: 1.3rem;
`;

const TimelineTitle = styled.h3`
  margin-bottom: var(--spacing-xs);
  color: var(--white);
  font-size: 1.5rem;
`;

const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <PageWrapper>
      <AboutPageStyle isScrolled={isScrolled} />
      <Container>
        <PageHeader>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The story of Anu & Ash
          </motion.p>
        </PageHeader>
        
        <AboutSection>
          <BioContainer>
            <BioContent>
              <SectionTitle>Our Story</SectionTitle>
              <p>
                Anu & Ash is a musical duo that brings together diverse influences to create a unique sound that resonates with audiences worldwide.
              </p>
              <p>
                With their powerful vocals and masterful instrumentation, they create an unforgettable experience that touches the soul.
              </p>
            </BioContent>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <BioImage />
            </motion.div>
          </BioContainer>
        </AboutSection>
        
        <ArtistsSection>
          <h2>Meet the Artists</h2>
          
          <ArtistCard>
            <ArtistImage
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <ArtistContent>
              <h3>Anu</h3>
              <p>
                Anu bio here
              </p>
            </ArtistContent>
          </ArtistCard>
          
          <ArtistCard>
            <ArtistImage
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <ArtistContent>
              <h3>Ashwin</h3>
              <p>
                Ashwin bio here
              </p>
            </ArtistContent>
          </ArtistCard>
        </ArtistsSection>
        
        <StorySection>
          <h2>Our Story</h2>
          <p>
            Paragraph 1
          </p>
          <p>
            Paragraph 2
          </p>
          <p>
            Paragraph 3
          </p>
        </StorySection>
        
        <TimelineSection>
          <h2>Musical Milestones</h2>
          
          <Timeline>
            <TimelineEvent
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineYear>2019</TimelineYear>
                <TimelineTitle>First Meeting</TimelineTitle>
                <p>Anu and Ashwin meet</p>
              </TimelineContent>
            </TimelineEvent>
            
            <TimelineEvent
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineYear>2020</TimelineYear>
                <TimelineTitle>Official Duo Formation</TimelineTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </TimelineContent>
            </TimelineEvent>
            
            <TimelineEvent
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineYear>2021</TimelineYear>
                <TimelineTitle>First Release?</TimelineTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </TimelineContent>
            </TimelineEvent>
            
            <TimelineEvent
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineYear>2023</TimelineYear>
                <TimelineTitle>Wedding</TimelineTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </TimelineContent>
            </TimelineEvent>
            
            <TimelineEvent
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineYear>2023</TimelineYear>
                <TimelineTitle>Milestone</TimelineTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </TimelineContent>
            </TimelineEvent>
            
            <TimelineEvent
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineYear>2024</TimelineYear>
                <TimelineTitle>Album</TimelineTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </TimelineContent>
            </TimelineEvent>
          </Timeline>
        </TimelineSection>
      </Container>
    </PageWrapper>
  );
};

export default About; 