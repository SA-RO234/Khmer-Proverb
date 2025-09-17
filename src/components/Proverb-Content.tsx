"use client"
import characters from '@/data/characters';
import React, { useEffect, useState } from 'react'
import DialogComponent from './dialog-components';

const ProverbContent = () => {
    const [ProverbData , setProverbdata]  = useState(characters);
  return (
    <div className='w-full h-full justify-start items-start   flex gap-5 flex-wrap'>
        {
          ProverbData.map((item : any , idx : number)=> (
            <DialogComponent key={idx}  char={item.char} color={item.color} />
          ))
        }
    </div>
  )
}

export default ProverbContent
