import React from 'react';
import { withRouter } from 'react-router-dom';

function SkillLevel(props) {
  return (
    <div className="SkillLevel">
      <div className='skill-card'>
        <div onClick={() => props.history.push("/cart")}>Downhill</div>
      </div>
      <div className='skill-card'>
        <div onClick={() => props.history.push("/cart")}>Enduro</div>
      </div>
      <div className='skill-card'>
        <div onClick={() => props.history.push("/cart")}>Dirt jumper</div>
      </div>
    </div>
  );
}

export default withRouter(SkillLevel);