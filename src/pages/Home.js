import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

import interactive from '../images/interactive.png'
import visual from '../images/visual.png'
import dataVisualisation from '../images/data-visualisation.png'
import explore from '../images/explore.png'
import ThreeDModel from './ThreeDModel';

function Home() {
  return (
    <div className='home-container'>
      <header className='home-header'>
        <div className='home-header-content'>
          <h1 className='header-title'>Get to know Beyond the Ordinary: <br />The Significance of the 2024 <span className='highlight-title'>Geomagnetic <br /> Storm</span></h1>
          <nav className='home-nav'>
            <ul className='home-nav-links'>
              <li className='home-nav-link'>
                <NavLink to="/" className='home-home'>
                  Home
                </NavLink>
              </li>
              <li className='home-nav-link'>
                <NavLink to="/science-insight">
                  Science Insight
                </NavLink>
              </li>
              <li className='home-nav-link'>
                <NavLink to="/data-modelling">
                  Data Modelling
                </NavLink>
              </li>
              <li className='home-nav-link'>
                <NavLink to="/future-plans">
                  Future Plans
                </NavLink>
              </li>
              <li className='home-nav-link'>
                <NavLink to="/About-us">
                  About Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className='home-second-container'>
        <div className='home-second-left'>
          <div className='home-list list-in'>
            <img src={interactive} alt='interactive storytelling icon'/>
            <p>Interactive Storytelling</p>
          </div>
          <div className='home-list'>
            <img src={visual} alt='interactive storytelling icon'/>
            <p>Visual Learning Tools</p>
          </div>
          <div className='home-list list-in'>
            <img src={dataVisualisation} alt='interactive storytelling icon'/>
            <p>Data Visualisation</p>
          </div>
          <div className='home-list'>
            <img src={explore} alt='interactive storytelling icon'/>
            <p>Explore Cosmic Wonders</p>
          </div>
        </div>
        <div className='home-second-right'>
          <ThreeDModel />
        </div>
      </div>
      <div className='uncover'>
        <h1>Uncover the Truth Behing <span className='highlight'>Cosmic Miracle</span></h1>
      </div>
    </div>
  );
}

export default Home;
