import React from 'react';
import { withRouter } from 'react-router-dom';

function SkillLevel(props) {
  return (
    <div className="SkillLevel">
      {/* <p> PICK YOUR STYLE </p> */}
      {/* <div className= 'skill-container'> */}
      <div className='skill-card' onClick={() => props.history.push("/cart")}>
        <img id='skill-img' src='https://img.redbull.com/images/c_crop,x_26,y_0,h_1331,w_1065/c_fill,w_1150,h_1438/q_70,f_auto/redbullcom/2015/08/21/1331742698935_4/loic-bruni-val-di-sole-dh-world-cup-2015' alt='DownHill Img'/>
        <div className='skill-title'>DOWNHILL
        
        </div>
      </div>
      <div className='skill-card' onClick={() => props.history.push("/cart")}>
        <img id='skill-img' src='https://img.redbull.com/images/c_crop,x_271,y_0,h_4047,w_3238/c_fill,w_1150,h_1438/q_70,f_auto/redbullcom/2018/12/04/f25636fc-32b2-460f-96c0-68a9c4f2ecc0/richie-rude-rides-the-rude-awakening-trail-on-burke-mountain' alt='Enduro Img'/>
        <div className='skill-title'>ENDURO</div>
      </div>
      <div className='skill-card' onClick={() => props.history.push("/cart")}>
        <img id='skill-img' src='https://s3-eu-central-1.amazonaws.com/unchain-medias/photos/eB/T1/PW-large.jpg' alt='DirtJumper Img'/>
        <div className='skill-title'>DIRT JUMPER</div>
      </div>
    </div>
  );
}

export default withRouter(SkillLevel);

{/* <div className="SkillLevel">
<div className='skill-card'>
  <div className='skill-card-top'>
    <p className='card-title'>Down Hill</p>
  </div>
  <div className='skill-card-bottom'>
    <li></li>
    <li></li>
    <li></li>
    <button onClick={() => props.history.push("/cart")}>Pick Parts</button>
  </div>
</div>
<div className='skill-card'>
  <div className='skill-card-top'>
    <p className='card-title'>Enduro</p>
  </div>
  <div className='skill-card-bottom'>
    <li></li>
    <li></li>
    <li></li>
    <button onClick={() => props.history.push("/cart")}>Pick Parts</button>
  </div>
</div>
<div className='skill-card'>
  <div className='skill-card-top'>
    <p className='card-title'>Dirt Jumper</p>
  </div>
  <div className='skill-card-bottom'>
    <li></li>
    <li></li>
    <li></li>
    <button onClick={() => props.history.push("/cart")}>Pick Parts</button>
  </div>
</div>
</div> */}