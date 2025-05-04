import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../styles/Container';
import Button from '../styles/Button';

// Album image for background
import albumImage from '../assets/landings/landing5.jpg';
// Album cover images
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

const AlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AlbumCard = styled(motion.div)`
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

const AlbumImage = styled.div`
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
  
  ${AlbumCard}:hover & {
    transform: scale(1.02);
  }
`;

const AlbumInfo = styled.div`
  padding: var(--spacing-md);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const AlbumTitle = styled.h3`
  margin-bottom: var(--spacing-xs);
  color: var(--white);
  font-size: 1.5rem;
`;

const AlbumType = styled.div`
  font-size: var(--fs-sm);
  opacity: 0.8;
  margin-bottom: var(--spacing-md);
  color: var(--secondary);
`;

const AlbumDescription = styled.p`
  font-size: var(--fs-sm);
  margin-bottom: var(--spacing-md);
  color: var(--white);
  opacity: 0.9;
  flex-grow: 1;
`;

const AlbumTrackCount = styled.div`
  font-size: var(--fs-sm);
  margin-bottom: var(--spacing-md);
  color: var(--white);
  opacity: 0.7;
`;

const AlbumLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: auto;
`;

const PlatformButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  background-color: var(--white);
  color: ${props => props.color || '#000'};
  border-radius: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  flex: 1;
  min-width: 120px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  i {
    margin-right: 8px;
    font-size: 1.2rem;
  }
`;

const Listen = () => {
  // Album data
  const albums = [
    {
      id: 1,
      title: "Anu & Ash at Eddie's Attic (Live)",
      type: "Album",
      description: "Our debut live album features original songs performed at the iconic Eddie's Attic venue in Atlanta. Experience the energy and emotion of our live performance through these heartfelt originals.",
      trackCount: 7,
      coverImage: eddiesAtticImage,
      spotify: "https://open.spotify.com/album/39gQdVgmqSOhtkskKG3iLR"
    },
    {
      id: 2,
      title: "Covers by Anu & Ash at Eddie's Attic (Live)",
      type: "EP",
      description: "Our cover EP showcases our unique interpretations of beloved songs, all performed live at Eddie's Attic.",
      trackCount: 5,
      coverImage: coversImage,
      spotify: "https://open.spotify.com/album/2hEw69hjqykn9n4FNETv0J"
    }
  ];

  return (
    <PageWrapper>
      <Container>
        <PageHeader>
          <h1>Listen to Our Music</h1>
          <p>Experience the sound of Anu & Ash through our albums and EPs</p>
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
            href="https://music.youtube.com/channel/UCM6ClyrCSXfB_DrtFevJOaQ" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube" style={{ color: '#FF0000' }}></i>
            <span>YouTube</span>
          </PlatformLink>
        </StreamingPlatforms>

        <SongsSection>
          <h2 style={{ color: 'var(--white)', marginBottom: 'var(--spacing-md)' }}>Featured Works</h2>
          
          <AlbumsGrid>
            {albums.map(album => (
              <AlbumCard
                key={album.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <AlbumImage coverImage={album.coverImage} />
                <AlbumInfo>
                  <AlbumTitle>{album.title}</AlbumTitle>
                  <AlbumType>{album.type}</AlbumType>
                  <AlbumDescription>{album.description}</AlbumDescription>
                  <AlbumTrackCount>{album.trackCount} tracks</AlbumTrackCount>
                  <AlbumLinks>
                    {album.spotify && (
                      <PlatformButton href={album.spotify} target="_blank" rel="noopener noreferrer" color="#1DB954" style={{ width: '100%' }}>
                        <i className="fab fa-spotify"></i>
                        Listen on Spotify
                      </PlatformButton>
                    )}
                  </AlbumLinks>
                </AlbumInfo>
              </AlbumCard>
            ))}
          </AlbumsGrid>
        </SongsSection>

      </Container>
    </PageWrapper>
  );
};

export default Listen;

 