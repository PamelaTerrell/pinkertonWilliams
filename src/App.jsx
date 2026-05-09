import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"

import Home from './pages/Home.jsx'
import Officers from './pages/Officers.jsx'
import Events from './pages/Events.jsx'
import PurpleHeartHonoree from './pages/PurpleHeart.jsx'
import Membership from './pages/Membership.jsx'
import ChristmasPartyGallery from './pages/ChristmasPartyGallery.jsx'

import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

import usePageView from './hooks/usePageView.js'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  usePageView()

  return (
    <>
      <ScrollToTop />

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/purple-heart-honoree" element={<PurpleHeartHonoree />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/gallery/christmas-party" element={<ChristmasPartyGallery />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />

      <Analytics />
    </>
  )
}

export default App