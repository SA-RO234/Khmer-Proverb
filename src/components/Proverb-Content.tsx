"use client"
import characters from '@/data/characters';
import React, { useEffect, useState } from 'react'

const ProverbContent = () => {
    const [ProverbData , setProverbdata]  = useState(characters);
  return (
    <div className='w-full h-full justify-center  px-[250px] flex gap-10 flex-wrap'>
        {
            ProverbData.map((item)=>(
                 <button key={item.id} className='w-[70px] h-[70px] flex justify-center items-center rounded-2xl text-4xl text-white  bg-gray-700 font-bold' type="button"  >{item.char}</button>
            ))
        }
    </div>
  )
}

export default ProverbContent