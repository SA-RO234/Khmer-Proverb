
"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Carouselbg = () => {
  return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
     
        navigation

      spaceBetween={50}
      slidesPerView={1}
    
    >
      <SwiperSlide> 
        <Image className='w-full h-full'  alt='' src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1757993943/temple-angkor-wat-cambodia_dzbwhv.jpg" fill /> </SwiperSlide>
    </Swiper>
  )
}

export default Carouselbg