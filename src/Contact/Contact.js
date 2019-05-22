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
                <div className='img'>
                    <img src={Email} alt="Email" />
                </div>
                <div className='title_section'>
                    <p>rafaelballestrin@gmail.com</p>
                </div>
                <div className='img'>
                    <img src={Linkedin} alt="LinkeIn" />
                </div>
                <div className='title_section'>
                    <p>https://linkedin.com/in/rafaelballestrin/</p>
                </div>
                <div className='img'>
                    <img src={Github} alt="Github" />
                </div>
                <div className='title_section'>
                    <p>https://rafaelballestrin.github.io/</p>
                </div>
                
            </div>
        </div>
    )
}