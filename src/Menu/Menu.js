import React from 'react';
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <div>
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/aboutme'>About Me</Link></div>
                <div><Link to='/projects'>Projects</Link></div>
                <div><Link to='/contact'>Contact</Link></div>
            </div>
        </div>
    )
}