import React from 'react';
import './Footer.css'
import linkedin from './Images/linkedin.svg';
import github from './Images/github.svg';
import email from './Images/email.svg';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-item'><img src={linkedin} alt="LinkedIn Logo" /></div>
      <div className='footer-item'><img src={github} alt="GitHub Logo" /></div>
      <div className='footer-item'><img src={email} alt="Email Logo" /></div>
    </div>
  )
}