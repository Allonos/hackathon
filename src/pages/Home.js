import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

import interactive from '../images/interactive.png';
import visual from '../images/visual.png';
import dataVisualisation from '../images/data-visualisation.png';
import explore from '../images/explore.png';
import ThreeDModel from './ThreeDModel';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='home-container'>
      <header className='home-header'>
        <div className='home-header-content'>
          <h1 className='header-title'>
            Get to know Beyond the Ordinary: <br />
            The Significance of the 2024 <span className='highlight-title'>Geomagnetic <br /> Storm</span>
          </h1>
          <nav className='home-nav'>
          <div className='home-hamburger' onClick={toggleMenu}>
            <span className='home-bar'></span>
            <span className='home-bar'></span>
            <span className='home-bar'></span>
          </div>
          <ul className={`home-nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li className='home-nav-link'>
              <NavLink to="/" className='home-home' onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li className='home-nav-link'>
              <NavLink to="/science-insight" onClick={toggleMenu}>
                Science Insight
              </NavLink>
            </li>
            <li className='home-nav-link'>
              <NavLink to="/data-modelling" onClick={toggleMenu}>
                Data Modelling
              </NavLink>
            </li>
            <li className='home-nav-link'>
              <NavLink to="/future-plans" onClick={toggleMenu}>
                Future Plans
              </NavLink>
            </li>
            <li className='home-nav-link'>
              <NavLink to="/About-us" onClick={toggleMenu}>
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
        </div>
      </header>
      <div className='home-second-container'>
        <div className='home-second-left' id="home-second-left">
          <div className='home-list list-in'>
            <img src={interactive} alt='interactive storytelling icon' />
            <p>Interactive Storytelling</p>
          </div>
          <div className='home-list'>
            <img src={visual} alt='interactive storytelling icon' />
            <p>Visual Learning Tools</p>
          </div>
          <div className='home-list list-in'>
            <img src={dataVisualisation} alt='interactive storytelling icon' />
            <p>Data Visualisation</p>
          </div>
          <div className='home-list'>
            <img src={explore} alt='interactive storytelling icon' />
            <p>Explore Cosmic Wonders</p>
          </div>
        </div>
        <div className='home-second-right'>
          <ThreeDModel />
          <div className='uncover'>
            <h1>Uncover the Truth Behind <span className='highlight-cosmic'>Cosmic Miracle</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
