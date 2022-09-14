import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './index.css'


import Navbar from './components/Navbar';
import Nf from './pages/Nf'
import Cardi from './pages/Cardi';
import Oxxxy from './pages/Oxxxy.js'
import Asos from './pages/Asos';
import Bhad from './pages/Bhad';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Asos />} />
                <Route path='Cardi' element={<Cardi />} />
                <Route path='oxxxy' element={<Oxxxy />} />
                <Route path='nf' element={<Nf />} />
                <Route path='Bhad' element={<Bhad />} />
            </Routes>

        </div>
    )
};

export default App;

// Hero 360
// Navbar 153
// Sport 697