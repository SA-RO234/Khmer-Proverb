import React from 'react'
import "./InfinitScroll.css";
import Quote from '@/data/Quote';

const InfinitScroll = () => {
  return (
    <div className='absolute w-full h-[50px] overflow-hidden top-2 left-0 border-y' >
          <div className='w-full infinitScroll h-full flex items-center justify-start'>
              {
                   Quote.map((item , idx)=>(
                          <div key={idx}
                           style={{width : item.width , maxWidth: item.width , minWidth : item.width}}
                           className={` h-full quite pl-6 flex justify-center items-center`}>
                            <p className='text-gray-500/100'>🧒 {item.title} 🧒</p>
                        </div>
                   ))
              }
          </div>
      </div>
  )
}

export default InfinitScroll