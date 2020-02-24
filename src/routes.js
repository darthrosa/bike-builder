import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import SkillLevel from './Components/SkillLevel';
import PickCart from './Components/PickCart';
import Resources from './Components/Resources';
import Events from './Components/Events';
import UserCart from './Components/UserCart'



export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/style' component={SkillLevel}/>
        <Route path='/resource' component={Resources}/>
        <Route path='/events' component={Events}/>
        <Route path='/bike/:id' component={PickCart}/>
        <Route path='/cart' component={UserCart}/>
    </Switch>
)