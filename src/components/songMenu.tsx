import SongData from '@/data/songData'
import clsx from 'clsx';
import React, { useRef, useState } from 'react'
import PlaySongIcon from "../../public/animation/play.json";;
import Lottie from "lottie-react";
const SongMenu = ({status}: {status : boolean}) => {
  const [play , setPlay] = useState<number | null>(null);
  const audioRef = useRef<(HTMLAudioElement | null)[]>([])
  const handlePlay = (idx : number)=> {
     const audio = audioRef.current[idx];
     if(!audio) return ;
     if(play === idx){
       audio.pause();
        setPlay(null);
     }else{
       if(play !== null && audioRef.current[play]){
         audioRef.current[play]?.pause();
         audioRef.current[play]!.currentTime = 0;
       }
       audio.play();
       setPlay(idx);
     }
  };
  return (
    <ul className={clsx ( status ? "block" : "hidden" , "list absolute z-[1000]  md:right-23 md:top-40 right-5 top-30  bg-black w-[300px] text-white  shadow-md")}>
    {
      SongData.map((item : string ,idx : number)=>(
      <li key={idx} className="list-row">
    <div className={clsx( play === idx ? "bg-transparent" : "bg-white" , "w-11 h-11 flex justify-center items-center")}>
      {
        play === idx ? 
         <Lottie animationData={PlaySongIcon} loop={true} className='w-8 h-8' />
        :
        <h2 className='text-3xl font-bold text-black font-sans' >{idx + 1}</h2>
      }
   </div>
    <div>
      <div>Song-{idx+1}</div>
      <audio onEnded={()=> setPlay(null)} ref={(el) => { audioRef.current[idx] = el; }}  className='hidden absolute ' src={item} controls ></audio>
      <div className="text-xs uppercase font-semibold opacity-60">Khmer Children</div>
    </div>
    <button onClick={()=> handlePlay(idx)} className="btn btn-square btn-ghost">
      {play === idx ? (
              // Pause icon
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></g></svg>
            ) : (
              // Play icon
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
            )}
         </button>
    <button className="btn btn-square btn-ghost">
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li> 
      ))
    }
 
</ul>
  )
}

export default SongMenu