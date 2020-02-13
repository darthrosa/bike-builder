import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import SkillLevel from './Components/SkillLevel';
import PickCart from './Components/PickCart';
import HowTo from './Components/HowTo';
import Resources from './Components/Resources';


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/style' component={SkillLevel}/>
        <Route path='/howto' component={HowTo}/>
        <Route path='/resource' component={Resources}/>
        <Route path='/cart/:id' component={PickCart}/>
    </Switch>
)