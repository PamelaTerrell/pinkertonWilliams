import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Officers from './pages/Officers.jsx';
import Events from './pages/Events.jsx';
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

      </Routes>
      <Footer /> {/* This ensures the footer is visible on all pages */}
    </BrowserRouter>
  );
}

export default App;
