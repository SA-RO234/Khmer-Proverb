"use client"
import React, { useEffect, useRef, useState } from 'react'
import "./DetailVerb.css";

const DetailVerb = ({selectedChar , Otherelement}: {selectedChar: any | null , Otherelement : any}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && selectedChar && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }, [selectedChar, isClient]);

  return (
    <>
      {selectedChar ? (
        <div className='flex items-center flex-col text-white justify-center w-full md:w-[50%]'>
          {/* Only render audio on client */}
          {isClient && (
            <audio
              ref={audioRef}
              src={selectedChar.sound}
              className='absolute top-0 left-0 hidden'
              controls={false}
              loop
            />
          )}
          <h1
            style={{ color: selectedChar.color }}
            className='md:text-[20em] pb-5 md:pb-0 text-[10em] titleDetail text-center font-bold text-white'
          >
            {selectedChar.char}
          </h1>
          <div className='w-full '>
            <p
              className='excempleText md:text-[5em] text-4xl font-bold font-moul'
              style={{ color: selectedChar.color }}
            >
              {selectedChar.excemple}
            </p>
            <div
              className="line w-[150px] md:w-[350px] mb-5 h-[5px]"
              style={{ backgroundColor: selectedChar.color }}
            ></div>
            <p
              className='md:text-5xl text-3xl font-bold leading-15 md:leading-20'
              style={{ color: selectedChar.color }}
            >
              {selectedChar.advice}
            </p>
          </div>
        </div>
      ) : (
        <>{Otherelement}</>
      )}
    </>
  );
};

export default DetailVerb;