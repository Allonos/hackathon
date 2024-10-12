import './FuturePlans.css'

import manySun from '../images/manySun.jpg'
import sunMany from '../images/sunMany.jpg'
import sunGif from '../images/sun-gif.gif'
import goem from '../images/geom.webp'
import Header from './Header';

function FuturePlans() {
  return (
    <>
    <div className="main-future">
      <Header />
      <div className="future">
        <h1>Future Plans</h1>
        <div className="future-plan">
          <div className="future-left">
            <img src={sunMany} alt="sun images" className='secondary-sun'/>
            <img src={manySun} alt="sun images" className='main-sun'/>
          </div>
          <div className="future-text">
            <p>
              Advancements in data analysis for geomagnetic storm information are changing our ability to predict and respond to these events. Traditionally, analyzing geomagnetic data has been a complex process, relying on manual interpretations and limited data visualization tools.
            </p>
            <p>
              However, the integration of AI-driven automated coding systems is transforming this field.
              By utilizing AI, we can process large amounts of live data from satellites and ground-based sensors in real time. This enables quicker identification of patterns associated with geomagnetic storms, leading to more accurate predictions. Machine learning algorithms can analyze historical data alongside current metrics, improving our understanding of how these storms develop.
            </p>
            <p>
              In addition to increased predictive capabilities, AI facilitates interactive data visualization. Sophisticated graphical representations of geomagnetic data allow researchers and decision-makers to easily interpret complex information. Dynamic graphs, heat maps, and predictive models can illustrate trends and forecast potential storm events, making the data more accessible and actionable.
            </p>
          </div>
          <div className="future-right">
            <img src={sunGif} alt="sun images" id='moving-sun' />
            <img src={goem} alt="sun images" id="goem"/>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default FuturePlans;