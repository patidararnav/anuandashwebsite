import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../styles/Container';
import Button from '../styles/Button';
import heroImage from '../assets/landings/landing2.jpg';
import showImage from '../assets/landings/landing4.jpg';

// Update HeroSection to use the imported image correctly
const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0;
  overflow: hidden;
  background: url(${heroImage}) 30% 20% / cover no-repeat;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: var(--white);
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  margin-bottom: var(--spacing-md);
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
`;

const IntroSection = styled.section`
  text-align: center;
`;

const IntroHeading = styled.h2`
  margin-bottom: var(--spacing-lg);
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
`;

const IntroCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-lg);
  border-radius: 8px;
  background-color: var(--white);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const IntroIcon = styled.div`
  font-size: 2.5rem;
  color: var(--secondary);
  margin-bottom: var(--spacing-sm);
`;

const IntroCardTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
`;

const LatestShowSection = styled.section`
  background-color: var(--primary);
  color: var(--white);
`;

const LatestShowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LatestShowContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const LatestShowImage = styled.div`
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  background: url(${showImage}) 30% 20% / cover no-repeat;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  }
`;

const EventInfo = styled.div`
  margin: var(--spacing-md) 0;
`;

const EventDate = styled.div`
  font-size: var(--fs-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
`;

const EventLocation = styled.div`
  font-size: var(--fs-md);
  opacity: 0.9;
`;

const CtaSection = styled.section`
  text-align: center;
  background-color: var(--background);
  padding: var(--spacing-xl) 0;
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HeroTitle>Anu & Ash</HeroTitle>
              <HeroSubtitle>
                A musical duo creating beautiful melodies and powerful performances that will move your soul.
              </HeroSubtitle>
              <HeroButtons>
                <Button as={Link} to="/listen" large>
                  Listen Now
                </Button>
                <Button as={Link} to="/shows" outline large>
                  Upcoming Shows
                </Button>
              </HeroButtons>
            </motion.div>
          </HeroContent>
        </Container>
      </HeroSection>

      <IntroSection>
        <Container>
          <IntroHeading>Experience Our Music</IntroHeading>
          <p>
            Anu & Ash blend soulful vocals with masterful instrumentation to create a unique musical experience.
          </p>
          
          <IntroGrid>
            <IntroCard
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <IntroIcon>🎵</IntroIcon>
              <IntroCardTitle>Listen</IntroCardTitle>
              <p>Stream our music on all major platforms and discover our unique sound.</p>
              <Button as={Link} to="/listen" small style={{ marginTop: 'auto' }}>
                Stream Now
              </Button>
            </IntroCard>
            
            <IntroCard
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <IntroIcon>🎤</IntroIcon>
              <IntroCardTitle>Live Shows</IntroCardTitle>
              <p>Experience the energy and emotion of our live performances.</p>
              <Button as={Link} to="/shows" small style={{ marginTop: 'auto' }}>
                See Dates
              </Button>
            </IntroCard>
            
            <IntroCard
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <IntroIcon>📱</IntroIcon>
              <IntroCardTitle>Connect</IntroCardTitle>
              <p>Follow us on social media and stay updated with our latest news.</p>
              <Button as={Link} to="/follow" small style={{ marginTop: 'auto' }}>
                Follow Us
              </Button>
            </IntroCard>
          </IntroGrid>
        </Container>
      </IntroSection>

      <LatestShowSection>
        <Container>
          <LatestShowGrid>
            <LatestShowContent>
              <h2>Our Next Performance</h2>
              <p>Don't miss our upcoming show! Join us for an unforgettable night of music and connection.</p>
              
              <EventInfo>
                <EventDate>August 8, 2025 at 8:00 PM</EventDate>
                <EventLocation>Eddie Owen Presents - Red Clay Music Foundry</EventLocation>
              </EventInfo>
              
              <Button 
                as="a" 
                href="https://eddieowenpresents.freshtix.com/events/anuandash" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Tickets
              </Button>
            </LatestShowContent>
            
            <LatestShowImage />
          </LatestShowGrid>
        </Container>
      </LatestShowSection>

      <CtaSection>
        <Container>
          <h2>Join Our Journey</h2>
          <p>Be part of our musical journey and stay updated with the latest news, releases, and shows.</p>
          <Button as={Link} to="/follow" style={{ margin: '2rem auto' }}>
            Connect With Us
          </Button>
        </Container>
      </CtaSection>
    </>
  );
};

export default Home; 