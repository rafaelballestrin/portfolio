import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../../MenuBurger/LogoRB.svg';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className='toolbar__toggle-button'>
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar__logo">
        <Link to="/"><h4>Rafael Ballestrin</h4></Link>
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