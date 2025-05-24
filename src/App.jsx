import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import NewPost from './pages/NewPost'
import AIHelper from './pages/AIHelper'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/ai" element={<AIHelper />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}
