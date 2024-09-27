import { Check } from "lucide-react"

export default function Ativiti({Txt}){
    return(
        <>
                <div className="w-40 h-48 flex flex-col  text-sm font-medium gap-4 justify-center items-center bg-white text-center p-8 rounded-2xl lg:w-60 lg:h-36 text-zinc-800">
                    <div className="p-1 flex justify-center items-center rounded-xl bg-laranja bg-opacity-50">
                        <Check color="orange" />
                    </div>
                    <p>{Txt}</p>
                </div>
        </>
    )
}