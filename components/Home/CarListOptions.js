import { CarListData } from '/utils/CarListData'
import React, { act, useState } from 'react'
import CarListItem from './CarListItem'
import { useRouter } from 'next/navigation';

function CarListOptions({distance}) {
    const [activeIndex,setActiveIndex] = useState();
    const [selectedCar,setSelectedCar] = useState([]);
    const router = useRouter();

  return (
    <div className='mt-7 p-5 overflow-auto h-[315px]'>
      <h2 className=' text-[20px] font-bold mb-4'
      >Recommended </h2>
      {CarListData.map((item,index)=>(
            <div className={`cursor-pointer p-3 rounded-md border-black
                ${activeIndex==index?'border-[2px]':null}`
            }
            onClick={()=>{setActiveIndex(index);
                setSelectedCar(item)}
            }>
                <CarListItem car={item} distance = {distance}/>
            </div>       
        ))}
        {selectedCar?.name?<div className='flex justify-between fixed
        bottom-5 bg-white p-3 shadow--xl border-[2px]
        rounded-lg items-center

        w-full md:w-[30%] '>
            <h2>Make Payment For</h2>
            <button className='p-3 bg-black text-white rounded-lg
            text-center'
            onClick={()=>router.push('/payment?amount='+(selectedCar.amount*distance).toFixed(1))}
            >Request {selectedCar.name}</button>
        </div>:null}
    </div>
  )
}
export default CarListOptions
