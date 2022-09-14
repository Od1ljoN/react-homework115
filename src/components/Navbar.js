import React, { useState } from "react";
import './Navbar/Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'

import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    return (
        <>
            <nav className='Navbar'>
                <h1><Link to={'/'}>Od1joN</Link></h1>
                <ul className={`${menu ? "active" : ""}  menu`}>

                    <li>Men haqimada</li>
                    <li>Sport</li>
                    <li>music</li>
                    <li>Munga yoqadi</li>
                    <li>men bilan bog'lansh</li>

                </ul>

                {
                    menu
                        ?
                        (<FaTimes className="bars" onClick={() => { setMenu(false) }} />)
                        :
                        (<FaBars className="bars" onClick={() => { setMenu(true) }} />)
                }

            </nav>
        </>
    );
};

export default Navbar;