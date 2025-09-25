"use client"
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import { Button } from './ui/button';

const ProverbContent = ({title , Data , onSelectChar} : {title:string , Data: any , onSelectChar : (char: string)=> void}) => {
  return (
    <div className="md:w-[35%] w-full">
     <h1 className="proverb-title text-orange-700  text-center pb-20 text-7xl md:text-white font-bold">{title}</h1>
    <div className='w-full h-full justify-start items-start   flex gap-5 flex-wrap'>
        {
          Data.map((item : any , idx : number)=> (
            <Button onClick={()=> onSelectChar(item)} style={{backgroundColor : item.color}} className='w-[70px] text-white inset-shadow-sm cursor-pointer h-[70px] flex justify-center items-center rounded-2xl text-4xl   font-bold'  key={idx} >{item.char}</Button>
          ))
        }
    </div>
    </div>
  )
}

export default ProverbContent
