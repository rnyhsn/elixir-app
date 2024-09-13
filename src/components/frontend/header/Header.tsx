import React from 'react'
import TopSection from './TopSection'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="fixed z-50 w-full transition-all duration-600">
      <TopSection />
      <Navbar />
    </div>
  )
}

export default Header
