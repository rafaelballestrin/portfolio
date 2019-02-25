import React from 'react';
import Email from './Images/contact.svg'

export default function Contact() {
    return (
        <div>
            <div>
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