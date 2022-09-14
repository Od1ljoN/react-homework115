import React from "react";
import './oxxxy/Oxxxy.css'
import Slider from 'react-slick';

const Oxxxy = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    return (
        <>
            <div className="oxxxy">
                <h1>Oxxxymiron</h1>

                <Slider {...settings}>

                </Slider>
            </div>
        </>
    )
}

export default Oxxxy;