import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getUser } from '../redux/reducer';
import AuthModal from './AuthModal';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          showModal: false
        }
      }

      userAuthenticated = () => {
        console.log(this.props)
        if(this.props.user.username){
            this.props.history.push('/style')
        } else {
            console.log('hit else')
            this.handleToggle()
            console.log(this.state.showModal)
        }
      }

      handleToggle = () => {
        this.setState({showModal: !this.state.showModal})
      }


    render(){
        console.log(this.props);
        if (this.props.location.pathname === "/style" || this.props.location.pathname === "/cart") {
            return <></>;
        } else {
            return (
            <div>
                <div className="nav-bar">
                    <div onClick={() => this.props.history.push("/")} className="logo">
                        BikeBuilder
                    </div>
                    <nav className="nav-links">
                        <div className='link' onClick={() => this.props.history.push("/about")}>About</div>
                        <div className='link' onClick={() => this.props.history.push("/resource")}>
                            Resources
                        </div>
                        <button onClick={() => this.userAuthenticated()} id="build-button">Build</button>
                    </nav>
                </div>
                {this.state.showModal ? (
                    <div className='modal-container'>
                        <div id='auth-modal'>
                            <AuthModal handleToggle={this.handleToggle}/>
                        </div>
                    </div>
                    ) : null
                }
            </div>
            );
        }
    }
}

const mapStateToProps = reduxState => {
    return reduxState;
}

export default withRouter(connect(mapStateToProps, {getUser})(NavBar));