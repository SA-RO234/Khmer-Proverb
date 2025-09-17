import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DialogComponent({ char , color ,  }: { char: string  , color :string}) {
  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button  style={{backgroundColor : color , border : 0}} className="w-[70px] inset-shadow-sm cursor-pointer h-[70px] flex justify-center items-center rounded-2xl text-4xl text-white  font-bold"
                variant="outline">{char}</Button>
        </DialogTrigger>
        <DialogContent className=" bg-black/90 px-[100px] flex justify-between">
          <DialogTitle className="text-[20em] pr-[100px] text-white font-bold" >{char}</DialogTitle>
          <div className="line w-[2px] bg-white/50 opacity-35 h-[500px]"></div>
          <div className="w-full">
              
          </div>
        </DialogContent>
    </Dialog>
  )
}
