import React from 'react'
import asian from '../assets/asian.png'

const Hero = () => {
  return (
    <div className='bg-[url("https://res.cloudinary.com/dfuse3jtq/image/upload/v1750464975/hero_rpnrmk.png")] flex justify-between items-center mx-8 rounded p-5 bg-cover bg-center'>
       
       <div className='space-y-2'>
        <p className='font-semibold text-white text-[20px]'>Get Discount Voucher <br />
Up To 20%  </p>
<p className='text-white text-[10px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt. </p>
       </div>

       <div className=''>
<img src={asian} alt="" />
       </div>

    </div>
  )
}

export default Hero
