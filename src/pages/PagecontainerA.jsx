import { Link } from "react-router-dom"
import { X } from "lucide-react"
import Dinamica from "../assets/Pdfs/Dinâmica News - 2ª edição.pdf"

export default function PagecontainerA() {
    return (
           
                <div className="w-full h-screen text-white top-2 left-0 z-50 ">
                    <Link to="/conteudos" className="text-white">
                    <button className="position rounded absolute bg-laranja p-2"><X/></button>
                    </Link>
                    <embed src={Dinamica} type="application/pdf" className="w-full h-screen" />
                </div>
        )
    }