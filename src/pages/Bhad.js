import React from 'react'
import './bhad/Bhad.css'
import Slider from 'react-slick'
import ReactAudioPlayer from 'react-audio-player';


import img1 from '../img/Bhad1.jpg'
import img2 from '../img/Bhad2.jpg'
import img3 from '../img/Bhad3.jpg'
import img4 from '../img/Bhad4.jpg'
import img5 from '../img/Bhad5.jpg'


import mp3 from '../music/Bhad1.mp3'


const Bhad = () => {


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,

        initialSlide: 0,

        verticalSwiping: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="Bhad">
                <div className="left">

                    <div className="text">
                        <h1>bhad bhabie</h1>

                        <ReactAudioPlayer controls src={mp3} />

                        <h2>Amerikan repper</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="img_div">
                        <img src={img1} alt="error" />
                    </div>
                </div>

                <div className="right">

                    <div className="slider">
                        <Slider {...settings} >
                            <div className='music'>
                                <div className="imgdiv">
                                    {/* <img src={img3} alt="error" /> */}
                                </div>

                                <div className="mp3">

                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bhad