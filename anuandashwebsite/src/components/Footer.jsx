import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../styles/Container';

// Import custom icons
import instagramIcon from '../assets/icons/instagram.png';
import itunesIcon from '../assets/icons/itunes.png';
import linkIcon from '../assets/icons/link.png';
import spotifyIcon from '../assets/icons/spotify.png';
import youtubeIcon from '../assets/icons/youtube.png';

const FooterContainer = styled.footer`
  background-color: var(--primary);
  color: var(--white);
  padding: var(--spacing-xl) 0 var(--spacing-md);
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, var(--secondary), transparent);
  }
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-xl) 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-xl);
  }
`;

const FooterBrand = styled.div`
  flex: 1;
  max-width: 350px;
`;

const FooterLogo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--white);
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 3px;
    background-color: var(--secondary);
  }
`;

const FooterDescription = styled.p`
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
`;

const SocialLink = styled.a`
  color: var(--white);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
  }
`;

const FooterNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  max-width: 400px;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const FooterLinksSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h3`
  color: var(--white);
  font-size: 1.2rem;
  margin-bottom: var(--spacing-md);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 30px;
    height: 2px;
    background-color: var(--secondary);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
  padding: 4px 0;
  position: relative;
  display: inline-block;
  font-size: 0.95rem;
  
  &:before {
    content: '›';
    margin-right: 6px;
    opacity: 0;
    transform: translateX(-8px);
    display: inline-block;
    transition: all 0.2s ease;
  }
  
  &:hover {
    color: var(--white);
    transform: translateX(5px);
    
    &:before {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
  }
`;

const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <FooterContent>
          <FooterBrand>
            <FooterLogo to="/">Anu & Ash</FooterLogo>
            <FooterDescription>
              A musical duo creating beautiful melodies and powerful performances that resonate with audiences worldwide.
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="https://instagram.com/anuandash" target="_blank" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
              </SocialLink>
              <SocialLink href="https://music.youtube.com/channel/UCM6ClyrCSXfB_DrtFevJOaQ" target="_blank" aria-label="YouTube">
                <img src={youtubeIcon} alt="YouTube" />
              </SocialLink>
              <SocialLink href="https://open.spotify.com/artist/2noTeVrjCU2I1J882nL2vj" target="_blank" aria-label="Spotify">
                <img src={spotifyIcon} alt="Spotify" />
              </SocialLink>
              <SocialLink href="https://music.apple.com/us/artist/anu-ash/1784887272" target="_blank" aria-label="Apple Music">
                <img src={itunesIcon} alt="Apple Music" />
              </SocialLink>
              <SocialLink href="https://artists.landr.com/anuash" target="_blank" aria-label="LANDR">
                <img src={linkIcon} alt="LANDR" />
              </SocialLink>
            </SocialLinks>
          </FooterBrand>
          
          <FooterNav>
            <FooterLinksSection>
              <FooterHeading>Quick Links</FooterHeading>
              <FooterLinks>
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/shows">Upcoming Shows</FooterLink>
                <FooterLink to="/listen">Listen</FooterLink>
                <FooterLink to="/follow">Follow Us</FooterLink>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
              </FooterLinks>
            </FooterLinksSection>
          </FooterNav>
        </FooterContent>
        
        <FooterBottom>
          <Copyright>
            &copy; {new Date().getFullYear()} Anu & Ash. All rights reserved.
          </Copyright>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer; 