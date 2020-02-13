import React, {Component} from 'react'
import axios from 'axios'

const AuthModal = props => {
const [usernameInput, setUsernameInput] = useState('');
const [passwordInput, setPasswordInput] = useState('');

    login = (username, password) => {
        axios.post('/auth/login', {username: usernameInput, password: passwordInput})
        .then(res => {
            console.log(res)
        })
    }

    register = (username, password) => {
        axios.post('/auth/register', {username: usernameInput, password: passwordInput})
        .then(res => {
            console.log(res)
            this.props.history.push('/dashboard')
        })
    }

    render(){
        const {username, password} = this.state
        return(
            <div className='landing-container'>
                <div className='landing-card'>
                    <div className='login-input'>
                        <input
                            name='username'
                            value={username}
                            onChange={e => this.setUsernameInput(e.target.value)}
                        />
                    </div>
                    <div className='login-input'>
                        <input
                            name='password'
                            value={password}
                            onChange={e => this.setPasswordInput(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginRegister;