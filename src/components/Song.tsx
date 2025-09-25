"use client";
import { Music , Play ,SkipBack ,SkipForward } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import "./Song.css";
import clsx from 'clsx';
import useSound  from 'use-sound';
import SongData from '@/data/songData';


const Song = () => {
    const [currentSong , setCurrentSong] = useState<number>(0);
    const [isPlaying , setIsPlaying] = useState<boolean>(false);
    const [play ,controls] = useSound(SongData[currentSong],{
       onplay : ()=> setIsPlaying(true),
       onpause : ()=> setIsPlaying(false),
       onstop : ()=> setIsPlaying(false), 
       onend : ()=> setIsPlaying(false),
       interrupt: true
    });

      useEffect(()=>{
        if(isPlaying){
           play();
        }
      },[currentSong]);

   const togglePlay = ()=>{
     if(isPlaying){
      controls.stop();
      setIsPlaying(false);
     }else{
      controls.stop();
      play();
     }
     setIsPlaying(!isPlaying);
   }

   const songNext = ()=>{
     controls.stop();
     setCurrentSong((prev)=> (prev+1) % SongData.length);
     setTimeout(() => play(), 0);
   }
   const songPrev = ()=>{
     controls.stop();
     setCurrentSong((prev)=> (prev-1 + SongData.length) % SongData.length);
     setTimeout(() => play(), 0);
   }

  return (
    <div className='fixed flex gap-5 group justify-center items-center hover:border w-[250px] h-[100px] rounded-3xl border-[#79717181] z-3 bottom-65 right-10'>
        <button onClick={songPrev} className='cursor-pointer flex justify-center items-center hover:bg-transparent hover:border border-[#79717181] opacity-0 duration-300 bg-black hover:text-[#79717181] rounded-full w-[50px] h-[50px] text-white group-hover:opacity-100' type='button'><SkipBack/></button>
        <button type="button" onClick={togglePlay}  className={clsx( isPlaying ?"songBtn" : "","bg-black px-4 text-white rounded-full cursor-pointer py-4")}>
           { isPlaying ? <Music /> : <Play/>  }
        </button>
         <button onClick={songNext} className='cursor-pointer opacity-0 duration-300 bg-black  hover:bg-transparent hover:border border-[#79717181] hover:text-[#79717181] text-white w-[50px] flex justify-center items-center h-[50px] rounded-full group-hover:opacity-100' type='button'><SkipForward/></button>
    </div>
  )
}

export default Song