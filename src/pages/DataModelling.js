import React from 'react';
import './DataModelling.css';
import graph from '../images/inside/figure1.png';
import graphRed from '../images/inside/figure-red.png'
import graphBlue from '../images/inside/figure-blue.png'
import graphVid from '../images/inside/real.gif'

import Header from './Header';

const DataModelling = () => {

  return (
    <>
      <Header />
      <div className='data'>
        <div className='data-top'>
          <img src={graphVid} alt='graph-gif' />
           {/* <div className='video'>
            <iframe width="650px" height="400px" src="https://www.youtube.com/embed/tfJzVoIn7KE" title="დიდის სიაში ხარ - გაცოცხლებული შოუ #40" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
          </div> */}
          <div className='data-top-right'>
            <h1>3D Visualization of Geomagnetic Storm Dynamics</h1>
            <p>
              This code visualises the relationship between time, Kp index, and magnetic field intensity in a captivating 3D scatter plot. It uses your data to create a vibrant representation where each point reflects the magnetic field's strength over time, colored by intensity.The Kp index, indicating geomagnetic activity, is plotted along the vertical axis.
              This dynamic visualisation not only illustrates the data effectively but also allows for easy interpretation of geomagnetic storm behaviour over the specified time frame.
            </p>
          </div>
        </div>
        <div className='data-bot'>
            <div className='data-bot-left'>
              <h4>Review of Data Analysis on Geomagnetic Storms</h4>
              <p>
                In our analysis of geomagnetic storm data, we focused on the magnetic field and the Kp index, a measure of geomagnetic activity. Using mainly Python for our analysis, we aimed to observe long-term trends and relationships between these two key indicators.
                Given data included significant time period, during which we identified instances of geomagnetic storms that lasted around three days. By processing this data, we generated graphs that illustrated fluctuations in both the magnetic field and the Kp index over time. The visualizations clearly depicted the correlation between these two parameters, showing how changes in the magnetic field corresponded with variations in the Kp index during storm events.
              </p>
              <p>
                Furthermore, we performed a cross-correlation analysis between the magnetic field data and the Kp index. The results showed a strong relationship, suggesting that fluctuations in the magnetic field significantly influence the Kp index values. This finding reinforces the understanding that these two metrics are interdependent, with one often being a reliable indicator of the other.
                The combination of long-term data observation and advanced analytical techniques in Python has provided important understanding into the dynamics of geomagnetic storms. Our findings emphasize on the importance of continuous monitoring and analysis of these phenomena, as they can have significant meaning for technology and infrastructure on Earth.
                In conclusion, this study shows the effectiveness of using Python for data analysis in understanding geomagnetic storms, providing a clearer picture of their impacts and interactions. Our work contributes to the broader field of space weather research and focuses on the potential for further exploration of the relationships between various geomagnetic indicators. 
              </p>
            </div>
            <div className='data-bot-right'>
              <img src={graph} alt="graph"/>
            </div>
          </div>
          <div className='data-bottom'>
            <div className='data-bottom-right'>
              <h1>Characteristics of IMF and KP index</h1>
              <p>
              After analyzing the Power Spectral Density of both the IMF and KP index, we used a curve fitting algorithm to reveal that the power of these signals follows a 1/f² trend, where f represents the signal frequency. This finding indicates that the IMF and KP index signals exhibit characteristics of 'Brown Noise', suggesting the presence of long-range correlations in both cases.
              </p>
            </div>
            <div className='data-bottom-left'>
              <img src={graphBlue} alt="blue" />
              <img src={graphRed} alt="red" />
            </div>
          </div>
      </div>
    </>
  );
};

export default DataModelling;
