"use client"
import DialogComponent from './dialog-components';
const ProverbContent = ({title , Data} : {title:string , Data: any}) => {
  return (
    <>
     <h1 className="proverb-title text-center pb-20 text-7xl text-white font-bold">{title}</h1>
    <div className='w-full h-full justify-start items-start   flex gap-5 flex-wrap'>
        {
          Data.map((item : any , idx : number)=> (
            <DialogComponent key={idx}  char={item.char} color={item.color} />
          ))
        }
    </div>
    </>
  )
}

export default ProverbContent
