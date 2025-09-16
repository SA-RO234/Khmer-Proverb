
import React from "react";
import Carouselbg from "@/components/carousel-bg";
import ProverbContent from "@/components/Proverb-Content";
export default function Home() {
  return (
    <div className="flex justify-center h-[200vh]  w-full items-start p-20">
      <div className="background-wrapper w-full h-full fixed inset-0">
          <Carouselbg/>
      </div>
      <div className="main-container  rounded-[30px] p-20 bg-gray-700/50 absolute z-3 w-[80%] mx-auto ">
         <h1 className="proverb-title text-center pb-20 text-7xl text-white font-bold">ព្យញ្ជនៈ ៣៣​​ តួ</h1>
           <ProverbContent/>
           <h1 className="text-5xl text-primary-700 font-bold">ពណ៌ខៀវ​​ ៖​​ ព្យញ្ជនៈពួក « អ »</h1>
           <h1 className="text-5xl font-bold text-red-700">ពណ៌ក្រហម​ ៖​​ ព្យញ្ជនៈពួក « អ៊​ »</h1>
       </div>
    </div>
  );
}
