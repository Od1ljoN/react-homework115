import React from 'react'
import img from '../img/NF2.jpg'
import './nf/NF.css'

import { FaInstagram } from 'react-icons/fa'
import { BsFacebook, BsYoutube } from 'react-icons/bs'

const Nf = () => {
    return (
        <>
            <div className="NF">

                <div className="hero">

                    <div className="left">
                        <h1>NF</h1>
                        <div className="icons">
                            <FaInstagram className='icon' />
                            <BsFacebook className='icon' />
                            <BsYoutube className='icon' />
                        </div>
                    </div>


                    {/* center.boshi */}
                    <div className="centr">
                        <div className="center-left">
                            <h2>/ 01</h2>
                            <div className="chiziq"></div>

                            <div className="text">
                                <h2>King rap</h2>
                                <p>use lekin redal music ancha mashxur</p>
                            </div>
                        </div>
                        <div className="center-right">
                            <h1>USE in michiga 1991</h1>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Velit officia maxime voluptatem amet fuga
                                dolor iste a, cumque eligendi tempora?
                            </p>
                        </div>
                    </div>
                    {/* center.oxiri */}

                    <div className="past">

                        <div className="chap">

                            <h1>NF real music</h1>

                            <div className="bosh">
                                <p>Lorem ipsum dolor sit, amet</p>
                                <h2>Lorem ipsum dolor</h2>
                            </div>

                            <div className='markaz'>
                                <p>Lorem ipsum dolor sit amet</p>
                                <h2>Lorem ipsum, dolor</h2>
                            </div>
                        </div>

                        <div className="ong">
                            <img src={img} alt="error" />

                            <div className="text">
                                <h2>NF real music</h2>

                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

                                <h5>real music</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nf