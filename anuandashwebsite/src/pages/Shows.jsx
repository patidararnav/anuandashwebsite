import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../styles/Container';
import Button from '../styles/Button';
import showImage from '../assets/landings/landing1.jpg';

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  padding-top: 100px;
  
  h1 {
    margin-bottom: var(--spacing-sm);
  }
`;

const ShowsContainer = styled.div`
  margin: var(--spacing-xl) 0;
`;

const ShowsFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: var(--spacing-sm);
  }
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  background: ${props => props.active ? 'var(--secondary)' : 'transparent'};
  color: var(--white);
  border: 2px solid ${props => props.active ? 'var(--secondary)' : 'rgba(255, 255, 255, 0.5)'};
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--secondary);
    color: var(--white);
    border-color: var(--secondary);
  }
`;

const ShowsList = styled.div`
  display: grid;
  gap: var(--spacing-lg);
`;

const ShowCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  padding: var(--spacing-lg);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &.featured {
    border-left: 4px solid var(--secondary);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
    text-align: center;
  }
`;

const ShowDate = styled.div`
  text-align: center;
  color: var(--white);
`;

const Day = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  color: var(--white);
`;

const Month = styled.div`
  font-size: var(--fs-md);
  font-weight: 600;
  color: var(--secondary);
  text-transform: uppercase;
`;

const Year = styled.div`
  font-size: var(--fs-sm);
  color: var(--white);
  opacity: 0.7;
`;

const ShowInfo = styled.div`
  padding: 0 var(--spacing-lg);
  color: var(--white);
  
  @media (max-width: 768px) {
    padding: var(--spacing-sm) 0;
  }
`;

const ShowTitle = styled.h3`
  margin-bottom: var(--spacing-xs);
  color: var(--white);
`;

const ShowLocation = styled.div`
  font-size: var(--fs-md);
  margin-bottom: var(--spacing-xs);
  color: var(--white);
`;

const ShowTime = styled.div`
  font-size: var(--fs-sm);
  color: var(--white);
  opacity: 0.8;
`;

const ShowActions = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const NoShows = styled.div`
  text-align: center;
  padding: var(--spacing-xl) 0;
  color: var(--white);
  
  h3 {
    margin-bottom: var(--spacing-md);
    color: var(--white);
  }
`;

// Show data
const mockShowsData = [
  {
    id: 1,
    title: 'Eddie Owen Presents - Red Clay',
    date: new Date('2025-08-08T20:00:00'),
    location: 'Duluth, GA',
    ticketLink: 'https://eddieowenpresents.freshtix.com/events/anuandash'
  }
];

// Past shows data
const mockPastShows = [
  {
    id: 2,
    title: 'Placeholder Old Show',
    date: new Date('2023-10-15T19:30:00'),
    location: 'Atlanta, GA',
    featured: true
  }
];

// Create a wrapper with the background image
const PageWrapper = styled.div`
  min-height: 100vh;
  background: url(${showImage}) center 15% / cover no-repeat fixed;
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

const Shows = () => {
  const [filter, setFilter] = useState('upcoming');
  const showsToDisplay = filter === 'upcoming' ? mockShowsData : mockPastShows;

  // Format date helpers
  const formatDay = (date) => date.getDate();
  const formatMonth = (date) => date.toLocaleString('default', { month: 'short' });
  const formatYear = (date) => date.getFullYear();
  const formatTime = (date) => date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  return (
    <PageWrapper>
      <Container>
        <PageHeader>
          <h1>Shows</h1>
          <p>Come experience the music of Anu & Ash live in concert</p>
        </PageHeader>

        <ShowsContainer>
          <ShowsFilters>
            <FilterButton 
              active={filter === 'upcoming'} 
              onClick={() => setFilter('upcoming')}
            >
              Upcoming Shows
            </FilterButton>
            <FilterButton 
              active={filter === 'past'} 
              onClick={() => setFilter('past')}
            >
              Past Shows
            </FilterButton>
          </ShowsFilters>

          <ShowsList>
            {showsToDisplay.length > 0 ? (
              showsToDisplay.map((show) => (
                <ShowCard 
                  key={show.id}
                  className={show.featured ? 'featured' : ''}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ShowDate>
                    <Day>{formatDay(show.date)}</Day>
                    <Month>{formatMonth(show.date)}</Month>
                    <Year>{formatYear(show.date)}</Year>
                  </ShowDate>
                  
                  <ShowInfo>
                    <ShowTitle>{show.title}</ShowTitle>
                    <ShowLocation>{show.location}</ShowLocation>
                    <ShowTime>{formatTime(show.date)}</ShowTime>
                  </ShowInfo>
                  
                  <ShowActions>
                    {show.ticketLink ? (
                      <Button 
                        as="a" 
                        href={show.ticketLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        small
                      >
                        Get Tickets
                      </Button>
                    ) : (
                      <Button disabled small>Past Event</Button>
                    )}
                  </ShowActions>
                </ShowCard>
              ))
            ) : (
              <NoShows>
                <h3>No {filter} shows at the moment</h3>
                <p>Check back soon for updates on our performance schedule!</p>
              </NoShows>
            )}
          </ShowsList>
        </ShowsContainer>
      </Container>
    </PageWrapper>
  );
};

export default Shows; 