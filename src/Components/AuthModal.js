import React, {Component} from 'react'
import axios from 'axios'

class LoginRegister extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    login = (username, password) => {
        axios.post('/auth/login', {username, password})
        .then(res => {
            console.log(res)
            this.props.history.push('/dashboard')
        })
    }

    register = (username, password) => {
        axios.post('/auth/register', {username, password})
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
                            onChange={e => this.handleChange(e)}
                        />
                    </div>
                    <div className='login-input'>
                        <input
                            name='password'
                            value={password}
                            onChange={e => this.handleChange(e)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginRegister;