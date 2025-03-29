import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../styles/Container';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${props => 
    props.scrolled ? 'var(--white)' : 
    props.isHomePage ? 'transparent' : 'var(--primary)'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  padding: ${props => props.scrolled ? '0.5rem 0' : '1rem 0'};
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: var(--fs-xl);
  font-weight: 700;
  color: ${props => props.scrolled ? 'var(--primary)' : 'var(--white)'};
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 768px) {
    font-size: var(--fs-lg);
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.scrolled ? 'var(--primary)' : 'var(--white)'};
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--secondary);
    transition: width 0.3s ease;
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.scrolled ? 'var(--primary)' : 'var(--white)'};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  text-align: center;
`;

const MobileNavLink = styled(Link)`
  color: var(--white);
  font-size: var(--fs-xl);
  font-weight: 600;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavbarContainer scrolled={scrolled} isHomePage={isHomePage}>
      <Container>
        <NavbarContent>
          <Logo to="/" scrolled={scrolled}>
            Anu & Ash
          </Logo>
          
          <NavLinks>
            <NavLink to="/" scrolled={scrolled}>Home</NavLink>
            <NavLink to="/shows" scrolled={scrolled}>Shows</NavLink>
            <NavLink to="/listen" scrolled={scrolled}>Listen</NavLink>
            <NavLink to="/follow" scrolled={scrolled}>Follow</NavLink>
            <NavLink to="/merchandise" scrolled={scrolled}>Merchandise</NavLink>
            <NavLink to="/about" scrolled={scrolled}>About</NavLink>
            <NavLink to="/contact" scrolled={scrolled}>Contact</NavLink>
          </NavLinks>
          
          <MobileMenuButton 
            scrolled={scrolled} 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </NavbarContent>
      </Container>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <MobileNavLinks>
              <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/shows" onClick={() => setMobileMenuOpen(false)}>
                Shows
              </MobileNavLink>
              <MobileNavLink to="/listen" onClick={() => setMobileMenuOpen(false)}>
                Listen
              </MobileNavLink>
              <MobileNavLink to="/follow" onClick={() => setMobileMenuOpen(false)}>
                Follow
              </MobileNavLink>
              <MobileNavLink to="/merchandise" onClick={() => setMobileMenuOpen(false)}>
                Merchandise
              </MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </MobileNavLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar; 