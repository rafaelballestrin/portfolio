import React from 'react';
import '../Home/Home.css';
import HomeBg from './Images/homePhoto.jpg';

export default function Home() {
    return (
        <div className='main'>
            <div className='title'>
                <h4>Hello, my name is Rafael. I am a JavaScript and React Developer living in London, UK.</h4>
                <div className='image'>            
                    <img src={HomeBg} alt="Home" />
                </div>
            </div>
        </div>
    )
}