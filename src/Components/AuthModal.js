import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../redux/reducer';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

const AuthModal = props => {
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const login = () => {
        axios.post('/auth/login', {username: usernameInput, password: passwordInput})
        .then(res => { props.getUser(res.data)
            props.history.push('/style')
            props.handleToggle();
        }).catch(err => console.log(err))
    }

     const register = () => {
        axios.post('/auth/register', {username: usernameInput, password: passwordInput})
        .then(res => { props.getUser(res.data)
            props.history.push('/style')
        }).catch(err => console.log(err))
    }

    return (
        <div className='auth-modal'>
            <div>WAIT YOU GOTTA LOGIN YO!</div>
            <input
                value={usernameInput}
                placeholder='Username'
                onChange={(e) => setUsernameInput(e.target.value)}/>
            <input
                type='password'
                value={passwordInput}
                placeholder='Password'
                onChange={(e) => setPasswordInput(e.target.value)}/>
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
        </div>
    )

}

export default withRouter(connect(null, {getUser})(AuthModal));