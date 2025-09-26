"use client"
import { Button } from './ui/button';
import type { SelectedCharType } from '@/lib/DetailType';

export type Character = SelectedCharType;

type ProverbContentProps = {
  Data: Character[];
  onSelectChar: (char: SelectedCharType) => void;
  title: string;
};

const ProverbContent = ({ title, Data, onSelectChar }: ProverbContentProps) => {
  return (
    <div className="md:w-[35%] w-full">
      <h1 className="proverb-title text-orange-700 text-center pb-20 text-4xl md:text-7xl md:text-white font-bold">{title}</h1>
      <div className='w-full h-full md:justify-start justify-center items-start flex gap-5 flex-wrap'>
        {
          Data.map((item: Character, idx: number) => (
            <Button
              onClick={() => onSelectChar(item)}
              style={{ backgroundColor: item.color }}
              className='w-[70px] text-white inset-shadow-sm cursor-pointer h-[70px] flex justify-center items-center rounded-2xl text-4xl font-bold'
              key={idx}
            >
              {item.char}
            </Button>
          ))
        }
      </div>
    </div>
  )
}

export default ProverbContent
