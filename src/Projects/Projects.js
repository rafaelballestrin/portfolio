import React from 'react';
import Kodflix from './Images/kodflix.png';
import Koinalysis from './Images/koinalysis.png'

export default function Projects() {
    return (
        <div className='main'>
            <div className='title'>
                <h3>Recent Projects: Samples of some of my work.</h3>
            </div>
            <div className='container'>
                <div className='project1'>
                    <p>KODFLIX</p>
                    <a href='https://kodflix-rafael.herokuapp.com/' target='_blank' rel='noopener noreferrer' alt='Kodflix website link' >kodflix-rafael.herokuapp.com</a>
                    <img src={Kodflix} alt='Kodflix Project' />
                    <p>Project based on re-create Netflix </p>
                </div>
                <div className='project2'>
                    <p>KOINALYSIS</p>
                    <a href='https://koinalysis.herokuapp.com/' target='_blank' rel='noopener noreferrer' alt='Koinalysis website link' >koinalysis.herokuapp.com</a>
                    <img src={Koinalysis} alt='Koinalysis Project' />
                    <p>Team Project to display Crypto currencies prices </p>
                </div>
            </div>
        </div>
    )
}