import React from 'react';
import { withRouter } from 'react-router-dom';

function SkillLevel(props) {
  return (
    <div className="SkillLevel">
        <div onClick={() => props.history.push("/cart")}>Starter</div>
        <div onClick={() => props.history.push("/cart")}>Intermediate</div>
        <div onClick={() => props.history.push("/cart")}>Pro</div>
    </div>
  );
}

export default withRouter(SkillLevel);