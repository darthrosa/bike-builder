import React from 'react';

function Resources() {
  return (
    <div className="Resources">
      <div className='resources-container'>
        <div className='res-container'>
          <div id='res-vid'>
            <iframe src="https://www.youtube.com/embed/csYlxj_-ZRI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className='res-box'>
            <p>FIND YOU STYLE</p>
            <p>Buying a mountain bike can be confusing at the best of times, thankfully US tech editor Josh Patterson is here to run you through what you need to know.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className='res-container-bikes'>
          <div className='bike-container'>
            <div>DownHill</div>
            <div>Enduro</div>
            <div>Dirt Jumper</div>
          </div>
        </div>
        <div className='res-container'>
          <div className='res-box'>
            <p>Title</p>
            <p>Text</p>
            <button>Learn More</button>
          </div>
          <img className='res-img'
               src='https://img.redbull.com/images/q_70,f_auto/redbullcom/2014/02/10/1331632826660_2/mountain-bikers-fairclough-semenuk-and-vink-in-pine-valley-2013..jpg'
               alt='res-img'/>
        </div>
        <div className='res-container'>
          <div id='res-img-split'></div>
          <div className='res-box'>
            <p>Title</p>
            <p>Text</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default Resources;