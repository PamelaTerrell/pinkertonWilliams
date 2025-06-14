import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Import Routes and Route
import Home from './pages/Home.jsx'; 
import Officers from './pages/Officers.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/officers" element={<Officers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
