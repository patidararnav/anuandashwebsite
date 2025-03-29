import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../styles/Container';
import Button from '../styles/Button';

// Images
import merchImage from '../assets/landings/landing5.jpg';

// Create a wrapper with the background image
const PageWrapper = styled.div`
  min-height: 100vh;
  background: url(${merchImage}) center 20% / cover no-repeat fixed;
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

const MerchandiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
`;

const MerchandiseCard = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MerchandiseImage = styled.div`
  height: 250px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--fs-sm);
`;

const MerchandiseInfo = styled.div`
  padding: var(--spacing-md);
`;

const MerchandiseTitle = styled.h3`
  margin-bottom: var(--spacing-xs);
  color: var(--white);
`;

const MerchandisePrice = styled.div`
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  color: var(--secondary);
`;

const ComingSoonBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: var(--secondary);
  color: var(--white);
  font-size: var(--fs-xs);
  font-weight: 600;
  border-radius: 50px;
  margin-bottom: var(--spacing-xs);
`;

const Merchandise = () => {
  return (
    <PageWrapper>
      <Container>
        <PageHeader>
          <h1>Official Merchandise</h1>
          <p>Show your support with our official merchandise. Wear your favorite music!</p>
        </PageHeader>
        
        <MerchandiseGrid>
          <MerchandiseCard>
            <MerchandiseImage>T-Shirt Image Placeholder</MerchandiseImage>
            <MerchandiseInfo>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
              <MerchandiseTitle>Anu & Ash Logo Tee</MerchandiseTitle>
              <MerchandisePrice>$25.00</MerchandisePrice>
              <Button disabled small>Shop Now</Button>
            </MerchandiseInfo>
          </MerchandiseCard>
          
          <MerchandiseCard>
            <MerchandiseImage>Hoodie Image Placeholder</MerchandiseImage>
            <MerchandiseInfo>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
              <MerchandiseTitle>Tour Hoodie</MerchandiseTitle>
              <MerchandisePrice>$45.00</MerchandisePrice>
              <Button disabled small>Shop Now</Button>
            </MerchandiseInfo>
          </MerchandiseCard>
          
          <MerchandiseCard>
            <MerchandiseImage>Hat Image Placeholder</MerchandiseImage>
            <MerchandiseInfo>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
              <MerchandiseTitle>Snapback Cap</MerchandiseTitle>
              <MerchandisePrice>$22.00</MerchandisePrice>
              <Button disabled small>Shop Now</Button>
            </MerchandiseInfo>
          </MerchandiseCard>
          
          <MerchandiseCard>
            <MerchandiseImage>Poster Image Placeholder</MerchandiseImage>
            <MerchandiseInfo>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
              <MerchandiseTitle>Album Poster</MerchandiseTitle>
              <MerchandisePrice>$15.00</MerchandisePrice>
              <Button disabled small>Shop Now</Button>
            </MerchandiseInfo>
          </MerchandiseCard>
        </MerchandiseGrid>
      </Container>
    </PageWrapper>
  );
};

export default Merchandise; 