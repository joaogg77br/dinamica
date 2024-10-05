import { ChevronRight } from "lucide-react"

export default function LastNews(){
    return(
        
        <div className="w-full bg-gradient-to-r from-zinc-100 to-white p-4 sm:px-20 md:px-48">
           <p className="flex gap-2 text-white p-2 rounded-2xl duration-300 justify-center bg-laranja w-48 border-2 border-laranja hover:bg-white hover:text-laranja">Ultimas nóticias <ChevronRight/></p> 
        </div>
    )
}