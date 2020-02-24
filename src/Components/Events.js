import React from 'react';
import {withRouter} from 'react-router-dom';
import Maps from './Maps';

function Event(props) {
  return(
    <div className="Event">
      <div className='container-one'>
        top
      </div>
      <div className='conatiner-two'>
        <Maps/>
        <div>Subscribe</div>
      </div>
      <footer></footer>
    </div>
  );
}

export default withRouter(Event);