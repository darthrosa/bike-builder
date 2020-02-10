import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import SkillLevel from './Components/SkillLevel';
import PickCart from './Components/PickCart';


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/skill' component={SkillLevel}/>
        {/* <Route/>
        <Route/> */}
        <Route path='/cart' component={PickCart}/>
    </Switch>
)