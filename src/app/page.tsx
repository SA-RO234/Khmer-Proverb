
import React from "react";
import Carouselbg from "@/components/carousel-bg";

export default function Home() {
  return (
    <div className="flex justify-center w-full h-[100vh] items-center p-20">
      <div className="background-wrapper w-full h-full fixed inset-0">
          <Carouselbg/>
      </div>
      <div className="main-container rounded-[30px] p-20 bg-gray-700/50 fixed z-3 w-[80%] mx-auto ">
         <h1 className="proverb-title text-center text-7xl text-white font-bold">ព្យញ្ជនៈ ៣៣​​ តួ</h1>
       </div>
    </div>
  );
}
