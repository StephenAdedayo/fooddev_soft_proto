import React from 'react'
import vector1 from '../assets/Vector (14).png'
import pizza from '../assets/pizza.png'
import ellipse from '../assets/Ellipse 29.png'
import asian1 from '../assets/asian1.png'
import asian2 from '../assets/asian2.png'
const Recent = () => {

    const items = [{name: 'Fish Burger', img : pizza}, {name: 'Japan Ramen', img : asian1}, {name: 'Fried Rice', img : asian2},]

  return (
    <div className='w-full sm:px-8 py-8 px-5 '>
        <div className='flex justify-between items-center mb-5'>
        <p className='font-semibold text-[13px]'>Recent Order</p>
        <p className='text-[#F8B602] text-[11px]'>View All</p>
      </div>
      

      <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
        {items.map((item, index) => (
            <div className='bg-white p-5 rounded relative flex flex-col gap-3 items-center justify-center' key={index}>
              <img src={vector1} className='absolute top-4 right-4' alt="" />

              <img src={item.img} alt="" />
              <p className='text-[12px]'>{item.name}</p>
              <p className='text-[12px]'><span className='text-[#F8B602] text-[12px]'>$</span>5.59</p>

              <div className='text-[#A098AE] text-[13px] flex items-center gap-2'>
                <p>4.97km</p>
                <img src={ellipse} alt="" />
                <p>21 min</p>
              </div>

            </div>
        ))}
      </div>

    </div>
  )
}

export default Recent
