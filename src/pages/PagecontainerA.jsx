import { Link } from "react-router-dom"
import { X } from "lucide-react"
import Dinamica1 from "../assets/Pdfs/Dinâmica News - 1 EDIÇÃO.pdf"
export default function NewPagepdf() {
    return (
           
                <div className="w-full h-screen text-white top-2 left-0 z-50 ">
                    <Link to="/conteudos" className="text-white">
                    <button className="position rounded absolute bg-laranja p-2"><X/></button>
                    </Link>
                    <embed src={Dinamica1} type="application/pdf" className="w-full h-screen" />
                </div>
        )
    }