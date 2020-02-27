import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../redux/userReducer';
import { withRouter } from 'react-router-dom';
import Input from './reusable/Input';
import axios from 'axios';

const AuthModal = props => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleUsernameChange = (e) => {
    setUsernameInput(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value)
  }

  const login = () => {
    axios.post('/auth/login', { username: usernameInput, password: passwordInput })
      .then(res => {
        props.getUser(res.data)
        props.history.push('/style')
        props.handleToggle();
      }).catch(err => console.log(err))
  }

  const register = () => {
    axios.post('/auth/register', { username: usernameInput, password: passwordInput })
      .then(res => {
        props.getUser(res.data)
        props.history.push('/style')
        props.handleToggle();
      }).catch(err => console.log(err))
  }

  return (
    <div className='auth'>
      <div className="close-menu" onClick={props.closeMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182.07 182.07">
          <g id="Layer_1-2" data-name="Layer 1">
            <line className="cls-1" x1="3.54" y1="3.54" x2="178.54" y2="178.54" />
            <line className="cls-1" x1="178.54" y1="3.54" x2="3.54" y2="178.54" />
          </g>
        </svg>
      </div>
      <h1>Log in</h1>
      <Input
        handleValueChange={handleUsernameChange}
        value={usernameInput}
        name="username"
        placeHolder="Username"
        autoComplete="username"
      />
      <Input
        handleValueChange={handlePasswordChange}
        value={passwordInput}
        name="password"
        type="password"
        placeHolder="Password"
        autoComplete="password"
      />
      <button className="login-btn primary-btn" onClick={login}>Login</button>
      <button className="login-btn secondary-btn" onClick={register}>Register</button>
    </div>
  )

}

export default withRouter(connect(null, { getUser })(AuthModal));