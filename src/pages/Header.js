import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      setIsMenuOpen(true);
    }
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} 
              end
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/science-insight" 
              className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
              onClick={closeMenu}
            >
              Science Insight
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/data-modelling" 
              className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
              onClick={closeMenu}
            >
              Data Modelling
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/future-plans" 
              className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
              onClick={closeMenu}
            >
              Future Plans
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
              onClick={closeMenu}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
