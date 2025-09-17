
import React from "react";
import Carouselbg from "@/components/carousel-bg";
import ProverbContent from "@/components/Proverb-Content";
export default function Home() {
  return (
    <div className="flex  justify-center  h-full  w-full items-start p-20">
      <div className="background-wrapper w-full h-full after:content-['']  after:block after:bg-gray-700/50 after:absolute after:w-full after:h-full fixed z-0 inset-0">
          <Carouselbg/>
      </div>
      <div className="main-container  rounded-[30px] p-20 bg-gray-700/50 absolute z-3 w-[40%] mx-auto ">
         <h1 className="proverb-title text-center pb-20 text-7xl text-white font-bold">ព្យញ្ជនៈ ៣៣​​ តួ</h1>
           <ProverbContent/>
           
       </div>
    </div>
  );
}
