import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import SkillLevel from './Components/SkillLevel';
import About from './Components/About';
import PickCart from './Components/PickCart';
import Resources from './Components/Resources';



export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/style' component={SkillLevel}/>
        <Route path='/resource' component={Resources}/>
        <Route path='/about' component={About}/>
        <Route path='/cart/' component={PickCart}/>
    </Switch>
)