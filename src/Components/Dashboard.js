import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../App.css';

const RibbonEl = ({id}) => (
  <svg id={id} className="ribbon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.22 122">
    <g id="Layer_2" data-name="Layer 2">
      <polygon className="cls-1" points="39.22 61 0 0 0 122 39.22 61"/>
    </g>
  </svg>
)

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    }
  }
  

  render(){
    return (
      <div className="Dashboard">
        <div className='dash-container'>
          <div className='container-one'>
            <img className="slide-img" 
                 src='https://i.ytimg.com/vi/FeNetcB8vuk/maxresdefault.jpg'
                 alt='group img'/>
            <div className='welcome-container'>
              <h1 id='welcome'>WELCOME</h1>
              <h1 id='welcome-to'>TO</h1>
              <h1 id='welcome-bb'>BikeBuilder</h1>
              <p className='welcome-text'>Building you quality bicycles since 2020!</p>
              <button onClick={() => this.props.history.push("/style")}>Build your bike
              </button>
            </div>
          </div>
          <div className='container-two'>
            <div className='res-box'>
              <h1 className='res-title about-title'>About</h1>
              <p className='res-text'>A long time ago in a galaxy far, far away there was a man seeking the perfect bike but not with the standard components, that came stock with a standard purchase so, he sought out for the perfect answer. In result to many years of research with the art. A website called BikeBuilder was made. Although, its skills were great, it has a lot to learn... but I believe BikeBuilder can save the world.</p>
              <button onClick={() => this.props.history.push('/Resource')}>Learn More</button>
            </div>
            <img className='about-img' 
                 src='https://i.ytimg.com/vi/hvJ8kBVMAgM/maxresdefault.jpg' alt='about-img'/>
          </div>
          <div className='container-three'>
            <nav className="ribbon ribbon-alpha" role="navigation" aria-label="breadcrumbs">

              <RibbonEl />
              <div className="ribbon-element" 
                   onClick={() => this.props.history.push("/style")}>Pick a style
                <div className="arrow-right"/>
              </div>
              <div className="ribbon-element" 
                   onClick={() => this.props.history.push("/style")}>Build your bike
                <div className="arrow-right"/>
              </div>
              <div className="ribbon-element"
                 aria-current="page">Ride!
                 <RibbonEl id="right-ribbon-svg"/>
              </div>
              


            </nav>
          </div>
        </div>
        <footer>                    
          <div onClick={() => this.props.history.push("/")} className="logo footer-logo">
            BikeBuilder
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(Dashboard);