import React from 'react'
import baked from '../assets/Baked.png'
import burger from '../assets/Burger.png'
import fish from '../assets/Fish.png'
import fast from '../assets/Fast.png'
import coffee from '../assets/Coffee.png'
import chicken from '../assets/Chicken.png'

const Category = () => {


    const items = [{name : "Bakery", img:baked}, {name : "Burger", img:burger},{name : "Beverage", img:coffee},{name : "Chicken", img:chicken},{name : "Pizza", img:fast},{name : "Fish", img:fish}, ]

  return (
    <div className='w-full p-8 mt-5'>
      <div className='flex justify-between items-center mb-5'>
        <p className='font-semibold text-[13px]'>Category</p>
        <p className='text-[#F8B602] text-[11px]'>View All</p>
      </div>

      <div className='grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-5'>
         {items.map((item, index) => (
            <div className='py-8 px-4 flex flex-col gap-5 justify-center items-center bg-white rounded '>
                <img className='w-[30px]' src={item.img} alt="" />
                <p className='text-[13px]'>{item.name}</p>
            </div>
         ))}
      </div>
    </div>
  )
}

export default Category
