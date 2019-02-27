import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import LeftSocial from './LeftSocial/LeftSocial';
import Toolbar from './MenuBurger/Toolbar/Toolbar';
import SideDrawer from './MenuBurger/SideDrawer/SideDrawer';
import Backdrop from './MenuBurger/Backdrop/Backdrop';
import Home from './Home/Home.js';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="App">
        <main>
          <HashRouter>
            <div className="App-body">
              <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
              <SideDrawer show={this.state.sideDrawerOpen} />
              {backdrop}
              <LeftSocial />
              <Route exact path='/' component={Home} />
              <Route exact path='/aboutme' component={AboutMe} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/contact' component={Contact} />
              <Footer />
            </div>
          </HashRouter>
        </main>
      </div>
    );
  }
}

export default App;
