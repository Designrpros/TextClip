'use client'; // This component uses client-side hooks (useState, usePathname, useEffect)

import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// --- TYPE DEFINITIONS ---
interface GlobalStyleProps {
  $menuOpen: boolean;
}

interface NavLinksProps {
  $menuOpen: boolean;
  $hasMounted: boolean; // Prop to track client-side mount
}

interface MenuIconProps {
  $menuOpen: boolean;
}

interface StyledLinkProps {
  $active: boolean;
}


// --- STYLED COMPONENTS ---

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    overflow: ${({ $menuOpen }) => ($menuOpen ? 'hidden' : 'auto')};
  }
`;

const Toolbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: saturate(180%) blur(10px);
  -webkit-backdrop-filter: saturate(180%) blur(10px);
  color: #1a1a1a;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(20, 20, 20, 0.7);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #f0f0f0;
  }
`;

// MODIFICATION: Added logic to disable transition on initial render
const NavLinks = styled.nav<NavLinksProps>`
  /* --- MOBILE STYLES (DEFAULT) --- */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding-top: 4rem;
  background-color: #ffffff;
  transform: ${({ $menuOpen }) => ($menuOpen ? 'translateY(0)' : 'translateY(-100%)')};
  will-change: transform;
  
  /* THIS IS THE FIX: No transition on first render, then enable it */
  transition: ${({ $hasMounted }) => $hasMounted ? 'transform 0.3s ease-in-out' : 'none'};

  @media (prefers-color-scheme: dark) {
    background-color: #121212;
  }

  /* --- DESKTOP STYLES (OVERRIDE) --- */
  @media (min-width: 769px) {
    position: static;
    flex-direction: row;
    width: auto;
    height: auto;
    background-color: transparent;
    transform: translateY(0);
    padding-top: 0;
    gap: 0.5rem;
    transition: none;
    
    @media (prefers-color-scheme: dark) {
      background-color: transparent;
    }
  }
`;

const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  color: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;

  background-color: ${({ $active }) => ($active ? 'rgba(0, 0, 0, 0.05)' : 'transparent')};

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.1)' : 'transparent')};
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  @media (min-width: 769px) {
    font-size: 0.9rem;
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: inherit;
  z-index: 1001;
  cursor: pointer;
`;

const MenuIcon = styled.button<MenuIconProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  div {
    width: 1.5rem;
    height: 2px;
    background-color: currentColor;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child { transform: ${({ $menuOpen }) => ($menuOpen ? 'rotate(45deg)' : 'rotate(0)')}; }
    :nth-child(2) { opacity: ${({ $menuOpen }) => ($menuOpen ? '0' : '1')}; transform: ${({ $menuOpen }) => ($menuOpen ? 'translateX(20px)' : 'translateX(0)')}; }
    :nth-child(3) { transform: ${({ $menuOpen }) => ($menuOpen ? 'rotate(-45deg)' : 'rotate(0)')}; }
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;


// --- NAVBAR COMPONENT ---

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  
  // MODIFICATION: State to safely handle client-side rendering
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  
  const navItems = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/security", label: "Security" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Prevent flash by not rendering menu until mounted
  if (!hasMounted) {
    // Render a simplified version for SSR and initial hydration
    return (
      <Toolbar>
        <LogoLink href="/">TextClip</LogoLink>
      </Toolbar>
    );
  }

  return (
    <>
      <GlobalStyle $menuOpen={menuOpen} />
      <Toolbar>
        <LogoLink href="/" onClick={handleLinkClick}>TextClip</LogoLink>

        {/* MODIFICATION: Pass hasMounted state to NavLinks */}
        <NavLinks $menuOpen={menuOpen} $hasMounted={hasMounted}>
          {navItems.map((item) => (
            <StyledLink 
              key={item.href} 
              href={item.href} 
              $active={pathname === item.href}
              onClick={handleLinkClick}
            >
              {item.label}
            </StyledLink>
          ))}
        </NavLinks>

        <MenuIcon $menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div />
          <div />
          <div />
        </MenuIcon>
      </Toolbar>
    </>
  );
};

export default Navbar;