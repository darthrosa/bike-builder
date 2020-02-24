import React from 'react';
import axios from 'axios';

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
    const {email} = this.state
    axios.post('/api/email', {email}).then(res => {
      this.setState({
        email: ''
      })
    })
  }

  
  render(){
    return (
      <div className="Resources">
        <div className='resources-container'>
          <div style={styles.resContainer}>
            <div id='res-vid'>
              <iframe title='bikeFrame' src="https://www.youtube.com/embed/csYlxj_-ZRI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" rel='preload' allowfullscreen></iframe>
            </div>
            <div className='res-box'>
              <p>FIND YOU STYLE</p>
              <p>Buying a mountain bike can be confusing at the best of times, thankfully US tech editor Josh Patterson is here to run you through what you need to know.</p>
              <a href='https://www.rei.com/learn/expert-advice/mountain-bike.html' target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
          </div>
          <div className='res-container-bikes'>
            <div className='bike-container'>
              <img className='bike-img' src='https://www.polygonbikes.com/wp-content/uploads/2018/03/SISKIU_T8_LF.png' alt='bike'/>
              <img className='bike-img'
                 src='https://www.polygonbikes.com/wp-content/uploads/2018/03/COLLOSUS_DH9_TOSCA_RF.png' alt='bike'/>
              <img className='bike-img' src='https://i.pinimg.com/originals/64/51/70/645170662560558ca4b88dfd449b7d77.png' alt='bike'/>
            </div>
          </div>
          <div style={styles.resContainer}>
            <div className='res-box'>
              <p>Title</p>
              <p>Text</p>
              <a href='https://forums.mtbr.com/forum.php' target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
            <img className='res-img'
               src='https://img.redbull.com/images/q_70,f_auto/redbullcom/2014/02/10/1331632826660_2/mountain-bikers-fairclough-semenuk-and-vink-in-pine-valley-2013..jpg'
               alt='res-img'/>
          </div>
          <div style={styles.resContainer}>
            <div style={styles.imgBox}></div>
            <div style={styles.emailBox}>
              <input style={styles.input} placeholder='enter email' type="text" name='email' value={this.state.email} onChange={this.handleInput} />
              <p style={styles.p}>Text</p>
              <button style={styles.button} onClick={this.sendEmail}>Submit</button>
            </div>
          </div>
        </div>
        <footer></footer>
     </div>
    );
  }
}

export default Resources;


const styles = {
  resContainer: {
    height: '60vh',
    width: '100%',
    display: 'flex'
  },
  imgBox: {
    background: '#013A6B',
    backgroundImage: '-webkit-linear-gradient(30deg, #013A6B 50%, #004E95 50%)',
    width: '55vw'
  },
  emailBox: {
    background: '#333333',
    width: '45vw',
    alignItems: 'center'
  },
  input: {
    border: '1px solid #ccc',
    fontSize: '14px',
    textTransform: 'lowercase'
  },
  p: {
    color: '#FFF',
    fontSize: '20px'
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
  }

}