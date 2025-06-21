import React from 'react'
import logo from '../assets/GoMeal.png'
import vector from '../assets/vector (7).png'
import vector1 from '../assets/vector (8).png'
// import vector2 from '../assets/vector (9).png'
import vector3 from '../assets/vector (10).png'
import vector4 from '../assets/vector (11).png'
import vector5 from '../assets/vector (6).png'
import vector6 from '../assets/Process.png'
import banner from '../assets/banner.png'

const Sidebar = () => {
  

    const links = [{name : "Dashboard", img : vector5}, {name : "Food Order", img : vector}, {name : "Favorite", img : vector1}, {name : "Message", img : vector}, {name : "Order History", img : vector3}, {name : "Bills", img : vector4}, {name : "Settings", img : vector6}]


  return (
    <div className='p-8  flex flex-col  w-full'>
       <img className='w-[120px] mb-14' src={logo} alt="" />
       
       <div>
        {links.map((link, index) => (
            <div className={`flex xl:gap-5 gap-3 items-center mb-5  ${link.name === ('Dashboard') ? "bg-[#F8B602] text-white xl:px-6 px-4 py-3 rounded" : "px-6 py-3"} `  }>
             <img className='w-[20px]' src={link.img} alt="" />
            <p className={`${link.name === ('Dashboard') ? "text-white " : "text-[#A098AE]"} capitalize font-medium xl:text-[14px] text-[14px] lg:text-[10px] `} key={index} href="">{link.name}</p>
            </div>
        ))}
       </div>

      {/* <div className='space-y-3 p-3 bg-yellow-500 mt-10 rounded flex flex-col items-center justify-center text-center'>
        <p className='text-white font-bold text-[13px]'>Upgrade your
Account to Get Free Voucher</p>
<button className='px-6 py-2 bg-white rounded text-[13px] font-bold'>Upgrade</button>
      </div> */}
      <img src={banner} className='w-[180px]' alt="" />
    </div>
  )
}

export default Sidebar
