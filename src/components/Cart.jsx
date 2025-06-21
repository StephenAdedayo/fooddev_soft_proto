import React from 'react'
import chat from '../assets/chat.png'
import notification from '../assets/notification.png'
import setting from '../assets/setting.png'
import placeholder from '../assets/placeholder.png'
import Balance from './Balance'
import Address from './Address'
import Order from './Order'

const Cart = () => {
  return (
    <div className='w-full pt-8 px-5'>
       
       <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
        <img className='w-[40px]' src={notification} alt="" />
        <img className='w-[40px]' src={chat} alt="" />
        <img className='w-[40px]' src={setting} alt="" />
        </div>

        <div>
            <img className='w-[40px]' src={placeholder} alt="" />
        </div>
       </div>

       <Balance />
       <Address />
       <Order />

    </div>
  )
}

export default Cart
