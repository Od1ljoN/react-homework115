import React from 'react'
import './sport/Sport.css'

import sport1 from '../img/sport1.png'
import sport2 from '../img/sport2.png'
import sport3 from '../img/sport3.png'
import sport4 from '../img/sport4.png'

const Sport = () => {
    return (
        <>
            <div className="Sport">
                <h1>Sport</h1>

                <div className="doira"></div>

                <div className="container">

                    {/* nth 1 */}
                    <div className="grid">
                        <div className="img_div">
                            <img src={sport1} alt="error" />
                        </div>

                        <div className="text">
                            <h1>Vlioyat</h1>

                            <p>Andijon viloyat 2006 yillar, 52 KG vazi, Ful cout
                                (full contact) yo'nalish
                            </p>

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestiae, qui nostrum incidunt in
                                mollitia. Dicta repudiandae mollitia,illum fugit nostrum reiciendis consectetur tempore provident sint
                                voluptates illo velit praesentium similique unde ea, asperiores vel eveniet? Saepe officia eaque blanditiis
                                sed, sapiente doloribus corrupti exercitationem laboriosam quidem reiciendis, quam quis!
                            </h5>

                            <h4 href="#">1 <sup>ch</sup></h4>
                        </div>
                    </div>

                    {/* nth 2 */}
                    <div className="grid">
                        <div className="img_div">
                            <img src={sport2} alt="error" />
                        </div>

                        <div className="text">
                            <h1>Respublika</h1>

                            <p>Respublika 2006 - 2005 yillar, 59 KG, Nokdaun
                                yo'nalish
                            </p>

                            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus in laudantium delectus nihil. Perferendis,
                                id rem unde hic iusto tenetur!
                            </h5>

                            <h4 href="#">3 <sup>ch</sup></h4>
                        </div>
                    </div>

                    {/* nth 3 */}
                    <div className="grid">
                        <div className="img_div">
                            <img src={sport3} alt="error" />
                        </div>

                        <div className="text">
                            <h1>Respublika</h1>

                            <p>Respublika 2006 - 2007 yillar, 55 KG, Layt-kontakt
                                yo'nalish
                            </p>

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil eum beatae enim odio velit
                                consequuntur amet harum nobis omnis!
                            </h5>

                            <h4 href="#">2 <sup>ch</sup></h4>
                        </div>
                    </div>

                    {/* nth4 */}
                    <div className="grid">
                        <div className="img_div">
                            <img src={sport4} alt="error" />
                        </div>

                        <div className="text">
                            <h1>Viloyat</h1>

                            <p>Viloyat 2006 yillar, 52 KG
                            </p>

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odio suscipit cumque optio, iusto
                                laudantium nulla debitis, numquam illo repudiandae esse iure vel aut nisi!
                            </h5>

                            <h4 href="#">2 <sup>ch</sup></h4>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sport