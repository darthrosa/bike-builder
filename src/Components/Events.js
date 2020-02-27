import React from 'react';
import {withRouter} from 'react-router-dom';
// import Maps from './Maps';

function Event(props) {
  return(
    <div className="Event">
      <div className='container-one'>
        <div className="evt-left">Info
            <div className='evt-box'>
              <h1 className='evt-title'>2020 Events</h1>
              <ul>
                <li>Salt Lake City, UT - 9Line SlopeStyle</li>
                <li>Moab, UT - Downhill Derby (Moab Rim)</li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
        </div>
        <div className="evt-right">
          {/* <Maps/> */}
        </div>
      </div>
      {/* <footer>                    
          <div onClick={() => props.history.push("/")} className="logo footer-logo">
            BikeBuilder
          </div>
        </footer> */}
    </div>
  );
}

export default withRouter(Event);