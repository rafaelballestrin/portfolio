import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MenuResponsive.css'

export default class NavContainer extends Component {

    render() {
        return (
            <div className="nav_container">
                <div className="site_title"></div>
                {this.renderNavigation()}
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false
        };
    }

    handleResize() {
        this.setState({ windowWidth: window.innerWidth });
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    navigationLinks() {
        return [
            <div className='menu-container'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/aboutme'>About Me</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/tooltip'>Tooltip</Link></li>
            </ul>
            </div>
        ];
    }

    renderMobileNav() {
        if (this.state.mobileNavVisible) {
            return this.navigationLinks();
        }
    }

    handleNavClick() {
        if (!this.state.mobileNavVisible) {
            this.setState({ mobileNavVisible: true });
        } else {
            this.setState({ mobileNavVisible: false });
        }
    }

    renderNavigation() {
        if (this.state.windowWidth <= 1080) {
            return [
                <div className="mobile_nav">
                    <p onClick={this.handleNavClick.bind(this)}><i class="material-icons">view_headline</i></p>
                    {this.renderMobileNav()}
                </div>
            ];
        } else {
            return [
                <div key={7} className="nav_menu">
                    {this.navigationLinks()}
                </div>
            ];
        }
    }
}