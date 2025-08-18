import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar.jsx'
import About from './Pages/About'
import Services from './Pages/Services'
import Preloader from './Components/Preloader'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function AppContent() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 800) // 
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      <Preloader loading={loading} />
      
      
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default function App() {
  return <AppContent />
}
