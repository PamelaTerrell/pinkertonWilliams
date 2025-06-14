import React from 'react';
import { BrowserRouter } from 'react-router-dom';  // <-- import BrowserRouter
import Home from './pages/Home.jsx'; 
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
    </BrowserRouter>
  );
}

export default App;
