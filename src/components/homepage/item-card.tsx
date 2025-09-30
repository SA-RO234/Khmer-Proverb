import React from 'react'
import Kids1 from '../../../public/image/kids-1.png';
import Image from 'next/image';

const Itemcard = () => {
  return (
    <div className='bg-pink h-[200px] flex justify-center flex-col items-center overflow-hidden relative cursor-pointer rounded-xl  w-[150px] '>
      <Image className='w-full object-cover h-full' src={Kids1} alt="" />
        <div className='absolute bottom-5 bg-black/70 py-3 px-2 w-[80%] rounded-[10px] flex justify-center items-center'>
          <h1 className='text-[1em]  text-pink font-bold text-center font-righteous'>Letters Khmer</h1>
        </div>
    </div>
  )
}

export default Itemcard;