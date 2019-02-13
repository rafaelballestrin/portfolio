import React from 'react';
import '../Home/Home.css';
import HomeBg from './Images/homeBgCropS1.jpg';

export default function Home() {
    return (
        <div>
            <div>
                <h3>Hello, my name is Rafael. I am a Web Developer liviving in London, UK.</h3>
                <img src={HomeBg} alt="Home" />
            </div>
        </div>
    )
}