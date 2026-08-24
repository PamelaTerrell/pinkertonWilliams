// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import RouteMetadata from './components/RouteMetadata.jsx'
import './styles.css'  // make sure this path/filename matches yours

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteMetadata />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
