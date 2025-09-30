import Category_Container from "@/components/homepage/Category_Container";
import { Search , Plus } from "lucide-react";


export default function Home() {
  return (
   <div className="w-full h-auto bg-yellow">
         <div className="lg:w-[65%] w-full sm:w-full px-5 md:px-0 sm:px-5 mx-auto pt-10 h-full">
           <h1 className="logo-name pb-5 font-luckiest text-pink text-5xl text-center sm:text-center md:text-start font-[800]">Krousar</h1>
           <div className="flex mb-10 relative items-center border-0 h-[50px] rounded-4xl w-full sm:w-full md:w-[300px]">
             <input placeholder="Find a Task You want do..." type="text" className="w-full  caret-pink font-bold text-sm text-pink placeholder:text-pink/50 px-5 placeholder:h-full focus:outline-3 outline-offset-2 focus:outline-pink bg-black/90 border-0 rounded-2xl h-full " name="" id="" />
              <Search className="absolute text-pink  right-5 " />
           </div>
             <Category_Container/>
                <Category_Container/>
                   <Category_Container/>
        </div>
        <footer className="w-[65%] mx-auto pt-10 pb-40 text-center">
            <h1 className="text-8xl text-pink/50  font-bold font-righteous">Thank you for using <span className="font-luckiest font-light text-pink text-8xl"> krousar </span></h1>
            <h1 className="text-7xl font-bold text-pink/50  font-righteous">Build by-<a className="underline text-pink" href="#">Sun Rosa</a></h1>
        </footer>
   </div>
  );
}
