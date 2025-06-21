import React from 'react'
import pizza from '../assets/pizza.png'
import icon2 from '../assets/icon (24).png'
import vector1 from '../assets/Vector (12).png'
import pizza1 from '../assets/pizza1.png'
import burger2 from '../assets/burger2.png'


const Order = () => {
  return (
    <div className='mt-5 '>
       <p className='text-[14px] font-semibold mb-4'>Order Menu</p>

       <div className='space-y-5'>
         
         <div className='flex w-full justify-between items-center'>
            <div className='flex items-center gap-1'>
            <img className='xl:w-[60px] w-[40px]' src={pizza} alt="" />
            <div>
                <p className='xl:text-[12px] text-[10px] font-semibold'>Pepperoni Pizza</p>
                <p className='text-gray-200 text-[10px]'>x1</p>
            </div>
              
            </div>

            <p>+ <span className='text-[#F8B602] text-[10px] xl:text-[12px]'>$</span> <span className='text-[10px] xl:text-[12px] '>5.59</span> </p>
         </div>

                  <div className='flex justify-between items-center'>
            <div className='flex items-center gap-1'>
            <img className='xl:w-[60px] w-[40px]' src={burger2} alt="" />
            <div>
                <p className='xl:text-[12px] text-[10px] font-semibold'>Cheese Pizza</p>
                <p className='text-gray-200 text-[10px]'>x1</p>
            </div>
              
            </div>

            <p>+ <span className='text-[#F8B602] xl:text-[12px] text-[10px]'>$</span> <span className='xl:text-[12px] text-[10px]'>5.59</span> </p>
         </div>

                  <div className='flex justify-between items-center'>
            <div className='flex items-center gap-1'>
            <img className='xl:w-[60px] w-[40px]' src={pizza1} alt="" />
            <div>
                <p className='xl:text-[12px] text-[10px] font-semibold'>Vegan Pizza</p>
                <p className='text-gray-200 text-[10px]'>x1</p>
            </div>
              
            </div>

            <p>+ <span className='text-[#F8B602] text-[10px] xl:text-[12px]'>$</span> <span className='xl:text-[12px] text-[10px]'>5.59</span> </p>
         </div>


       </div>


       <hr className='text-gray-300 mt-10'/>

       <div className='mt-5 sapce-y-5'>
           <div className='flex justify-between items-center'>
            <p className='text-gray-300 text-[12px]'>Service</p>
            <p>+ <span className='text-[#F8B602] xl:text-[12px] text-[10px]'>$</span> <span className='xl:text-[12px] text-[10px]'>5.59</span> </p>
           </div>

           <div className='flex justify-between items-center'>
            <p className='text-gray-300 text-[12px]'>Total</p>
            <p><span className='text-[#F8B602]'>$</span> <span className='text-[13px] font-semibold'>202.00</span> </p>
           </div>
       </div>

       <div className='border border-[#F8B602] mt-5 bg-[#F5F5F5] px-6 py-2 rounded flex xl:gap-5 gap-2 items-center'>
           <img className='w-[20px]' src={icon2} alt="" />
           <p className='text-[10px]'>Have a coupon code?</p>
           <img className='size-[10px]' src={vector1} alt="" />
       </div>

       <button className='bg-[#F8B602] px-6 py-2 rounded mt-5 text-white w-full text-[10px]'>Checkout</button>
    </div>
  )
}

export default Order
