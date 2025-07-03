import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";

import Home from './pages/Home.jsx';
import Officers from './pages/Officers.jsx';
import Events from './pages/Events.jsx';
import PurpleHeartHonoree from './pages/PurpleHeart.jsx';

import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/purple-heart-honoree" element={<PurpleHeartHonoree />} />

      </Routes>
      <Footer /> 
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
