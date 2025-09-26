"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AllSlide from '@/data/AllSlide';

const Carouselbg = () => {
  return (
       <div className='w-full h-full'>
        <Swiper
        modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
        autoplay={{delay : 2000 ,stopOnLastSlide : false}}
        loop={true}
      spaceBetween={50}
      slidesPerView={1}
    
      className='w-full h-full'
    >
      {
        AllSlide.map((item)=>(
          <SwiperSlide key={item.id}> 
            <Image
              priority={item.priority} // <-- Set priority for the first image
              className='w-full h-full object-cover'
              fill
              alt=''
              src={item.img}
            /> 
          </SwiperSlide>
        ))
      }
    </Swiper>
    </div>
  )
}

export default Carouselbg