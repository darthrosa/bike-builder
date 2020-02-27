import React from 'react';
import axios from 'axios';
import jss from 'jss'
import preset from 'jss-preset-default'
import color from 'color'

class Resources extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
    }
  }

  handleInput = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  sendEmail = () => {
    const { email } = this.state
    console.log(email)
    axios.post('/api/email', { userEmail: email }).then(res => {
      window.alert('Email Sent')
      this.setState({
        email: ''
      })
    })
  }


  render() {
    return (
      <div className="Resources">
        <div className='resources-container'>
          <div style={styles.resContainer}>
            <div id='res-vid'>
              <iframe title='bikeFrame' src="https://www.youtube.com/embed/csYlxj_-ZRI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" rel='preload' allowfullscreen></iframe>
            </div>
            <div className='res-box'>
              <h1 className='res-title'>Find Your Style</h1>
              <p className='res-text'>Buying a mountain bike can be confusing at the best of times. To figure out what type of bike is right for you, your first consideration is to know where you'll be riding. Are you boosting those jumps, bombing dirt trails or both? Some bicycles are made specifically for a particular kind of riding surface, while others are versatile enough that, perhaps with a quick tire change, they can be ridden in more than one category.</p>
              <a href='https://www.rei.com/learn/expert-advice/mountain-bike.html' target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
          </div>
          <div className='res-container-bikes'>
            <div className='bike-container'>
              <img className='bike-img' src='https://www.polygonbikes.com/wp-content/uploads/2018/03/SISKIU_T8_LF.png' alt='bike' />
              <img className='bike-img'
                src='https://www.polygonbikes.com/wp-content/uploads/2018/03/COLLOSUS_DH9_TOSCA_RF.png' alt='bike' />
              <img className='bike-img' src='https://i.pinimg.com/originals/64/51/70/645170662560558ca4b88dfd449b7d77.png' alt='bike' />
            </div>
          </div>
          <div style={styles.resContainer}>
            <div className='res-box'>
              <h1 className='res-title'>Community</h1>
              <p className='res-text'>We’ll be the first to admit it. We love bicycles of all kinds. As well as the many amazing activities one can do, and places one can go, on a bike. And chances are, you may hold a similar point of view if you are building your own bike. While we pride ourselves on giving you amazing product and information about biking, there are a number of other great resources out there as well. So join the community and find out more.</p>
              <a href='https://forums.mtbr.com/forum.php' target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
            <img className='res-img'
              src='https://img.redbull.com/images/q_70,f_auto/redbullcom/2014/02/10/1331632826660_2/mountain-bikers-fairclough-semenuk-and-vink-in-pine-valley-2013..jpg'
              alt='res-img' />
          </div>
          <div style={styles.resContainer}>
            <img style={styles.imgBox} src='https://goridebicycles.com/wp-content/uploads/2018-Cannondale-Trigger-banner-2000x780-c-center.jpg' alt='img'/>
            <div style={styles.emailBox}>
              <p style={styles.p}>Sign up to our news letter for News, Events, and Deals!</p>
              <input style={styles.input} placeholder='Enter Email' type="text" name='email' value={this.state.email} onChange={this.handleInput} />
              <button onClick={this.sendEmail}>Subscribe</button>
            </div>
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

export default Resources;

jss.setup(preset())

const styles = {
  resContainer: {
    height: '60vh',
    width: '100%',
    display: 'flex'
  },
  imgBox: {
    background: '#013A6B',
    width: '55vw'
  },
  emailBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0px 45px 0px 75px',
    color: '#FFF',
    background: '#333333',
    width: '45vw'
  },
  input: {
    height: '25px',
    width: '300px',
    border: '1px solid #ccc',
    fontSize: '20px',
    textAlign: 'center',
    margin: '40px'
  },
  p: {
    color: '#FFF',
    fontSize: '25px'
  },
  button: {
    fontWeight: '700',
    fontSize: '14px',
    border: 'none',
    padding: '9px 15px',
    background: '#EF233C',
    color: '#FFF',
    textTransform: 'uppercase',
    cursor: 'pointer'
  },
  '&:hover': {
    color: '#EF233C',
    background: color('transparent'),
    border: '2px solid',
    transition: '0.1s ease-in-out'
  }

}