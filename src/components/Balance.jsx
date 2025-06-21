import React from 'react'
import icon1 from '../assets/icon (23).png'


const Balance = () => {
  return (
    <div className='mt-5'>
      <p className='mb-3 text-[13px] font-semibold'>Your Balance</p>

      <div className='bg-[url("https://res.cloudinary.com/dfuse3jtq/image/upload/v1750462137/background_9_nyec7l.png")] h-[100px] flex items-center p-3 gap-5 justify-center rounded-xl'>
         <div className='bg-white p-2 rounded'>
            <p className='text-[13px]'>Balance</p>
            <p className='font-bold'>$12.000</p>
         </div>
     

     <div className='flex flex-col items-center gap-3'>
        <img className='w-[30px]' src={icon1} alt="" />
        <p className='text-white font-medium text-[10px]'>Top up</p>
     </div>

     <div className='flex flex-col items-center gap-3'>
        <img className='w-[30px]' src={icon1} alt="" />
        <p className='text-white font-medium text-[10px]'>Top up</p>
     </div>


      </div>
    </div>
  )
}

export default Balance
