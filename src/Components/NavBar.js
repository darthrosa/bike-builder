import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getUser } from '../redux/userReducer';
import AuthModal from './AuthModal';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          showModal: false
        }
      }

      userAuthenticated = () => {
        if(this.props.userReducer.user.username){
            this.props.history.push('/style')
        } else {
            this.handleToggle()
            console.log(this.state.showModal)
        }
      }

      handleToggle = () => {
        this.setState({showModal: !this.state.showModal})
      }

      closeMenu = () => {
        this.setState({showModal: false})
      }


    render(){
        if (this.props.location.pathname === "/style" || this.props.location.pathname === "/bike/1" || this.props.location.pathname === "/bike/2" || this.props.location.pathname === "/bike/3" || this.props.location.pathname === "/cart"){
            return <></>;
        } else {
            return (
            <div>
                <div className="nav-bar">
                    <div onClick={() => this.props.history.push("/")} className="logo">
                        BikeBuilder
                    </div>
                    <nav className="nav-links">
                        {/* <div className='link' onClick={() => this.props.history.push("/events")}>Events</div> */}
                        <div className='link' onClick={() => this.props.history.push("/resource")}>
                            Resources
                        </div>
                        <button onClick={() => this.userAuthenticated()} id="build-button">Build</button>
                    </nav>
                </div>
                {this.state.showModal ? (
                    <React.Fragment>
                      <div className='modal-container'>
                          <div id='auth-modal'>
                              <AuthModal closeMenu={this.closeMenu} handleToggle={this.handleToggle}/>
                          </div>
                      </div>
                      <div onClick={this.closeMenu} className="image-cover fixed"></div>
                    </React.Fragment>
                    
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