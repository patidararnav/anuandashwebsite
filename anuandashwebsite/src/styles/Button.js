import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: 0.8rem 1.8rem;
  background-color: var(--secondary);
  color: var(--white);
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: var(--fs-md);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: #d6424f;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  ${props => props.primary && css`
    background-color: var(--primary);
    
    &:hover {
      background-color: #232639;
    }
  `}
  
  ${props => props.accent && css`
    background-color: var(--accent);
    
    &:hover {
      background-color: #c99b53;
    }
  `}
  
  ${props => props.outline && css`
    background-color: transparent;
    border: 2px solid var(--secondary);
    color: var(--secondary);
    
    &:hover {
      background-color: var(--secondary);
      color: var(--white);
    }
  `}
  
  ${props => props.small && css`
    padding: 0.5rem 1rem;
    font-size: var(--fs-sm);
  `}
  
  ${props => props.large && css`
    padding: 1rem 2.5rem;
    font-size: var(--fs-lg);
  `}
  
  @media (max-width: 768px) {
    padding: 0.7rem 1.5rem;
    font-size: var(--fs-sm);
  }
`;

export default Button; 