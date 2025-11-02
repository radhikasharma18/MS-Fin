import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from '../src/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Contact from './components/Contactus'
import Services from './components/Services'
import Career from './components/Career'

function App() {
  

  return (
    <>
    <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/careers" element={<Career />} />
    </Routes>
      
    </>
  )
}

export default App
