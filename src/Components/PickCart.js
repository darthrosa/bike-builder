import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../redux/reducer';
import {withRouter} from 'react-router-dom';

function PickCart(props) {
  return (
    <div className="Cart">
      <header className='cart-nav'>
        <div className='category'>
          <div className='link'>Frame</div>
          <div className='link'>Tires</div>
          <div className='link'>Handle Bars</div>
          <div className='link'>Forks</div>
          <div className='link'>Pedals</div>
        </div>
        <button onClick={() => axios.post('/auth/logout')
        .then( res => props.getUser(res.data), props.history.push('/'))} className='logout'>Logout</button>
      </header>
        PickCart
    </div>
  );
}

export default withRouter(connect(null, {getUser})(PickCart))