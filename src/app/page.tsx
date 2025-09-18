
import React from "react";
import Carouselbg from "@/components/carousel-bg";
import ProverbContent from "@/components/Proverb-Content";
import Song from "@/components/Song";

export default function Home() {
  return (
    <>
    <Song/>
    <div className="flex  justify-center  h-full  w-full items-start py-20">
      <div className="background-wrapper w-full h-full after:content-['']  after:block after:bg-gray-700/50 after:absolute after:w-full after:h-full fixed z-[-1] inset-0">
          <Carouselbg/>
      </div>
      <div className="main-container  rounded-[30px] p-20 bg-gray-700/50  w-[90%] mx-auto ">
           <div className="w-[40%]">
             <h1 className="proverb-title text-center pb-20 text-7xl text-white font-bold">ព្យញ្ជនៈ ៣៣​​ តួ</h1>
             <ProverbContent/>
           </div>
           <div className="line"></div>
           <div className="w-[40%]">

           </div>
       </div>
    </div>
      </>
  );
}
