import React from 'react';
import { withRouter } from 'react-router-dom';

function SkillLevel(props) {
  return (
    <div className="SkillLevel">
      <div className='skill-card' onClick={() => props.history.push("/cart")}>
        <div className='image-cover'></div>
        <img id='skill-img' src='https://img.redbull.com/images/c_crop,x_26,y_0,h_1331,w_1065/c_fill,w_1150,h_1438/q_70,f_auto/redbullcom/2015/08/21/1331742698935_4/loic-bruni-val-di-sole-dh-world-cup-2015' alt='DownHill Img'/>
        <h1 className='skill-title'>DOWNHILL</h1>
      </div>
      <div className='skill-card' onClick={() => props.history.push("/cart")}>
        <div className='image-cover'></div>
        <img id='skill-img' src='https://img.redbull.com/images/c_crop,x_271,y_0,h_4047,w_3238/c_fill,w_1150,h_1438/q_70,f_auto/redbullcom/2018/12/04/f25636fc-32b2-460f-96c0-68a9c4f2ecc0/richie-rude-rides-the-rude-awakening-trail-on-burke-mountain' alt='Enduro Img'/>
        <h1 className='skill-title'>ENDURO</h1>
      </div>
      <div className='skill-card' onClick={() => props.history.push("/cart")}>
      <div className='image-cover'></div>
        <img id='skill-img' src='https://s3-eu-central-1.amazonaws.com/unchain-medias/photos/eB/T1/PW-large.jpg' alt='DirtJumper Img'/>
        <h1 className='skill-title'>DIRT JUMPER</h1>
      </div>
    </div>
  );
}

export default withRouter(SkillLevel);