"use client";
import React from 'react'
import Lottie from "lottie-react";
import Emoji1 from "../../public/animation/happy.json";
import { MoveRight } from 'lucide-react';
import "./DetailVerb.css";
const DetailVerb = ({selectedChar} : {selectedChar : any | null} ) => {
  return (
    <>
    {
      selectedChar ? (
              <div className='flex  items-center flex-col text-white justify-center  w-[50%] '>
              <audio src={selectedChar.sound} className='absolute top-0 left-0 hidden '  controls autoPlay loop ></audio>
        <h1 style={{color: selectedChar.color}} className='text-[20em]  titleDetail text-center font-bold text-white'>{selectedChar.char}</h1>
        <div className='w-full'>
            <p className=' excempleText text-[5em] font-bold  font-moul' style={{color:selectedChar.color}} >{selectedChar.excemple!}</p>  
            <div className="line w-[350px] mb-5 h-[5px]" style={{backgroundColor:selectedChar.color}} ></div>
            <p className='text-5xl font-bold leading-20'  style={{color:selectedChar.color}} >{selectedChar.advice!}</p>             
        </div> 
    </div>
      ) : (
        <div className="text-gray-400">ជ្រើសរើសអក្សរមួយ...</div>
      )
    }
    </>
  )
}

export default DetailVerb