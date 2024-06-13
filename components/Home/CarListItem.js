import React from 'react'
import Image from 'next/image'
import { HiUser } from "react-icons/hi";

function CarListItem({car,distance}) {
  return (
    <div >
      <div className='flex items-center justify-between mt-2'>
        <div className='flex items-center gap-5'>
        <Image src ={car.image} width={100} height={100}
        className='mb-3 '
        />
        <div className=' text-[15px]'>
            <h2 className='font-semibold flex gap-3 items-center'>
                {car.name}
                <span className='flex text-[14px] font-normal items-center'>
                <HiUser />
                {car.seat}
                </span>
            </h2>
            <p>{car.desc}</p>
        </div>
        </div>
        <h2 className='text-[17px] font-semibold'>${(car.amount*distance).toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default CarListItem
