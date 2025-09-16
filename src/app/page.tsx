
import React from "react";
import Carouselbg from "@/components/carousel-bg";

export default function Home() {
  return (
    <div>
      <div className="background-wrapper fixed inset-0">
          <Carouselbg/>
      </div>
      <div className="main-container absolute z-3 w-[80%] mx-auto mt-10">
         <h1 className="proverb-title text-center text-5xl font-bold">ព្យញ្ជនៈ ៣៣​​ តួ</h1>
       </div>
    </div>
  );
}
