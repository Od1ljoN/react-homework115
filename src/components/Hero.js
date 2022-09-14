import React from 'react';
import './Hero/Hero.css'

import Men1 from '../img/Men1.jpg'

const Hero = () => {
    return (
        <>
            <div className="Hero">
                <div className="text">
                    <h1>Men haqimda</h1>

                    <p className='men'>Lorem, ipsum dolor. </p>
                    <p className='game'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui perspiciatis hic tempore reprehenderit odit quas!</p>
                    <p className='bilim'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse distinctio accusamus sunt mollitia quia dicta labore corporis!</p>
                </div>

                <div className="doyra"></div>

                <div class="box">
                    <div class="content">
                        <img src={Men1} alt="error" />
                        <h2>Od1ljoN AbduLLayeV</h2>
                        <a href="#">Salom</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;