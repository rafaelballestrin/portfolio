import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <HashRouter>
      <ul>
        <li><Link to='/portfolio'>Home</Link></li>
        <li><Link to='/aboutme'>About Me</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      </HashRouter>
    </nav>
  )
}

export default sideDrawer