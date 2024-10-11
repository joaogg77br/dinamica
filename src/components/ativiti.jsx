import { Check } from "lucide-react"

export default function Ativiti({Txt,imagem}){
    return(
        <>
                <div className="w-56 h-48 flex flex-col  text-sm font-medium gap-4 justify-center items-center bg-white text-center p-8 rounded-2xl lg:w-72 lg:h-52 text-zinc-800 2xl:w-56 2xl:h-52">
                    <div className="flex justify-center items-center rounded-xl bg-opacity-50 ">
                       <img src={imagem} className="h-16"/>
                    </div>
                    <p className="font-bold">{Txt}</p>
                </div>
        </>
    )
}