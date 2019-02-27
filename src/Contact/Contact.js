import React from 'react';
import Linkedin from './Images/linkedin.svg';
import Github from './Images/github.svg';
import Email from './Images/email.svg';

export default function Contact() {
    return (
        <div>
            <div className='title'>
                <h3>Contact</h3>
            </div>
            <div className='container'>
                <div className='email-img'>
                    <img src={Email} alt="Email" />
                </div>
                <div className='email-title'>
                    <p>rafaelballestrin@gmail.com</p>
                </div>
                
            </div>
        </div>
    )
}