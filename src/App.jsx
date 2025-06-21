import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cart from './components/Cart'
import Category from './components/Category'
import Popular from './components/Popular'
import Recent from './components/Recent'

const App = () => {
  return (
    <>
      <main className='flex'>
      
      <div className='flex-[20%] hidden lg:block'>
        <Sidebar />
      </div>

      <div className='flex-[60%] overflow-hidden bg-gray-100'>
        <Navbar />
        <Hero />
        <Category />
        <Popular />
        <Recent />
      </div>

      <div className='flex-[20%] hidden lg:block'>
        <Cart />
      </div>


      </main>
    </>
  )
}

export default App
