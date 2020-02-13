import React from 'react';
import {withRouter} from 'react-router-dom';
import '../App.css';

function Dashboard(props) {
  // let [slideIndex, setSlides] = React.useState(0);


  return (
    <div className="Dashboard">
      <div className='dash-container'>
        <div className='container-one'>
          <img id="part-img"
               src={`https://i.ytimg.com/vi/HoAXNbnHaXQ/maxresdefault.jpg`} alt='bike-part-img'/>
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
            <a className="ribbon-element" 
               onClick={() => props.history.push("/style")}>Pick a style</a>
            <a className="ribbon-element" 
               onClick={() => props.history.push("/cart")}>Build your bike</a>
            <a className="ribbon-element" 
               href="https://snowbrains.com/bike-parks/" aria-current="page">Ride!</a>
          </nav>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default withRouter(Dashboard);