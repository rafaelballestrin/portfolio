import React from 'react';
import '../Home/Home.css';
import HomeBg from './Images/homePhoto.jpg';

export default function Home() {
    return (
        <div>
            <div>
                <h4>Hello, my name is Rafael. I am a Web Developer liviving in London, UK.</h4>
                <img src={HomeBg} alt="Home" />
            </div>
        </div>
    )
}