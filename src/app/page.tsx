import characters from '@/data/characters';
import React from "react";
import Carouselbg from "@/components/carousel-bg";
import ProverbContent from "@/components/Proverb-Content";
import Song from "@/components/Song";
import InfinitScroll from '@/components/ui/InfinitScroll';

export default function Home() {
  return (
    <>
    <Song/>
    <div className="flex  justify-center  h-full  w-full items-start py-20">
      <InfinitScroll/>
      <div className="background-wrapper w-full h-full after:content-['']  after:block after:bg-gray-700/50 after:absolute after:w-full after:h-full fixed z-[-1] inset-0">
          <Carouselbg/>
      </div>
      <div className="main-container flex flex-wrap justify-between  items-start  rounded-[30px] p-20 bg-gray-700/50  w-[90%] mx-auto ">
           <div className="w-[35%]">
             <ProverbContent title="ព្យញ្ជនះ ៣៣​​ តួ" Data={characters.proverb} />
           </div>
           <div className="line w-[2px] h-[700px] bg-gray-700/70"></div>
           <div className="w-[35%] ">
                <ProverbContent title="ស្រះ​​ ២៣ តួ" Data={characters.Pond} />
           </div>
       </div>
    </div>
      </>
  );
}
