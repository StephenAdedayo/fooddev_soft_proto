import React from 'react'
import location from '../assets/Location.svg'

const Address = () => {
  return (
    <div className='mt-5 space-y-3'>
       <p className='text-[#A098AE] text-[10px]'>Your address</p>

       <div className='flex justify-between items-center'>
        <div className='flex xl:flex-row flex-col gap-3 items-center'>
            <img src={location} alt="" />
            <p className='text-[12px] font-semibold'>Elm street, 23</p>
        </div>
        <button className='px-6 py-2 border border-[#F8B602] text-[#F8B602] rounded text-[10px]'>Change</button>
       </div>

       <p className='text-[10px] text-[#A098AE]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, nemo.</p>

       <div className='flex flex-col xl:flex-row gap-3'>
    <button className='px-6 py-2 border border-[#A098AE] text-[#A098AE] rounded text-[10px]'>Add Details</button>
    <button className='px-6 py-2 border border-[#A098AE] text-[#A098AE] rounded text-[10px]'>Add Note</button>

       </div>
    </div>
  )
}

export default Address
