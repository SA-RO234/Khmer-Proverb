"use client";
import { Music , Play  } from 'lucide-react'
import React, { useState } from 'react'
import "./Song.css";
import clsx from 'clsx';
import SongData from '@/data/songData';
const Song = () => {
    const [play , setPlay] = useState(false);
  return (
    <div className='fixed z-3 bottom-20 right-20'>
        <button type="button" onClick={()=> setPlay(!play)}  className={clsx( play ?"songBtn" : "","bg-black px-4 text-white rounded-full cursor-pointer py-4")}>
           { play ? <Music /> : <Play/>  }
        </button>
    </div>
  )
}

export default Song