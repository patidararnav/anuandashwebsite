import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../styles/Container';
import Button from '../styles/Button';

// Album image for background
import albumImage from '../assets/landings/landing5.jpg';
// Song images
import eddiesAtticImage from '../assets/songs/eddiesattic.jpg';
import coversImage from '../assets/songs/covers.jpg';

// Create a wrapper with the background image
const PageWrapper = styled.div`
  min-height: 100vh;
  background: url(${albumImage}) center 20% / cover no-repeat fixed;
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

const StreamingPlatforms = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
`;

const PlatformLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  background-color: var(--white);
  border-radius: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  i {
    font-size: 1.5rem;
  }
`;

const SongsSection = styled.section`
  margin: var(--spacing-xl) 0;
`;

const SongsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-xl);
`;

const SongCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
`;

const SongImage = styled.div`
  aspect-ratio: 1;
  width: 100%;
  overflow: hidden;
  background: ${props => props.coverImage ? `url(${props.coverImage})` : 'rgba(255, 255, 255, 0.1)'} center / cover no-repeat;
  background-color: #111;
  position: relative;
  transition: all 0.3s ease;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
    transition: opacity 0.3s ease;
  }
  
  ${SongCard}:hover & {
    transform: scale(1.02);
  }
`;

const SongInfo = styled.div`
  padding: var(--spacing-md);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const SongTitle = styled.h3`
  margin-bottom: var(--spacing-xs);
  color: var(--white);
`;

const SongType = styled.div`
  font-size: var(--fs-sm);
  opacity: 0.8;
  margin-bottom: var(--spacing-md);
  color: var(--secondary);
`;

const SongDescription = styled.p`
  font-size: var(--fs-sm);
  margin-bottom: var(--spacing-md);
  color: var(--white);
  opacity: 0.9;
  flex-grow: 1;
`;

const SongLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-top: auto;
`;

const SongLink = styled.a`
  font-size: 1.2rem;
  color: var(--white);
  opacity: 0.7;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  text-decoration: none;
  
  &:hover {
    opacity: 1;
    color: var(--secondary);
  }
  
  i {
    margin-right: 8px;
  }
`;

const SpotifyButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  background-color: var(--white);
  color: #1DB954;
  border-radius: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: var(--spacing-xs);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  i {
    margin-right: 8px;
    font-size: 1.2rem;
  }
`;

const EmbedSection = styled.section`
  margin: var(--spacing-xxl) 0;
  
  h2 {
    text-align: center;
    margin-bottom: var(--spacing-xl);
    color: var(--white);
  }
`;

const Listen = () => {
  // Song data
  const songs = [
    {
      id: 1,
      title: "Summer Song",
      type: "Original",
      description: "[Description Here]",
      spotify: "https://open.spotify.com/track/1AGK4t0zQ0MaJvkxCgqaYq?si=bff9eb78a34242a0"
    },
    {
      id: 2,
      title: "Between the Two of Us",
      type: "Original",
      description: "[Description Here]",
      spotify: "https://open.spotify.com/track/3tkZLjc0QFUzOct78ifMcG?si=a728bbae50764c1b"
    },
    {
      id: 3,
      title: "All I Feel is You",
      type: "Original",
      description: "[Description Here]",
      spotify: "https://open.spotify.com/track/4DqLcQBfUxxC1guaVezRB1?si=f84404d6abbe4a1b"
    },
    {
      id: 4,
      title: "Family Cotton",
      type: "Original",
      description: "[Description Here]",
      spotify: "https://open.spotify.com/track/00R6vO8xZ9SrmXBVC1wrHr?si=d6af3c3ad3954b37"
    },
    {
      id: 5,
      title: "Vellai Pookal - A Melody in Hamsadhwani",
      type: "Cover",
      description: "[Description Here]",
      spotify: "https://open.spotify.com/track/2JjDQImh8oZPSgUCqhEhPs?si=f3b99601adca4331"
    },
    {
      id: 6,
      title: "The Prayer",
      type: "Cover",
      description: "[Description Here]",
      spotify: "https://open.spotify.com/track/2kxv6hjfHUXYGxq0eLQtpB?si=bf9239d41cad4832"
    }
  ];

  // Function to determine which image to use based on song type
  const getSongImage = (songType) => {
    return songType === "Cover" ? coversImage : eddiesAtticImage;
  };

  return (
    <PageWrapper>
      <Container>
        <PageHeader>
          <h1>Listen to Our Music</h1>
          <p>Experience the sound of Anu & Ash through our original songs and covers</p>
        </PageHeader>
        
        <StreamingPlatforms>
          <PlatformLink 
            href="https://open.spotify.com/artist/2noTeVrjCU2I1J882nL2vj" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-spotify" style={{ color: '#1DB954' }}></i>
            <span>Spotify</span>
          </PlatformLink>
          
          <PlatformLink 
            href="https://music.apple.com/us/artist/anu-ash/1784887272" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-apple" style={{ color: '#fc3c44' }}></i>
            <span>Apple Music</span>
          </PlatformLink>
          
          <PlatformLink 
            href="https://www.youtube.com/@anuandash" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube" style={{ color: '#FF0000' }}></i>
            <span>YouTube</span>
          </PlatformLink>
        </StreamingPlatforms>

        <SongsSection>
          <h2 style={{ color: 'var(--white)', marginBottom: 'var(--spacing-md)' }}>Featured Songs</h2>
          
          <SongsGrid>
            {songs.map(song => (
              <SongCard
                key={song.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <SongImage coverImage={getSongImage(song.type)}>
                  {/* No need for the placeholder text with actual images */}
                </SongImage>
                <SongInfo>
                  <SongTitle>{song.title}</SongTitle>
                  <SongType>{song.type}</SongType>
                  <SongDescription>{song.description}</SongDescription>
                  <SongLinks>
                    {song.spotify && (
                      <SpotifyButton href={song.spotify} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-spotify"></i>
                        Listen on Spotify
                      </SpotifyButton>
                    )}
                  </SongLinks>
                </SongInfo>
              </SongCard>
            ))}
          </SongsGrid>
        </SongsSection>

      </Container>
    </PageWrapper>
  );
};

export default Listen;

 