import React from 'react'
import './music/Music.css'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import NF from '../img/NF1.jpg'

import Oxxxy from '../img/oxxxy.jpg';
import Bhad from '../img/bhad.jpeg';

const Music = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <>
            <div className='Music'>
                <div className="slider-div">

                    <Slider {...settings}>
                        <div className='slider'>
                            <img className='img' src={NF} alt="error" />
                            <div className="text">
                                <h3>qo'shiqlarni eshtish uchun</h3>
                                <Link to="/nf">NF</Link>
                                <h3>bosing</h3>
                            </div>
                        </div>


                        <div className='slider'>
                            <Link to="/Cardi">Cardi</Link>
                        </div>


                        <div className='slider'>
                            <img className='img' src={Oxxxy} alt="error" />

                            <div className="text">
                                <h3>qo'shiqlarni eshtish uchun</h3>
                                <Link to="/Oxxxy"><h2>oxxxy</h2></Link>
                                <h3>bosing</h3>
                            </div>
                        </div>


                        <div className='slider'>
                            <img className='img' src={Bhad} alt="error" />

                            <div className="text">
                                <h3>qo'shiqlarni eshtish uchun</h3>
                                <Link to='/Bhad'><h2>bhad bhabie</h2></Link>
                                <h3>bosing</h3>
                            </div>
                        </div>


                        <div className='slider'>
                            <h3>5</h3>
                        </div>


                        <div className='slider'>
                            <h3>6</h3>
                        </div>


                        <div className='slider'>
                            <h3>7</h3>
                        </div>


                        <div className='slider'>
                            <h3>8</h3>
                        </div>


                        <div className='slider'>
                            <h3>9</h3>
                        </div>
                    </Slider>

                </div>
            </div>
        </>
    )
}

export default Music