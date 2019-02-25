import React from 'react';
import './AboutMe.css';
import AboutMe from './Images/AboutMe1.jpg';

export default function aboutMe() {
    return (
        <div className='main'>
            <div className='title'>
                <h3>About Me</h3>
            </div>
            <div className='container'>
                <div className='content'>
                    <p>My interest in coding started in my early teenager years, when I self-taught HTML and created a fan website to my favourite rock band. After that I also created one website for a Volkswagen car’s dealer company. Years passed and I studied business and developed a career in marketing in global companies. Now I had the opportunity to go back to coding and I’m searching for an opportunity to join a dynamic and exciting team.</p>
                </div>
                <div className='content2'>
                <img src={AboutMe} alt="About me" />
                </div>
            </div>
        </div>
    )
}