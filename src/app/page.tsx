"use client";
import characters from '@/data/characters';
import React, { useState } from "react";
import Carouselbg from "@/components/carousel-bg";
import ProverbContent from "@/components/Proverb-Content";
import InfinitScroll from '@/components/ui/InfinitScroll';
import DetailVerb from '@/components/DetailVerb';
import Menu from '@/components/Menu';

export default function Home() {
  const [selectedChar , setSelectedChar] = useState<string | null >(null);
  return (
    <>
    <Menu />
    <div className="flex  justify-center  h-full  w-full items-start py-20">
      <InfinitScroll/>
      <div className="background-wrapper w-full h-full after:content-['']  after:block after:bg-gray-700/50 after:absolute after:w-full after:h-full fixed z-[-1] inset-0">
          <Carouselbg/>
      </div>
      <div className="main-container  md:flex-row gap-20 md:gap-0 flex-col flex flex-wrap justify-between  items-start   md:p-20 p-5 bg-transparent md:bg-gray-700/50  w-full md:w-[90%] mx-auto ">
             <ProverbContent onSelectChar={setSelectedChar} title="ព្យញ្ជនះ ៣៣​​ តួ" Data={characters.proverb} />
           <div className="line w-[2px] hidden md:block h-[700px] bg-gray-700/70"></div>
              <DetailVerb Otherelement={<ProverbContent Data={characters.Pond} onSelectChar={setSelectedChar} title='ស្រះ ២៣ តួ'  />}  selectedChar={selectedChar} />
       </div>
    </div>
      </>
  );
}
