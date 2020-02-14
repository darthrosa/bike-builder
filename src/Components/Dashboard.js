import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
// import AuthModal from './AuthModal';
import '../App.css';

class Dashboard extends Component {
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
    return (
      <div className="Dashboard">
        <div className='dash-container'>
          <div className='container-one'>
            <img id="part-img"
               src={`https://papers.co/wallpaper/papers.co-me59-yosemite-snow-dark-mountain-nature-40-wallpaper.jpg`} alt='bike-part-img'
               />
          </div>
          <div className='container-two'>
            <div className='about-box'>
              <p>Title</p>
              <p>Text</p>
              <button>Learn More</button>
            </div>
            <img className='about-img' 
                 src='https://i.ytimg.com/vi/hvJ8kBVMAgM/maxresdefault.jpg' alt='about-img'/>
          </div>
          <div className='container-three'>
            <nav className="ribbon ribbon-beta" role="navigation" aria-label="breadcrumbs">
              <div className="ribbon-element" 
                   onClick={() => this.props.history.push("/style")}>Pick a style</div>
              <div className="ribbon-element"
                   onClick={() => this.props.history.push("/style")}>Build your bike</div>
              <div className="ribbon-element" 
                   href="https://snowbrains.com/bike-parks/" aria-current="page">Ride!</div>
            </nav>
          </div>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default withRouter(Dashboard);