import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'


export default () => {
    return (
        <Routes>
            <Route path="/home" caseSensitive={false} element={<Home />}/>
            <Route path="/about" caseSensitive={false} element={<About />}/>
        </Routes>
    )
}