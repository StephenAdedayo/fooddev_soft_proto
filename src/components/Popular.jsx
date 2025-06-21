import React from 'react'
import fresh from '../assets/fresh.png'
import vector1 from '../assets/Vector (13).png'
import { FaStar } from 'react-icons/fa'
import burger3 from '../assets/burger3.png'
import burger2 from '../assets/burger1.png'

const Popular = () => {

    const items = [{name: "Fish Burger", img: fresh}, {name: "Beef Burger", img: burger3}, {name: "Cheese Burger", img: burger2},]

  return (
    <div className='w-full  p-8'>
            <div className='flex justify-between items-center mb-5'>
        <p className='font-semibold text-[13px]'>Popular Dishes</p>
        <p className='text-[#F8B602] text-[11px]'>View All</p>
      </div>

      <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 '>
        {
            items.map((item, index) => (
                <div key={index} className='p-5 relative bg-white rounded'>
                     <p className='bg-[#EB5757] p-1 rounded-r-sm text-white text-[10px] absolute top-3 left-0'>15% Off</p>
                     <img src={vector1} alt="" className='absolute top-3 right-3'/>

                         <div className='w-full flex items-center justify-center'>
                            <img  src={item.img} alt="" />

                         </div>
                     <div className='flex items-center gap-1 mt-2'>
                        <FaStar className='text-[#F8B602]'/>
                        <FaStar className='text-[#F8B602]'/>
                        <FaStar className='text-[#F8B602]'/>
                        <FaStar className='text-[#F8B602]'/>
                        <FaStar className='text-[#F8B602]'/>
                     </div>


                     <div className='mt-3 flex justify-between items-center'>
                       <div>
                   <p className='text-[12px]'>{item.name}</p>
                   <p className='text-[12px]'><span className='text-[#F8B602] text-[12px]'>$</span>5.59</p>
                       </div>

                       <p className='bg-[#F8B602] text-white py-2 px-3 rounded'>+</p>
                     </div>
                </div>
            ))
        }
      </div>

    </div>
  )
}

export default Popular
