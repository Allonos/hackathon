import './About.css'

import Header from "./Header";
import Reviews from './Reviews';

function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about">
          <div className='about-intro'>
            <h1 className='about-title'>About The Team</h1>
            <p>
              Our team name, Asterisk (*) symbolizes that every big achievement starts from something small. 
              We are a dedicated team participating in the NASA Space App Challenge, 
              with a keen interest in space weather and coronal mass ejections. 
              All team members are second-year students pursuing a Bachelor's in Physics at Tbilisi State University.
            </p>
            <p>
              Our goal is to challenge ourselves by working with deadlines and analyzing data using various methods, 
              including multiple programming languages. We are also motivated to bring innovation to the world!
            </p>
          </div>
          <Reviews />
        </div>
      </div>
    </>
  )
}

export default About;