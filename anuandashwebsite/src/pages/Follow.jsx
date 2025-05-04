import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../styles/Container';
import Button from '../styles/Button';

// Import the same icon images as the footer
import instagramIcon from '../assets/icons/instagram.png';
import itunesIcon from '../assets/icons/itunes.png';
import linkIcon from '../assets/icons/link.png';
import spotifyIcon from '../assets/icons/spotify.png';
import youtubeIcon from '../assets/icons/youtube.png';

// Image for background
import videoImage from '../assets/landings/landing4.jpg';

// Create a wrapper with the background image
const PageWrapper = styled.div`
  min-height: 100vh;
  background: url(${videoImage}) center 20% / cover no-repeat fixed;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
    z-index: 1;
  }
  
  & > * {
    position: relative;
    z-index: 2;
    color: var(--white);
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  padding-top: 100px;
  
  h1 {
    margin-bottom: var(--spacing-sm);
  }
`;

const PlatformsSection = styled.section`
  margin: var(--spacing-xl) 0 var(--spacing-xxl);
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 3px;
    background-color: var(--secondary);
  }
`;

const PlatformsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
`;

const PlatformCard = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-xl);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  color: var(--white);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    color: var(--white);
    border-color: var(--secondary);
  }
`;

const PlatformIcon = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  
  img {
    width: 35px;
    height: 35px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }
  
  ${PlatformCard}:hover & {
    background-color: var(--secondary);
  }
`;

const PlatformTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
`;

const PlatformDescription = styled.p`
  margin-bottom: var(--spacing-md);
  opacity: 0.9;
  line-height: 1.6;
  flex-grow: 1;
`;

const VideoSection = styled.section`
  margin: var(--spacing-xxl) 0;
`;

const VideoWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
`;

const VideoEmbed = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const VideoDescription = styled.div`
  text-align: center;
  max-width: 700px;
  margin: var(--spacing-xl) auto 0;
  
  h3 {
    margin-bottom: var(--spacing-sm);
    font-size: 1.5rem;
  }
  
  p {
    opacity: 0.9;
    line-height: 1.6;
  }
`;

const ConnectCTA = styled.div`
  text-align: center;
  margin: var(--spacing-xxl) 0;
  padding: var(--spacing-xl);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  backdrop-filter: blur(5px);
  
  h2 {
    margin-bottom: var(--spacing-md);
  }
  
  p {
    max-width: 600px;
    margin: 0 auto var(--spacing-lg);
    opacity: 0.9;
    line-height: 1.6;
  }
`;

const Follow = () => {
  return (
    <PageWrapper>
      <Container>
        <PageHeader>
          <h1>Follow Us</h1>
          <p>Connect with Anu & Ash across all platforms</p>
        </PageHeader>
        
        <PlatformsSection>
          <SectionTitle>Find Us On</SectionTitle>
          
          <PlatformsGrid>
            <PlatformCard 
              href="https://instagram.com/anuandash" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <PlatformIcon>
                <img src={instagramIcon} alt="Instagram" />
              </PlatformIcon>
              <PlatformTitle>Instagram</PlatformTitle>
              <PlatformDescription>
                Follow our journey on Instagram for behind-the-scenes content, show announcements, and glimpses into our creative process.
              </PlatformDescription>
              <Button small>@anuandash</Button>
            </PlatformCard>
            
            <PlatformCard 
              href="https://www.youtube.com/channel/UCcBuySXj-zaZsFkPJMIxhig" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <PlatformIcon>
                <img src={youtubeIcon} alt="YouTube" />
              </PlatformIcon>
              <PlatformTitle>YouTube</PlatformTitle>
              <PlatformDescription>
                Watch our performances, music videos, and live sessions. Subscribe to our channel for all our latest video content.
              </PlatformDescription>
              <Button small>Subscribe</Button>
            </PlatformCard>
            
            <PlatformCard 
              href="https://open.spotify.com/artist/2noTeVrjCU2I1J882nL2vj" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <PlatformIcon>
                <img src={spotifyIcon} alt="Spotify" />
              </PlatformIcon>
              <PlatformTitle>Spotify</PlatformTitle>
              <PlatformDescription>
                Stream our music, add us to your playlists, and never miss a new release. Follow us on Spotify to stay updated.
              </PlatformDescription>
              <Button small>Stream</Button>
            </PlatformCard>
            
            <PlatformCard 
              href="https://music.apple.com/us/artist/anu-ash/1784887272" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <PlatformIcon>
                <img src={itunesIcon} alt="Apple Music" />
              </PlatformIcon>
              <PlatformTitle>Apple Music</PlatformTitle>
              <PlatformDescription>
                Listen to our full discography on Apple Music and add our songs to your library and playlists.
              </PlatformDescription>
              <Button small>Listen</Button>
            </PlatformCard>
            
            <PlatformCard 
              href="https://artists.landr.com/anuash" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <PlatformIcon>
                <img src={linkIcon} alt="LANDR" />
              </PlatformIcon>
              <PlatformTitle>LANDR</PlatformTitle>
              <PlatformDescription>
                Access our artist page on LANDR to discover our complete profile and explore more of our music.
              </PlatformDescription>
              <Button small>Visit</Button>
            </PlatformCard>
          </PlatformsGrid>
        </PlatformsSection>
        

        
        <ConnectCTA>
          <h2>Stay Connected</h2>
          <p>Join our musical journey and be the first to hear about new releases, upcoming shows, and exclusive content by following us on social media.</p>
          <Button 
            as="a" 
            href="mailto:info@anuandash.com" 
            large
          >
            Contact Us
          </Button>
        </ConnectCTA>
      </Container>
    </PageWrapper>
  );
};

export default Follow; 