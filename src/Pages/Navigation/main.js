import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Resume from '../resume';
import LandingPage from '../landingPage';
import About from '../about';
import Projects from '../projects';
import Contact from '../contact';
const Main=()=>{

    return(
        <div>
        <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/about" component={About}/>
        <Route path="/project" component={Projects}/>
        <Route path="/contact" component={Contact}/>
       

    </Switch>
   </div>

    )
  
}

export default Main;