import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className='toolbar__toggle-button'>
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar__logo">
        <a href="/">Rafael Ballestrin</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <HashRouter>
        <ul>
          <li><Link to='/aboutme'>About Me</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        </HashRouter>
      </div>
    </nav>
  </header>
)

export default toolbar