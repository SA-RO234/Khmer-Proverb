
"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
      <SwiperSlide> 
        <Image className='w-full h-full object-cover' fill  alt='' src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1757993930/boy-showed-his-muscle-strength_rresoy.jpg" /> 
      </SwiperSlide>
       <SwiperSlide> 
        <Image className='w-full h-full object-cover' fill  alt='' src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1757993931/boy-pretends-be-superhero-is-playing-as-astronaut-draw-concept_1_fgryah.jpg" /> 
      </SwiperSlide>
       <SwiperSlide> 
        <Image className='w-full h-full object-cover' fill  alt='' src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1757993924/girl-toy-plane_teoom5.jpg" /> 
      </SwiperSlide>
       <SwiperSlide> 
        <Image className='w-full h-full object-cover' fill  alt='' src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1757993926/boy-dream_gtl8sj.jpg" /> 
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Carouselbg