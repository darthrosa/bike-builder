import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getUser} from '../redux/userReducer';
import axios from 'axios';


class Account extends Component{
    constructor(){
        super()
        this.state = {
            input: '',
            currentPassword: '',
            newPassword: '',
            passwordToggle: false
        }
    }

    handleInput = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    checkPassword = () => {
        const {currentPassword, passwordToggle} = this.state
         axios.put('/auth/checkPassword', {currentPassword}).then(res => {
            this.setState({
                input: '',
                currentPassword: '',
                passwordToggle: !passwordToggle
            })
        })
    }

    changePassword = () => {
        const {newPassword} = this.state
        axios.post('/auth/newPassword', {newPassword}).then(res => {
            this.setState({
                input: '',
                newPassword: ''
            })
            window.alert('Password Updated')
        })
    }

    render(){
        return(
            <div className='profile-form'>
                <div className='settings-form'>
                    <div className='profile-name'>
                        <div className='profile'>{this.props.userReducer.user.username}
                        </div>       
                    </div> 
                    <div className='profile_change_container'>
                         {!this.state.passwordToggle ? (
                        <div>
                            <input onChange={(e) => this.handleInput(e)}   
                                placeholder='Current Password'
                                className= 'profile_change_inputs' 
                                name='currentPassword' 
                                value={this.state.currentPassword}/>
                            <button onClick={() => this.checkPassword()}>Check</button>
                        </div>
                         ) : (
                        <div>
                            <input onChange={(e) => this.handleInput(e)}
                                placeholder='New Password'   
                                name='newPassword' 
                                value={this.state.newPassword}/>
                            <button onClick={() => this.changePassword()}>Submit</button>
                        </div>
                         )}
                    </div>                
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return reduxState;
}

export default withRouter(connect(mapStateToProps, { getUser })(Account));