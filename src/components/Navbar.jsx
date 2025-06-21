import React, { useState } from 'react'
import search from '../assets/search.png'
import { BiMenu } from 'react-icons/bi'
import Sidebar from './Sidebar'
import Cart from './Cart'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
    <div className='p-8 w-full'>
       <div className='flex justify-between lg:items-center lg:flex-row flex-col gap-5'>

        <div className='flex justify-between items-center'>
           <p className='font-bold text-[20px]'>Hello, Jesutofunmi</p>
           <div className='flex items-center gap-3 lg:hidden '>

          <div onClick={() => setIsMenuOpen(true)} className=''> 
            <img className='w-[20px]' src="https://cdn-icons-png.freepik.com/256/10408/10408119.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid" alt="" />
           </div>

           <div onClick={() => setIsCartOpen(true)}>
            <img className='w-[20px]' src="https://cdn-icons-png.freepik.com/256/649/649931.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid" alt="" />
           </div>

         </div>

        </div>

        <div className='flex gap-3 items-center rounded bg-white p-2'>
            <img className='w-[15px]' src={search} alt="" />
            <input type="text"  placeholder='what do you want to eat today...' className='outline-none border-none flex-1 placeholder:text-gray-400 placeholder:text-[10px]'/>
        </div>

        
       </div>
    </div>

    <div onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"} bg-gray-200 h-full w-full fixed top-0 right-0 left-0 bottom-0 duration-500 z-40 delay-75 ease-in-out transition-opacity backdrop-blur-3xl blur-3xl`}>

     </div>

         <div onClick={() => setIsCartOpen(false)} className={`${isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"} bg-gray-200 h-full w-full fixed top-0 right-0 left-0 bottom-0 duration-500 z-40 delay-75 ease-in-out transition-opacity backdrop-blur-3xl blur-3xl`}>

     </div>

    {/*navbar for smaller screens */}
    <div className={`${isMenuOpen ? "opacity-100 w-[70%]" : "opacity-0 pointer-events-none"} lg:hidden block transition-opacity duration-500 delay-75 ease-in-out fixed top-0 bottom-0 left-0 bg-white overflow-y-scroll  z-50 hide `}>
      <Sidebar />

    </div>

{/* cart for smaller screens */}

 <div className={`${isCartOpen ? "opacity-100 w-[70%]" : "opacity-0 pointer-events-none"} lg:hidden block transition-opacity duration-500 delay-75 ease-in-out fixed top-0 bottom-0 right-0 bg-white overflow-y-scroll px-5 pb-8 z-50 hide `}>
     <Cart />
    </div>
    </>
  )
}

export default Navbar
