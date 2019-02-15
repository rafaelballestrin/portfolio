import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import MenuResponsive from './MenuResponsive/MenuResponsive'
import Home from './Home/Home.js';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Tooltip from './Tootltip/Tooltip'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="App-body">
            <MenuResponsive />
            <Route exact path='/' component={Home} />
            <Route exact path='/aboutme' component={AboutMe} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/tooltip' component={Tooltip} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
