import { useState, useEffect, useRef } from 'react';
import {Routes, Route, } from 'react-router-dom';
//import About from '../components/about';
//import Team from '../components/team';

function App() {
    <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/pitch' element={<Pitch />} />
        <Route path='/roadmap' element={<Roadmap />} />
    </Routes>
}