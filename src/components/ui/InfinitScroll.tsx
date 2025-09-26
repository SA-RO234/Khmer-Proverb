import React from 'react'
import "./InfinitScroll.css";
import Quote from '@/data/Quote';
import { motion } from 'framer-motion';

const InfinitScroll = () => {
    const gap = 24;
    const itemWidth = 1100 + gap;
   const totalWidth =  Quote.length * itemWidth;
   const quoteLoop = [...Quote , ...Quote];
  return (
   <div className="absolute bg-gray-700/50 w-full md:w-[90%] left-0 md:left-[80px] flex justify-center items-center top-3   h-[60px] z-3 overflow-hidden">
          <motion.div
            className="flex"
            style={{ width : totalWidth * 2}}
            animate={{ x: [-totalWidth, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration:30,
                ease: 'linear',
              },
            }}
          >
            {quoteLoop.map((item, index) => (
                <div key={index}  className='w-[1100px] flex justify-center items-center'>
               <h1 className='text-white infinitTitle text-2xl font-bold'>{item.title}</h1>
               </div>
            ))}
          </motion.div>
        </div>
  )
}

export default InfinitScroll