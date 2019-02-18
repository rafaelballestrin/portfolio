import React from 'react';
import '../Projects/Projects.css';
import Kodflix from './Images/kodflix.png';
import Koinalysis from './Images/koinalysis.png'

export default function Projects() {
    return (
        <div>
            <div className='projectTitle'>
                <h3>Projects</h3>
            </div>
            <div className='container'>
                <div className='project1'>
                    <p>KODFLIX</p>
                    <p>Project based on re-create Netflix </p>
                    <img src={Kodflix} alt='Kodflix Project' />
                </div>
                <div className='project2'>
                    <p>KOINALYSIS</p>
                    <p>Team Project to display Crypto currencies prices </p>
                    <img src={Koinalysis} alt='Koinalysis Project' />
                </div>
            </div>
        </div>
    )
}