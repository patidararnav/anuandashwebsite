import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../styles/Container';
import Button from '../styles/Button';

// Background image
import epkBgImage from '../assets/landings/landing2.jpg';

// Professional promo images
import landing1 from '../assets/landings/landing1.jpg';
import landing2 from '../assets/landings/landing2.jpg';
import landing3 from '../assets/landings/landing3.jpg';
import landing4 from '../assets/landings/landing4.jpg';
import landing5 from '../assets/landings/landing5.jpg';

// Red Clay live performance images
import redClay1 from '../assets/RedClay8-8-25/176dd1ed-6605-42e7-9383-e79130aa63b8.jpg';
import redClay2 from '../assets/RedClay8-8-25/6a0fb773-1c59-4295-8fc8-c83a215a5d03.jpg';
import redClay3 from '../assets/RedClay8-8-25/IMG_0673.jpeg';
import redClay4 from '../assets/RedClay8-8-25/IMG_0674.jpeg';
import redClay5 from '../assets/RedClay8-8-25/IMG_0677.jpeg';
import redClay6 from '../assets/RedClay8-8-25/IMG_5372.jpeg';
import redClay7 from '../assets/RedClay8-8-25/IMG_5373.jpeg';
import redClay8 from '../assets/RedClay8-8-25/IMG_7323.jpeg';
import redClay9 from '../assets/RedClay8-8-25/IMG_8064.jpeg';
import redClay10 from '../assets/RedClay8-8-25/RenderedImage.jpeg';

// Behind-the-scenes images
import bts1 from '../assets/BTS/246ca65c-b2b0-420f-a3e2-f1d71c9f2540.jpg';
import bts2 from '../assets/BTS/5FB6CB42-E83E-400C-A05D-70D2088C1DAA.jpeg';
import bts3 from '../assets/BTS/73098426-9671-425b-a343-d1377d21729b.jpg';
import bts4 from '../assets/BTS/af1b5bf6-004d-44af-96ae-c3300c65e0b8.jpg';
import bts5 from '../assets/BTS/IMG_0342.jpeg';
import bts6 from '../assets/BTS/IMG_0357.jpeg';
import bts7 from '../assets/BTS/IMG_2355.JPG';
import bts8 from '../assets/BTS/IMG_2359.JPG';
import bts9 from '../assets/BTS/IMG_4484.jpeg';
import bts10 from '../assets/BTS/IMG_4493.jpeg';
import bts11 from '../assets/BTS/IMG_4494.jpeg';
import bts12 from '../assets/BTS/IMG_7333.jpeg';
import bts13 from '../assets/BTS/IMG_8003.jpeg';
import bts14 from '../assets/BTS/IMG_8468.jpeg';
import bts15 from '../assets/BTS/RenderedImage.jpeg';

// EPK specific styled components
const PageWrapper = styled.div`
  min-height: 100vh;
  background: url(${epkBgImage}) center 15% / cover no-repeat fixed;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9));
    z-index: 1;
  }
  
  & > * {
    position: relative;
    z-index: 2;
    color: var(--white);
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 120px 0 60px 0;
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: var(--spacing-md);
    font-weight: 700;
    background: linear-gradient(135deg, var(--white) 0%, var(--secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  .subheadline {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-xl);
    color: var(--secondary);
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  margin-top: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.section`
  margin: var(--spacing-xl) 0;
  padding: var(--spacing-xl) 0;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: var(--spacing-lg);
    text-align: center;
    color: var(--white);
  }
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: var(--spacing-md);
    color: var(--secondary);
  }
`;

const BioSection = styled(Section)`
  .bio-text {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: var(--spacing-lg);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  
  .full-bio {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: var(--spacing-xl);
    border-radius: 12px;
    margin-top: var(--spacing-xl);
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    h4 {
      color: var(--secondary);
      margin-bottom: var(--spacing-md);
      font-size: 1.3rem;
    }
    
    p {
      margin-bottom: var(--spacing-md);
      line-height: 1.7;
    }
  }
`;

const MusicSection = styled(Section)`
  .streaming-platforms {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
  }
  
  .platform-embed {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: var(--spacing-lg);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-align: center;
    
    h4 {
      color: var(--secondary);
      margin-bottom: var(--spacing-md);
    }
  }
  
  .releases-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
  }
  
  .release-item {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: var(--spacing-md);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    .release-title {
      font-weight: 600;
      margin-bottom: var(--spacing-xs);
      color: var(--white);
    }
    
    .release-date {
      color: var(--secondary);
      font-size: 0.9rem;
      margin-bottom: var(--spacing-sm);
    }
    
    .streaming-links {
      display: flex;
      gap: var(--spacing-sm);
      flex-wrap: wrap;
      
      a {
        padding: 0.4rem 0.8rem;
        background: var(--secondary);
        color: var(--white);
        border-radius: 20px;
        font-size: 0.85rem;
        text-decoration: none;
        transition: all 0.3s ease;
        
        &:hover {
          background: var(--primary);
          transform: translateY(-2px);
        }
      }
    }
  }
`;

const VideoSection = styled(Section)`
  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--spacing-lg);
  }
  
  .video-embed {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: var(--spacing-lg);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    h4 {
      color: var(--secondary);
      margin-bottom: var(--spacing-md);
      text-align: center;
    }
    
    .video-placeholder {
      background: rgba(0, 0, 0, 0.5);
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      margin-bottom: var(--spacing-sm);
      color: var(--white);
      border: 2px dashed rgba(255, 255, 255, 0.3);
    }
    
    iframe {
      width: 100%;
      height: 300px;
      border-radius: 8px;
      border: none;
    }
  }
`;

const PerformanceSection = styled(Section)`
      .highlights-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: var(--spacing-lg);
    }
  
  .highlight-item {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: var(--spacing-lg);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-align: center;
    
    h4 {
      color: var(--secondary);
      margin-bottom: var(--spacing-md);
    }
    
    .venue-list {
      margin-top: var(--spacing-md);
      
      p {
        margin-bottom: var(--spacing-xs);
        opacity: 0.9;
      }
    }
  }
`;

const GallerySection = styled(Section)`
  .gallery-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: var(--spacing-xl);
  }
  
  .gallery-category {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: var(--spacing-xl);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-align: center;
    
    h4 {
      color: var(--secondary);
      margin-bottom: var(--spacing-md);
    }
    
    .photo-placeholder {
      background: rgba(0, 0, 0, 0.5);
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      margin-bottom: var(--spacing-sm);
      color: var(--white);
      border: 2px dashed rgba(255, 255, 255, 0.3);
    }
  }
  
  .slideshow-container {
    position: relative;
    max-width: 100%;
    margin: auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  
  .slideshow-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    display: block;
  }
  
  .slideshow-controls {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(0, 0, 0, 0.8);
      transform: translateY(-50%) scale(1.1);
    }
    
    &.prev {
      left: 10px;
      border-radius: 0 50% 50% 0;
    }
    
    &.next {
      right: 10px;
      border-radius: 50% 0 0 50%;
    }
  }
  
  .slideshow-indicators {
    text-align: center;
    padding: var(--spacing-md);
    
    .indicator {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      margin: 0 6px;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &.active {
        background: var(--secondary);
        transform: scale(1.2);
      }
      
      &:hover {
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;

const ContactSection = styled(Section)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: var(--spacing-xl);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  
  .contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-lg);
    margin: var(--spacing-lg) 0;
    
    .contact-item {
      .label {
        font-weight: 600;
        color: var(--secondary);
        margin-bottom: var(--spacing-xs);
      }
      
      a {
        color: var(--white);
        text-decoration: none;
        
        &:hover {
          color: var(--secondary);
        }
      }
    }
  }
  
  .booking-cta {
    margin-top: var(--spacing-xl);
    padding: var(--spacing-lg);
    background: rgba(214, 66, 79, 0.2);
    border-radius: 8px;
    border: 1px solid var(--secondary);
    
    h4 {
      color: var(--secondary);
      margin-bottom: var(--spacing-md);
    }
    
    p {
      margin-bottom: var(--spacing-md);
      line-height: 1.6;
    }
  }
`;

const EPK = () => {
  const promoImages = [landing1, landing2, landing3, landing4, landing5];
  const livePerformanceImages = [redClay1, redClay2, redClay3, redClay4, redClay5, redClay6, redClay7, redClay8, redClay9, redClay10];
  const btsImages = [bts1, bts2, bts3, bts4, bts5, bts6, bts7, bts8, bts9, bts10, bts11, bts12, bts13, bts14, bts15];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLiveImageIndex, setCurrentLiveImageIndex] = useState(0);
  const [currentBtsImageIndex, setCurrentBtsImageIndex] = useState(0);

  // Auto-advance slideshows
  useEffect(() => {
    const promoInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % promoImages.length
      );
    }, 4000); // Change image every 4 seconds

    const liveInterval = setInterval(() => {
      setCurrentLiveImageIndex((prevIndex) => 
        (prevIndex + 1) % livePerformanceImages.length
      );
    }, 5000); // Change image every 5 seconds

    const btsInterval = setInterval(() => {
      setCurrentBtsImageIndex((prevIndex) => 
        (prevIndex + 1) % btsImages.length
      );
    }, 4500); // Change image every 4.5 seconds

    return () => {
      clearInterval(promoInterval);
      clearInterval(liveInterval);
      clearInterval(btsInterval);
    };
  }, [promoImages.length, livePerformanceImages.length, btsImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % promoImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? promoImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Live performance slideshow controls
  const nextLiveImage = () => {
    setCurrentLiveImageIndex((prevIndex) => 
      (prevIndex + 1) % livePerformanceImages.length
    );
  };

  const prevLiveImage = () => {
    setCurrentLiveImageIndex((prevIndex) => 
      prevIndex === 0 ? livePerformanceImages.length - 1 : prevIndex - 1
    );
  };

  const goToLiveImage = (index) => {
    setCurrentLiveImageIndex(index);
  };

  // BTS slideshow controls
  const nextBtsImage = () => {
    setCurrentBtsImageIndex((prevIndex) => 
      (prevIndex + 1) % btsImages.length
    );
  };

  const prevBtsImage = () => {
    setCurrentBtsImageIndex((prevIndex) => 
      prevIndex === 0 ? btsImages.length - 1 : prevIndex - 1
    );
  };

  const goToBtsImage = (index) => {
    setCurrentBtsImageIndex(index);
  };

  const scrollToContact = () => {
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageWrapper>
      <Container>
        {/* HERO SECTION */}
        <HeroSection>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Anu & Ash – Indie-Pop with Cinematic Storytelling
          </motion.h1>
          <motion.p 
            className="subheadline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Emotional. Expansive. Unforgettable.
          </motion.p>
          
          <CTAButtons>
            <Button 
              as="a" 
              href="https://open.spotify.com/artist/2noTeVrjCU2I1J882nL2vj" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen Now
            </Button>
            <Button variant="outline" onClick={scrollToContact}>
              Book Us
            </Button>
          </CTAButtons>
        </HeroSection>

        {/* BIO SECTION */}
        <BioSection>
          <h2>About Anu & Ash</h2>
          <p className="bio-text">
            Anu & Ash craft indie-pop with a cinematic edge, blending heartfelt storytelling, lush melodies, and magnetic stage presence. Their music moves between intimate confessions and expansive, anthemic moments — the kind that fill a room and linger long after the lights fade.
          </p>
          <p className="bio-text">
            In 2025, they sold out their headline show at Red Clay Music Foundry, released two singles and a live album, and grew their audience across the U.S. and internationally through powerful performances and a rapidly expanding online presence.
          </p>
          <p className="bio-text">
            Whether on stage or in the studio, Anu & Ash create music that doesn't just play — it transports.
          </p>
          
          <div className="full-bio">
            <h4>Musical Background & Influences</h4>
            <p>The duo's journey began as a friendship rooted in a shared love of music. Over the years, they have crafted a distinctive sound that combines indie-pop energy with cinematic textures, focusing on themes of love, vulnerability, nostalgia, and connection. Their songwriting highlights emotional honesty and memorable melodies.</p>
            
            <h4>Career Highlights & Achievements</h4>
            <p>Anu & Ash have performed across the U.S., including standout shows at the Red Clay Music Foundry, captivating audiences with both originals and inventive covers. Their live shows are praised for their energy, intimacy, and the seamless interplay of vocals and instrumentation. Collaborations with guest artists like Keyera and Surya further enrich their performances.</p>
            
            <h4>Discography & Notable Releases</h4>
            <p>Their original songs, including All I Feel Is You, O Sanam, On Your Mind, Family Cotton, Kanna's Lullaby, and Summer Song, showcase their ability to craft emotionally engaging, melodic indie-pop. Their covers—from soulful ballads to fun audience sing-alongs—highlight their versatility and connection with fans.</p>
            
            <h4>Live Performance Experience</h4>
            <p>Anu & Ash's concerts combine energy, emotion, and storytelling. From intimate ballads to high-energy showstoppers, their performances feature intricate arrangements, harmonies, and guest collaborations that create memorable experiences for audiences.</p>
            
            <h4>Musical Philosophy & Storytelling</h4>
            <p>At the heart of Anu & Ash's music is a dedication to authentic storytelling. Their songs explore human emotions, relationships, and personal growth, connecting with listeners through lyricism, melody, and performance.</p>
          </div>
        </BioSection>

        {/* MUSIC SECTION */}
        <MusicSection>
          <h2>Listen</h2>
          
          <div className="streaming-platforms">
            <div className="platform-embed">
              <h4>Spotify</h4>
              <iframe 
                src="https://open.spotify.com/embed/artist/2noTeVrjCU2I1J882nL2vj?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                style={{borderRadius: '12px'}}
              ></iframe>
            </div>
            <div className="platform-embed">
              <h4>Apple Music</h4>
              <iframe 
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                frameBorder="0" 
                height="352" 
                style={{width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '12px'}} 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.music.apple.com/us/artist/anu-ash/1784887272"
              ></iframe>
            </div>
          </div>
          
          <div className="releases-list">
            <div className="release-item">
              <div className="release-title">Family Cotton</div>
              <div className="release-date">Single • July 2025</div>
              <div className="streaming-links">
                <a href="https://open.spotify.com/track/0Nczb1buIJCT5kNV0Ho4HU" target="_blank" rel="noopener noreferrer">Spotify</a>
              </div>
            </div>
            <div className="release-item">
              <div className="release-title">Summer Song</div>
              <div className="release-date">Single • June 2025</div>
              <div className="streaming-links">
                <a href="https://open.spotify.com/track/75vsnOGucF4WAnsbOIb33e" target="_blank" rel="noopener noreferrer">Spotify</a>
              </div>
            </div>
            <div className="release-item">
              <div className="release-title">Live at Eddie's Attic</div>
              <div className="release-date">Album • December 2024</div>
              <div className="streaming-links">
                <a href="https://open.spotify.com/album/39gQdVgmqSOhtkskKG3iLR" target="_blank" rel="noopener noreferrer">Spotify</a>
              </div>
            </div>
          </div>
        </MusicSection>

        {/* VIDEO SECTION */}
        <VideoSection>
          <h2>Watch</h2>
          
          <div className="video-grid">
            <div className="video-embed">
              <h4>Family Cotton - Official Music Video</h4>
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/PFbfBm5tbis" 
                title="Family Cotton - Official Music Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                style={{borderRadius: '8px'}}
              ></iframe>
            </div>
            <div className="video-embed">
              <h4>Red Clay Music Foundry Performance</h4>
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/videoseries?list=PLVrtjQEJR1Lwtt-k_pTnqtfIQFQ9Pl02d" 
                title="Red Clay Music Foundry Performance Playlist" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                style={{borderRadius: '8px'}}
              ></iframe>
            </div>
            <div className="video-embed">
              <h4>Eddie's Attic Open Mic Night</h4>
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/8WpHX41Brj4" 
                title="Eddie's Attic Open Mic Night Performance" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                style={{borderRadius: '8px'}}
              ></iframe>
            </div>
            <div className="video-embed">
              <h4>Eddie's Attic Highlight Reel</h4>
              <iframe 
                src="https://www.instagram.com/reel/DEQywtdv9sa/embed"
                width="100%" 
                height="400" 
                frameBorder="0" 
                scrolling="no" 
                allowTransparency="true"
                style={{borderRadius: '8px'}}
                title="Eddie's Attic Highlight Reel"
              ></iframe>
            </div>
          </div>
        </VideoSection>

        {/* PERFORMANCE HIGHLIGHTS */}
        <PerformanceSection>
          <h2>Live Highlights</h2>
          <p style={{textAlign: 'center', marginBottom: 'var(--spacing-xl)', fontSize: '1.1rem', lineHeight: '1.6'}}>
            Multiple appearances at iconic Atlanta music venues, including Alley Stage, Phase Events, Astro Events, Eddie's Attic, The Red Clay Foundry, Ferst Center for the Arts, Verizon Amphitheater, and more.
          </p>
          
          <div className="highlights-grid">
            <div className="highlight-item">
              <h4>Sold-Out Headline Show – Red Clay Music Foundry (2025)</h4>
              <p>Our most successful show to date, featuring a full setlist of originals and covers.</p>
              <iframe 
                src="https://www.instagram.com/p/DNT4EFYyY6t/embed"
                width="100%" 
                height="400" 
                frameBorder="0" 
                scrolling="no" 
                allowTransparency="true"
                style={{borderRadius: '8px'}}
                title="Red Clay Music Foundry Photos"
              ></iframe>
            </div>
            
            <div className="highlight-item">
              <h4>Behind the Scenes – Red Clay Music Foundry</h4>
              <p>Get an exclusive look behind the scenes of our sold-out headline show.</p>
              <iframe 
                src="https://www.instagram.com/reel/DNRlHutvNZ5/embed"
                width="100%" 
                height="400" 
                frameBorder="0" 
                scrolling="no" 
                allowTransparency="true"
                style={{borderRadius: '8px'}}
                title="Red Clay Music Foundry BTS Reel"
              ></iframe>
            </div>
            
            <div className="highlight-item">
              <h4>Sold-Out Show – Eddie's Attic (Sept 27, 2024)</h4>
              <p>An intimate performance at one of Atlanta's most iconic venues.</p>
              <iframe 
                src="https://www.instagram.com/p/C2kKHpauYeB/embed"
                width="100%" 
                height="400" 
                frameBorder="0" 
                scrolling="no" 
                allowTransparency="true"
                style={{borderRadius: '8px', marginTop: 'var(--spacing-md)'}}
                title="Eddie's Attic Show Poster"
              ></iframe>
            </div>

          </div>
        </PerformanceSection>

        {/* PHOTOS SECTION */}
        <GallerySection>
          <h2>Gallery</h2>
          
          <div className="gallery-categories">
            <div className="gallery-category">
              <h4>Professional Promo Shots</h4>
              <div className="slideshow-container">
                <img 
                  src={promoImages[currentImageIndex]} 
                  alt={`Professional promo shot ${currentImageIndex + 1}`}
                  className="slideshow-image"
                />
                <button className="slideshow-controls prev" onClick={prevImage}>
                  &#8249;
                </button>
                <button className="slideshow-controls next" onClick={nextImage}>
                  &#8250;
                </button>
              </div>
              <div className="slideshow-indicators">
                {promoImages.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                  />
                ))}
              </div>
              <p>Professional promotional photographs for press and marketing use.</p>
            </div>
            
            <div className="gallery-category">
              <h4>Live Performance Photos</h4>
              <div className="slideshow-container">
                <img 
                  src={livePerformanceImages[currentLiveImageIndex]} 
                  alt={`Live performance photo ${currentLiveImageIndex + 1}`}
                  className="slideshow-image"
                />
                <button className="slideshow-controls prev" onClick={prevLiveImage}>
                  &#8249;
                </button>
                <button className="slideshow-controls next" onClick={nextLiveImage}>
                  &#8250;
                </button>
              </div>
              <div className="slideshow-indicators">
                {livePerformanceImages.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${index === currentLiveImageIndex ? 'active' : ''}`}
                    onClick={() => goToLiveImage(index)}
                  />
                ))}
              </div>
              <p>Professional concert photography from our Red Clay Music Foundry performance.</p>
            </div>
            
            <div className="gallery-category">
              <h4>Behind-the-Scenes</h4>
              <div className="slideshow-container">
                <img 
                  src={btsImages[currentBtsImageIndex]} 
                  alt={`Behind-the-scenes photo ${currentBtsImageIndex + 1}`}
                  className="slideshow-image"
                />
                <button className="slideshow-controls prev" onClick={prevBtsImage}>
                  &#8249;
                </button>
                <button className="slideshow-controls next" onClick={nextBtsImage}>
                  &#8250;
                </button>
              </div>
              <div className="slideshow-indicators">
                {btsImages.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${index === currentBtsImageIndex ? 'active' : ''}`}
                    onClick={() => goToBtsImage(index)}
                  />
                ))}
              </div>
              <p>Candid moments and behind-the-scenes content from our performances and studio sessions.</p>
            </div>
          </div>
        </GallerySection>

        {/* CONTACT & BOOKING SECTION */}
        <ContactSection id="contact-section">
          <h2>Let's Connect</h2>
          <p>For bookings, press inquiries, or collaborations:</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <div className="label">Email</div>
              <a href="mailto:anuandash.music@gmail.com">anuandash.music@gmail.com</a>
            </div>
            <div className="contact-item">
              <div className="label">Instagram</div>
              <a href="https://instagram.com/anuandash" target="_blank" rel="noopener noreferrer">@anuandash</a>
            </div>
            <div className="contact-item">
              <div className="label">TikTok</div>
              <a href="https://tiktok.com/@anuandash" target="_blank" rel="noopener noreferrer">@anuandash</a>
            </div>
            <div className="contact-item">
              <div className="label">Website</div>
              <a href="https://anuandash.com" target="_blank" rel="noopener noreferrer">anuandash.com</a>
            </div>
          </div>
          
          <div className="booking-cta">
            <h4>Now Booking 2025 & 2026</h4>
            <p>
              Anu & Ash are now booking 2025 & 2026 shows and festivals. With a growing fanbase, professional live performance recordings, and a repertoire of original songs ready for the big stage, they bring a dynamic, emotional, and unforgettable live experience to every audience.
            </p>
          </div>
        </ContactSection>
      </Container>
    </PageWrapper>
  );
};

export default EPK;
