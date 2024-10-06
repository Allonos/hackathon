import React from 'react';
import './ScienceInsight.css';
import Header from './Header';
import Quiz from './Quiz';

import aurora from '../images/inside/auroras-100.jpg.webp';
import cosmos from '../images/inside/cosmos.png'
import auroraGif from '../images/inside/auroragif.gif'
import satellite from '../images/inside/satel.jpg'
import third from '../images/inside/third.gif'
import gps from '../images/inside/gps.jpg'
import health from '../images/inside/health.webp'
import aviation from '../images/inside/aviation.jpg'

const ScienceInsight = () => {
  return (
    <div className='science-insight'>
      <Header />
      <div className='science-container'>
        <div className='science-container-first'>
          <div className='science-text'>
            <div className='science-container-p'>
              <h4>Space Weathered General</h4>
              <p>Space weather, driven by the Sun, can impact Earth despite the 93 million-mile distance. 
                This includes magnetic fields, radiation, and charged particles that can create auroras and disrupt satellites or cause blackouts. 
                The solar wind travels toward Earth at nearly a million miles per hour, but our magnetic field and atmosphere shield us from most particles. 
                Recognizing the threat to national infrastructure, UK industry, and the public, 
                space weather was added to the Government National Risk Register of Civil Emergencies in 2011. 
                In response, the Met Office Space Weather Operations Centre (MOSWOC) was established to provide critical information to mitigate severe space weather threats.
              </p>
            </div>
            <div className='science-container-p'>
              <h4>Geomatric Storm General Information and Effects</h4>
              <p>
                A geomagnetic storm is a major disturbance of Earth's magnetosphere that happens because 
                of a very efficient exchange of energy from the solar wind into the space environment surrounding Earth. 
                These storms can alter the behavior of the magnetosphere and ionosphere, leading to causing various things. 
                The largest storms that result from these conditions are associated with solar coronal mass ejections (CMEs), 
                where a billion tons or so of plasma from the sun, with its embedded magnetic field, arrives at Earth.
                CMEs typically take several days to arrive at Earth, but some of the most intense storms have been said to reach our planet in as short as 18 hours.
              </p>
            </div>
            <div className='science-container-p'>
              <h4>The Intensity ofa Geomagnetic</h4>
              <p>
              storm is often measured using the Kp index, which ranges from 0 to 9, with higher values
              indicating stronger storms. Storms with a Kp index of 5 or greater are classified as
              geomagnetic storms. During these storms, the magnetic field lines can become highly
              disturbed, leading to the reconfiguration of the magnetosphere.
              Geomagnetic storms are part of the broader solar-terrestrial interaction, influenced by the
              solar cycle, which lasts about 11 years and alternates between solar maximum and
              minimum phases. During solar maximum, the frequency and intensity of geomagnetic
              storms tend to increase, as the Sun is more active and emits more solar wind and CMEs.
              Understanding geomagnetic storms is crucial for space weather forecasting and for
              preparing technologies and systems that may be impacted. Researchers monitor solar
              activity using a variety of instruments, including satellites and ground-based observatories,
              to predict and mitigate the effects of these powerful space weather events. 
              </p>
            </div>
          </div>
          
          <div className="science-container-img">
            <img src={aurora} alt="random" id="lefty"/>
            <img src={cosmos} alt="random" id="righty"/>
          </div>
          
        </div>
        <div className='science-container-second'>
          <h1>Key Effects of Geomagnetic Storms on Earth</h1>
          <div className="second-lefty">
            <div className='second-left'>
              <h4>1. Auroras:</h4>
              <p>
              Geomagnetic storms can create beautiful auroras (Northern and Southern
              Lights). These occur when charged particles from the solar wind collide with
              gases in Earth’s atmosphere, causing them to glow.
              </p>
            </div>
            <div className='second-right'>
              <img src={auroraGif} alt="auroras-gif"/>
            </div>
          </div>
          <div className="second-lefty">
            <div className='second-right'>
              <img src={satellite} alt="satel" className='satel'/>
            </div>
            <div className='second-left'>
              <h4>2. Satellite Disruption:</h4>
              <p id='right-text'>
                Increased radiation can interfere with satellite electronics and sensors. This
                can lead to degradation of satellite functionality, or in severe cases,
                complete failure.
              </p>
            </div>
          </div>
          <div className="second-lefty">
            <div className='second-left'>
              <h4>3. Communication Systems:</h4>
              <p>
                High-frequency radio communications, especially those used in aviation,
                can be disrupted. This can cause problems for pilots and maritime
                navigation that rely on these systems.
              </p>
            </div>
            <div className='second-right'>
              <img src={third} alt="satel-gif" id='mesame-satel'/>
            </div>
          </div>
          <div className="second-lefty">
            <div className='second-right'>
              <img src={gps} alt="gps" className='gps'/>
            </div>
            <div className='second-left' id='gps'>
              <h4>4. GPS Accuracy:</h4>
              <p>
                The ionosphere can become disturbed, leading to inaccuracies in GPS
                signals. This can impact navigation systems for both civilian and military
                applications.
              </p>
            </div>
          </div>
          <div className="second-lefty">
            <div className='second-left'>
              <h4>5. Human Health:</h4>
              <p>
                o Increased radiation exposure during severe solar events can be a concern for
                astronauts and high-altitude flights. There is ongoing research into how these
                events might affect human health on Earth, particularly for sensitive
                populations.
              </p>
            </div>
            <div className='second-right'>
              <img src={health} alt="satel-gif"/>
            </div>
          </div>
          <div className="second-lefty">
            <div className='second-right'>
              <img src={aviation} alt="gps" className='gps'/>
            </div>
            <div className='second-left' id='gps'>
              <h4>6. Aviation Safety:</h4>
              <p>
                o Increased radiation levels at high altitudes can pose risks to airline crews
                and passengers, especially on polar routes. Airlines may reroute flights
                during severe solar events to avoid these risks.
              </p>
            </div>
          </div>
          <div className="last">
            <div className='last-second'>
              <h1>Geomagnetic Storm 2024 May</h1>
              <p>
                Recent activity on the Sun has led to significant space weather effects on Earth. 
                A large active region erupted multiple times, sending a series of solar storms our way, including coronal mass ejections (CMEs) and solar flares. 
                These charged particles interacted with Earth's atmosphere, producing auroras at lower latitudes than usual.
              </p>
              <h4>Why Was It So Intense?</h4>
              <p>We are nearing the peak of the Sun's 11-year solar cycle, which naturally leads to increased solar activity. The Sun's magnetic field has become highly entangled, resulting in large solar storms as it approaches maximum. When these magnetic lines snap, they eject large volumes of plasma and high-energy particles.</p>
              <h4>Could We Predict It?</h4>
              <p>
                While big solar storms are common near solar maximum, predicting the exact timing and magnitude remains challenging. Solar activity is closely monitored by agencies like ESA. Electromagnetic waves from solar flares travel at light speed, offering little reaction time, while CMEs take longer to reach Earth, allowing for better preparation.
              </p>
              <h4>How Did It Affect Earth?</h4>
              <p>
              Solar activity can disrupt radio communications and damage spacecraft. High-speed CMEs can induce currents in power lines and lead to stunning auroras across wide latitudes, which were notably visible during this recent event.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Quiz />
    </div>
  );
};

export default ScienceInsight;
