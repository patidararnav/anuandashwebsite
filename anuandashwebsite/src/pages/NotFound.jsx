import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../styles/Container';
import Button from '../styles/Button';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 70vh;
  padding: var(--spacing-xl) 0;
`;

const ErrorCode = styled.div`
  font-size: 8rem;
  font-weight: 700;
  color: var(--secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h1`
  margin-bottom: var(--spacing-md);
`;

const ErrorText = styled.p`
  max-width: 500px;
  margin: 0 auto var(--spacing-lg);
`;

const NotFound = () => {
  return (
    <Container>
      <NotFoundContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Page Not Found</ErrorTitle>
        <ErrorText>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </ErrorText>
        <Button as={Link} to="/">
          Return to Homepage
        </Button>
      </NotFoundContainer>
    </Container>
  );
};

export default NotFound; 