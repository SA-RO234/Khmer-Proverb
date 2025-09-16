import React from 'react'
import Image from "next/image";
const Carouselbg = () => {
  return (
<div id="default-carousel" className="relative w-full h-[100vh]  " data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div className="relative h-full w-full ">
        {/* <!-- Item 1 --> */}
        <div className="duration-700 w-full h-full ease-in-out" data-carousel-item>
            <Image
                src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1757993954/boy-with-academic-hat_cy6thm.jpg"
                alt="..."
                fill
                style={{ objectFit: "cover" }}
            />
        </div>
        {/* <!-- Item 2 --> */}
        <div className="duration-700 w-full h-full ease-in-out" data-carousel-item>
            <Image
                src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1757993924/girl-toy-plane_teoom5.jpg"
                alt="..."
                fill
                style={{ objectFit: "cover" }}
            />
        </div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
</div>
  )
}

export default Carouselbg