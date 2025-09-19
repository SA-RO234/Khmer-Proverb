import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import clsx from "clsx"

export default function DialogComponent({ char , color ,  }: { char: string  , color :string}) {
  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button  style={{backgroundColor : color , border : 0}} className={clsx("w-[70px] text-white inset-shadow-sm cursor-pointer h-[70px] flex justify-center items-center rounded-2xl text-4xl   font-bold")}
                variant="outline">{char}</Button>
        </DialogTrigger>
        <DialogContent className=" bg-black/90 px-[100px] flex justify-between">
          <DialogTitle className="text-[20em] text-white pr-[100px]  font-bold" >{char}</DialogTitle>
          <div className="line w-[2px] bg-white/50 opacity-35 h-[500px]"></div>
          <div className="w-full">
              
          </div>
        </DialogContent>
    </Dialog>
  )
}
