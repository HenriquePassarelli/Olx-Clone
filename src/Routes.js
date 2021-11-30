import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Home />}/>
            <Route exact path="/about" caseSensitive={false} element={<About />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}