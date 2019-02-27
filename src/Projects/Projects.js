import React from 'react';
import Kodflix from './Images/kodflix.png';
import Koinalysis from './Images/koinalysis.png'

export default function Projects() {
    return (
        <div className='main'>
            <div className='title'>
                <h3>Recent Projects: Samples of some of my work from the past year.</h3>
            </div>
            <div className='container'>
                <div className='project1'>
                    <p>KODFLIX</p>
                    <img src={Kodflix} alt='Kodflix Project' />
                    <p>Project based on re-create Netflix </p>
                </div>
                <div className='project2'>
                    <p>KOINALYSIS</p>
                    <img src={Koinalysis} alt='Koinalysis Project' />
                    <p>Team Project to display Crypto currencies prices </p>
                </div>
            </div>
        </div>
    )
}