import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Main color palette */
    --primary: #2D3047;
    --secondary: #F45B69;
    --accent: #E4B363;
    --background: #F8F8F8;
    --text: #333333;
    --white: #FFFFFF;
    
    /* Font sizes */
    --fs-xs: 0.75rem;
    --fs-sm: 0.875rem;
    --fs-md: 1rem;
    --fs-lg: 1.25rem;
    --fs-xl: 1.5rem;
    --fs-xxl: 2rem;
    --fs-hero: 3.5rem;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-xxl: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: var(--text);
    font-size: 16px;
    line-height: 1.6;
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-sm);
  }

  h1 {
    font-size: var(--fs-hero);
  }

  h2 {
    font-size: var(--fs-xxl);
  }

  h3 {
    font-size: var(--fs-xl);
  }

  p {
    margin-bottom: var(--spacing-sm);
  }

  a {
    color: var(--secondary);
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--accent);
    }
  }

  button {
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }

  section {
    padding: var(--spacing-xl) 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: var(--fs-xxl);
    }
    
    h2 {
      font-size: var(--fs-xl);
    }
    
    h3 {
      font-size: var(--fs-lg);
    }
    
    section {
      padding: var(--spacing-lg) 0;
    }
  }
`;

export default GlobalStyles; 