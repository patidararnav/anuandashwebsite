import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  
  @media (max-width: 768px) {
    padding: 0 var(--spacing-sm);
  }
`;

export default Container; 