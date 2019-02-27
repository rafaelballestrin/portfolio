import React from 'react';
import HomeBg from './Images/homePhoto.jpg';

export default function Home() {
    return (
        <div>
            <div className='main'>
                <div className='title'>
                    <h3>Hello, my name is Rafael.
                I am a JavaScript and React Developer living in London, UK.</h3>
                    <div className='image'>
                        <img src={HomeBg} alt="Home" />
                    </div>
                </div>
            </div>
        </div>
    )
}